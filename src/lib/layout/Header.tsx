import { Box, Flex } from "@chakra-ui/react";
import LocaleSelector from "lib/components/locale";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Flex marginLeft="auto" alignItems="center">
        <ThemeToggle />
        <LocaleSelector />
      </Flex>
    </Flex>
  );
};

export default Header;
