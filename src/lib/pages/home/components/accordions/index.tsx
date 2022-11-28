import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
} from "@chakra-ui/react";
import { useStateValue } from "context/stateProvider";

export default function Accordions({ qea }: { qea: any }) {
  const [{ locale }, dispatch] = useStateValue();
  return (
    <Accordion overflowY="auto">
      {qea?.map((qea: any, i: number) => (
        <AccordionItem key={i}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight={600}
                    {...(isExpanded && { fontWeight: 700 })}
                  >
                    {locale === "en" ? qea?.question?.en : qea?.question?.it}
                  </Box>
                  {isExpanded ? " -" : " +"}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {locale === "en" ? qea?.answer?.en : qea?.answer?.it}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
