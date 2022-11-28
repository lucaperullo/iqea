import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 " maxWidth="100%" transition="0.5s ease-out">
      <Meta title={"IQ&A"} />
      <Flex flexDirection="column" margin="8" minHeight="90vh">
        <Header />
        <Box width="full" as="main" marginY={50}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
