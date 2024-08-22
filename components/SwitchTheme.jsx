import { Box, Button, useColorMode } from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const SwitchTheme = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box position={"fixed"} top="5%" right="5%">
      <Button onClick={() => toggleColorMode()}>
        {colorMode == "dark" ? <FaSun /> : <FaMoon />}
      </Button>
    </Box>
  );
};

export default SwitchTheme;
