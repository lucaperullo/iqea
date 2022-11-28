import { Input } from "@chakra-ui/react";
import { useStateValue } from "context/stateProvider";

export default function Autocomplete() {
  const [{ locale, qeas }, dispatch] = useStateValue();
  return (
    <>
      <Input
        variant="filled"
        borderRadius="13px"
        mb="4"
        maxW="400px"
        placeholder={locale === "en" ? "Search.." : "Ricerca.."}
        onChange={(e: any) => {
          console.log(e.target.value);
          dispatch({
            type: "SET_F_QEA",
            payload: qeas.filter((item: any) => {
              return (
                (item?.question?.en || item?.question?.it)
                  ?.toLowerCase()
                  .includes(e.target.value.toLowerCase()) ||
                (item?.answer?.en || item?.answer?.it)
                  ?.toLowerCase()
                  .includes(e.target.value.toLowerCase())
              );
            }),
          });
        }}
      />
    </>
  );
}
