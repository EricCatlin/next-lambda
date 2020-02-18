import Link from "next/link";

const Nav = () => (
  <>
    <ul style={{ flexBasis: 'row', display: 'flex', justifyContent: 'space-around', backgroundColor: 'lightgrey' }}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/ui/rendered/sync">
          <a>Sync</a>
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
        <Link href="/ui/rendered/dynamic/WHAT/sub">
          <a>Dynamic, Terminating</a>
        </Link>
      </li>
    </ul>
    <ul style={{ flexBasis: 'row', display: 'flex', justifyContent: 'space-around', backgroundColor: 'lightgrey' }}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/ui/swr/sync">
          <a>Sync</a>
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
        <Link href="/ui/swr/dynamic/WHAT/sub">
          <a>Dynamic, Terminating</a>
        </Link>
      </li>
    </ul>
  </>
);
export { Nav }