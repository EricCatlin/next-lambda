import { Layout } from "../../../components/Layout";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";

const Component = ({ initialProps }) => {
  const {
    query: { dynamic }
  } = useRouter();

  return (
    <Layout>
      <div>
        <h1>Dynamic Route Rendered Serverside</h1>
        <br />
        <div>{JSON.stringify({ dynamic })}</div>
        <br />
        <div>{JSON.stringify({ initialProps })}</div>
      </div>
    </Layout>
  );
};

Component.getInitialProps = async context => {
  const {
    query: { dynamic }
  } = context;
  const res = await fetch(`http://localhost:3000/api/mock/${dynamic}`);
  const json = await res.json();
  return { initialProps: json };
};

export default Component;
