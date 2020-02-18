import { Layout } from "../../../components/Layout";
import fetch from "unfetch";
import useSWR from 'swr'

const Component = () => {
  const { data, error } = useSWR('http://localhost:3000/api/mock/async', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Layout>
      <div>
        <h1>Asyncrounous SWR</h1>
        <br/>
        <div>{JSON.stringify(data)}</div>
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
