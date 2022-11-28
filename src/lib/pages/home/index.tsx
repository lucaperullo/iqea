import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
} from "@chakra-ui/react";
import Accordions from "./components/accordions";

const Home = ({ qea }: { qea: any }) => {
  return (
    <Grid gap={4} overflowY="hidden" h="71vh" position="relative">
      <Accordions qea={qea} />
    </Grid>
  );
};

export default Home;
