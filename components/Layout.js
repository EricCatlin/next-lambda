import { Nav } from "../components/Nav";
const Layout = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      {children}
    </>
  );
};

export { Layout };
