import { Layout } from "../../../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

const Component = () => {
  const {
    query: { question, answer }
  } = useRouter();
  return (
    <Layout>
      <div>
        <h1>Page D</h1>
        <br />
        <h3>Question: {question}</h3>
        <br />
        <h3>Answer: {answer}</h3>
        <br />
        <Link
          href={"/ui/linking/a"} replace
        >
          <a>GOTO A, forget you were here</a>
        </Link>
        <p>*replace property pushes to URL without pushing to History, so back button will not remember this page</p>
      </div>
    </Layout>
  );
};

export default Component;
