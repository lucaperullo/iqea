import { Helmet } from "react-helmet";

const Meta = ({ title }: { title: string }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Meta;
