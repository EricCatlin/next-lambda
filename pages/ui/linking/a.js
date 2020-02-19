import { Layout } from "../../../components/Layout";
import Link from 'next/link';


const Component = () => {
  return (
    <Layout>
      <div>
        <h1>Page A</h1>
        <br/>
        <Link href={"/ui/linking/b"}><a>Goto B</a></Link>
      </div>
    </Layout>
  );
};

export default Component;
