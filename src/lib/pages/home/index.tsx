import { useStateValue } from "context/stateProvider";
import Autocomplete from "./components/autocomplete";
import Questions from "./components/questions";
import QuestionSkeleton from "./components/skeletons";

const Home = () => {
  const [{ qea }, dispatch] = useStateValue();
  return (
    <>
      <Questions />
    </>
  );
};

export default Home;
