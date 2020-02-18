import Link from "next/link";

const Nav = () => (
  <ul style={{flexBasis:'row', display:'flex', justifyContent:'space-around', backgroundColor:'lightgrey'}}>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/ui/mock/sync">
        <a>Sync</a>
      </Link>
    </li>
  </ul>
);
export {Nav}