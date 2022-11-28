import { Select } from "@chakra-ui/react";
import { useStateValue } from "context/stateProvider";

export default function LocaleSelector() {
  const [{ locale }, dispatch] = useStateValue();
  const handleChange = (e: any) => {
    dispatch({
      type: "SET_LOCALE",
      payload: e.target.value,
    });
  };
  return (
    <Select
      variant="filled"
      value={locale}
      onChange={handleChange}
      size="xs"
      h="40px"
      borderRadius="13px"
      ml="2"
    >
      <option value="en">en</option>
      <option value="it">it</option>
    </Select>
  );
}
