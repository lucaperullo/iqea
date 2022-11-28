import { Box, Flex } from "@chakra-ui/react";
import LocaleSelector from "lib/components/locale";
import Autocomplete from "lib/pages/home/components/autocomplete";

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
      <Flex>
        <Autocomplete />
      </Flex>
      <Flex marginLeft="auto" alignItems="center">
        <ThemeToggle />
        <LocaleSelector />
      </Flex>
    </Flex>
  );
};

export default Header;
