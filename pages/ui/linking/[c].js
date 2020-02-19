import { Layout } from "../../../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

const Component = () => {
  const {
    query: { c }
  } = useRouter();
  return (
    <Layout>
      <div>
        <h1>Page C ({c})</h1>
        <br />
        <Link
          href={{
            pathname: "/ui/linking/d",
            query: { question: "How did you get here", answer:c }
          }}
        >
          <a>GOTO D, remember C via query params</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Component;
