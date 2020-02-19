import { Layout } from "../../../components/Layout";
import Link from "next/link";
import { useState } from "react";

const Component = () => {
  const [link, setLink] = useState("c");
  return (
    <Layout>
      <div>
        <h1>Page B</h1>
        <br />

        <input value={link} onChange={ev=>setLink(ev.target.value)}/>
        <br />

        <Link href={"/ui/linking/[c]"} as={`/ui/linking/${link}`}>
          <a>Goto C</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Component;
