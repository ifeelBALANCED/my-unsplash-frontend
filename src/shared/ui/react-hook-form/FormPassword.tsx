import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import classNames, { Argument } from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form/dist/types/form";

export interface CommonFieldProps {
  name: string;
  error?: string;
}

interface FieldInputProps<Control> extends CommonFieldProps {
  errorClassName?: Argument;
  control: Control;
  inputClassName?: Argument;
  invalidInputClassName?: Argument;
  country?: string;
  disabled?: boolean;
  name: string;
  label: string;
  placeholder: string;
}

type Props<C> = FieldInputProps<C> &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const FieldPassword = <C extends Control<any>>({
  control,
  className,
  errorClassName = "border-danger text-danger",
  error,
  name,
  placeholder,
  label,
  ...props
}: Props<C>) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={props.defaultValue || ""}
      render={({ field }) => {
        return (
          <FormControl isInvalid={Boolean(error)}>
            <FormLabel
              fontFamily="Noto Sans"
              fontWeight={500}
              fontSize="14px"
              lineHeight="19px"
              color="#4F4F4F"
            >
              {label}
            </FormLabel>
            <InputGroup size="md">
              <Input
                {...field}
                placeholder={placeholder}
                fontFamily="Noto Sans"
                fontWeight={500}
                fontSize="14px"
                type={show ? "text" : "password"}
                lineHeight="19px"
                border="1px solid #4F4F4F"
                dropShadow="0px 1px 6px rgba(0, 0, 0, 0.1)"
                borderRadius="12px"
                className={classNames(error && errorClassName, className)}
                color="#BDBDBD"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
        );
      }}
    />
  );
};

export default FieldPassword;
