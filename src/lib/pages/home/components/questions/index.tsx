import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  CloseButton,
  Flex,
  Grid,
  Portal,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useStateValue } from "context/stateProvider";
import useOnClickOutside from "use-onclickoutside";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import QuestionSkeleton from "../skeletons";

export default function Accordions() {
  const [selectedId, setSelectedId] = useState(null);
  const [selected, setSelected] = useState<any>(null);
  const [{ locale, qeas, f_qeas }, dispatch] = useStateValue();
  const ref = useRef(null);
  useOnClickOutside(ref, () => setSelectedId(null));

  return (
    <Box>
      <QuestionSkeleton />
      <Box maxH="700px" h="100%" minH="200px" position="relative" top="-40px">
        <AnimatePresence presenceAffectsLayout>
          {selectedId && (
            <motion.div layoutId={selectedId}>
              <Flex
                h="100%"
                w="100%"
                zIndex={20}
                justifyContent="center"
                alignItems="flex-end"
                flexDir="column"
              >
                <Flex
                  flexDir="column"
                  w="100%"
                  bg="white"
                  borderRadius="13px"
                  boxShadow={
                    "-18px -20px 20px 0px rgb(0 0 0 / 4%), inset 2px 2px 20px 0px rgb(0 0 0 / 12%), 7px 11px 20px 0px rgb(0 0 0 / 14%)"
                  }
                  _dark={{
                    bg: "gray.700",
                  }}
                  ref={ref}
                  p="4"
                >
                  {selected?.tags?.map((tag: any, i: number) => (
                    <Tag
                      position="relative"
                      key={i}
                      size="sm"
                      maxW="50px"
                      minW="50px"
                      w="100%"
                      borderRadius="13px"
                      colorScheme={tag.color}
                      mr="2"
                      mb="2"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      boxShadow={
                        "inset 2px 2px 20px 0px rgb(0 0 0 / 12%), 7px 11px 20px 0px rgb(0 0 0 / 14%)"
                      }
                    >
                      {tag.tag}
                    </Tag>
                  ))}

                  <CloseButton
                    borderRadius="13px"
                    bg="red.400"
                    color="#fff"
                    onClick={() => setSelectedId(null)}
                    position="relative"
                    top="-5"
                    right={"-98%"}
                  />
                  <Box>
                    <motion.h2>
                      <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        color="black"
                        _dark={{
                          color: "white",
                        }}
                      >
                        {locale === "en"
                          ? selected?.question?.en
                          : selected?.question?.it}
                      </Text>
                    </motion.h2>
                    <motion.h5>
                      {locale === "en"
                        ? selected?.answer?.en
                        : selected?.answer?.it}
                    </motion.h5>
                  </Box>
                </Flex>
              </Flex>

              <motion.button onClick={() => setSelectedId(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
      <SimpleGrid
        position="relative"
        top="-40px"
        w="100%"
        columns={{
          base: 2,
          md: 3,
          lg: 4,
          xl: 5,
        }}
        spacing="10"
      >
        {f_qeas === null
          ? qeas?.map((qea: any, i: number) => (
              <motion.div
                layoutId={qea?.id}
                onClick={() => {
                  setSelectedId(qea?.id);
                  setSelected(qea);
                }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.001 }}
                whileInView={{
                  //repeat the animation every time the user scrolls to the element
                  opacity: 1,
                  y: 0,
                }}
                key={i}
              >
                <Box>
                  <>
                    <h2>
                      <Text flex="1" textAlign="left" fontWeight={600}>
                        {locale === "en"
                          ? qea?.question?.en
                          : qea?.question?.it}
                      </Text>
                    </h2>
                  </>
                </Box>
              </motion.div>
            ))
          : f_qeas?.map((qea: any, i: number) => (
              <motion.div
                layoutId={qea?.id}
                onClick={() => {
                  setSelectedId(qea?.id);
                  setSelected(qea);
                }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.001 }}
                whileInView={{
                  //repeat the animation every time the user scrolls to the element

                  opacity: 1,
                  y: 0,
                }}
                key={i}
              >
                <Box>
                  <>
                    <h2>
                      <Text flex="1" textAlign="left" fontWeight={600}>
                        {locale === "en"
                          ? qea?.question?.en
                          : qea?.question?.it}
                      </Text>
                    </h2>
                  </>
                </Box>
              </motion.div>
            ))}
      </SimpleGrid>
    </Box>
  );
}
