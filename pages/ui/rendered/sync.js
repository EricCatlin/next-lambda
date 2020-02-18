import { Layout } from "../../../components/Layout";
import fetch from "isomorphic-unfetch";

const Component = (props) => {
  return (
    <Layout>
      <div>
        <h1>Syncrounous InitialProps</h1>
        <br/>
        <div>{JSON.stringify(props)}</div>
      </div>
    </Layout>
  );
};
Component.getInitialProps = async ctx => {
  const res = await fetch("http://localhost:3000/api/mock/sync");
  const json = await res.json();
  return { ...json };
};

export default Component;
