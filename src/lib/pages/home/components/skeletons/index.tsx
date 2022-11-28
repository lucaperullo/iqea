import { Box, Skeleton, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function QuestionSkeleton() {
  return (
    <Stack position="absolute" top={"94px"} w="90%" zIndex={0}>
      <Skeleton height="20px" />
      <Skeleton height="10px" />
      <Skeleton height="10px" />
    </Stack>
  );
}
