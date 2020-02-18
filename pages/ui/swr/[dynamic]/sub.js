import { Layout } from "../../../../components/Layout";
import fetch from "unfetch";
import useSWR from 'swr'
import { useRouter } from "next/router";

const Component = () => {
  const {
    query: { dynamic }
  } = useRouter();

  const { data, error } = useSWR(`http://localhost:3000/api/mock/${dynamic}/sub`, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Layout>
      <div>
        <h1>Dynamic Route with SubRoute SWR</h1>
        <br/>
        <div>{JSON.stringify({ dynamic })}</div>
        <br />
        <div>{JSON.stringify({ data })}</div>
      </div>
    </Layout>
  );
};

const fetcher = async (path) => {
  const res = await fetch(path)
  const json = await res.json()
  return json
}

export default Component;
