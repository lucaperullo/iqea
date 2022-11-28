import { useStateValue } from "context/stateProvider";
import Autocomplete from "./components/autocomplete";
import Questions from "./components/questions";

const Home = () => {
  const [{ qea }, dispatch] = useStateValue();
  return (
    <>
      <Questions />
    </>
  );
};

export default Home;
