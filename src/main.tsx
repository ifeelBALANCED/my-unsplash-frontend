import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { createInspector } from "effector-inspector";
import { StrictMode } from "react";
import { render } from "react-dom";

import App from "@/app/app";
import theme from "@/theme/theme";

const root = document.getElementById("root");

createInspector();

render(
  <StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </StrictMode>,
  root
);
