import { Flex, Skeleton, Stack } from "@chakra-ui/react";
import { FC } from "react";

export const Fallback: FC = () => {
  return (
    <Flex align="center" justifyContent="center" flex={1}>
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    </Flex>
  );
};
