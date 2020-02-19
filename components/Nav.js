import Link from "next/link";

const Nav = () => (
  <div className="elevated">
    <div
      className="row sunrise-1-background"
      style={{ listStyle: "none", paddingBottom: "15px", paddingTop: "45px" }}
    >
      <li>
        <Link href="/ui/rendered/sync">
          <a>getInitialProps</a>
        </Link>
      </li>
      <li>
        <Link href="/ui/rendered/async">
          <a>Async</a>
        </Link>
      </li>
      <li>
        <Link href="/ui/rendered/dynamicWHAT">
          <a>Dynamic</a>
        </Link>
      </li>
      <li>
        <Link href="/ui/rendered/dynamic/sub">
          <a>Dynamic +</a>
        </Link>
      </li>
      <li>
        <Link href="/ui/rendered/dynamic/catchall/a/b/c/d/e/f">
          <a>Catch All</a>
        </Link>
      </li>
    </div>
    <div
      className="row sunrise-2-background"
      style={{ listStyle: "none", paddingBottom: "15px", paddingTop: "35px" }}
    >
      <li>
        <Link href="/ui/swr/sync">
          <a>SWR</a>
        </Link>
      </li>
      <li>
        <Link href="/ui/swr/async">
          <a>Async</a>
        </Link>
      </li>
      <li>
        <Link href="/ui/swr/dynamicWHAT">
          <a>Dynamic</a>
        </Link>
      </li>
      <li>
        <Link href="/ui/swr/dynamic/sub">
          <a>Dynamic +</a>
        </Link>
      </li>
      <li>
        <Link href="/ui/swr/dynamic/catchall/a/b/c/d/e/f">
          <a>Catch All</a>
        </Link>
      </li>
    </div>
    <div
      className="row sunrise-3-background"
      style={{ listStyle: "none", paddingBottom: "10px", paddingTop: "25px" }}
    >
      <li>
        <Link href="/ui/linking/a">
          <a>Linking</a>
        </Link>
      </li>
      <li>
        <Link href="/ui/linking/b">
          <a>B</a>
        </Link>
      </li>
      <li>
        <Link href="/ui/linking/[c]" as={`/ui/linking/${'c'}`}>
          <a>C</a>
        </Link>
      </li>
      <li>
        <Link href="/ui/linking/d?question='how did you get here'&answer='you clicked a link'">
          <a>D</a>
        </Link>
      </li>
    </div>
    <div
      className="row sunrise-4-background sunrise-1-text "
      style={{ listStyle: "none", paddingBottom: "10px", paddingTop: "15px" }}
    ></div>
  </div>
);
export { Nav };
