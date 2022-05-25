import { Box } from "@chakra-ui/react";
import { FC } from "react";

import { MasonryPhotos } from "@/shared/ui";

import { Header } from "../header";
import { Layout } from "../layout";

export const Home: FC = (): JSX.Element => {
  return (
    <Layout>
      <Header />
      <Box p="40px 0">
        <MasonryPhotos />
      </Box>
    </Layout>
  );
};
