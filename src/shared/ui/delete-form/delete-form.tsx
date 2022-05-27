import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  Flex,
  ModalBody,
  ModalFooter,
  Text,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStore } from "effector-react";
import { useForm } from "react-hook-form";

import { PhotoEntity } from "@/app/types";
import { PhotosService } from "@/features/services/photos.service";
import { $deleteRequestInfo } from "@/shared/api/photos";
import { submitForm } from "@/shared/api/photos/events";
import { deleteFormSchema } from "@/shared/ui/delete-form/schema/delete-form.schema";
import FieldPassword from "@/shared/ui/react-hook-form/FormPassword";

export type DeleteFormValues = {
  password: string;
};

type DeleteFormProps = {
  onClose: () => void;
  $photo: PhotoEntity | null;
};

export const DeleteForm = ({ onClose, $photo }: DeleteFormProps) => {
  const { hasCopied, onCopy } = useClipboard($photo?.password as string);
  const toast = useToast();
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm<DeleteFormValues>({
    mode: "onChange",
    resolver: yupResolver(deleteFormSchema),
  });
  const values = watch();
  const { error } = useStore($deleteRequestInfo);
  const passwordMatch = values.password === $photo?.password;
  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>
    );
  }

  const onSubmit = async () => {
    const response = await PhotosService.$deletePhotoFx($photo?.id as number);
    if (response) {
      toast({
        title: `Photo successfully deleted!`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      onClose();
      submitForm();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody pb={6}>
        <Flex mb={2} justify="space-between" flexDir="column">
          <Text>Password to delete image:</Text>
          <Box>
            <Badge colorScheme="purple" fontSize="medium">
              {$photo?.password}
            </Badge>
            <Button ml={2} onClick={onCopy}>
              {hasCopied ? "Copied" : "Copy"}
            </Button>
          </Box>
        </Flex>
        <FieldPassword
          control={control}
          name="password"
          label={"Password"}
          placeholder={"******************"}
          error={errors?.password?.message}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          colorScheme="teal"
          variant="ghost"
          marginRight="5px"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          _hover={{ background: "#EB5757" }}
          _focus={{ background: "#EB5757" }}
          _active={{ background: "#EB5757" }}
          fontFamily="Noto Sans"
          fontWeight={700}
          fontSize="16px"
          lineHeight="22px"
          color="#fff"
          w="105px"
          background="#EB5757"
          boxShadow="0px 1px 6px rgba(0, 0, 0, 0.1)"
          borderRadius={"12px"}
          isLoading={isSubmitting}
          disabled={!isValid || !isDirty || !passwordMatch}
          type="submit"
        >
          Delete
        </Button>
      </ModalFooter>
    </form>
  );
};
