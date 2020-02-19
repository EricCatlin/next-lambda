import { Nav } from "../components/Nav";
const Layout = ({ children }) => {
  return (
    <div className="">
      <Nav></Nav>
      <div
       
        style={{ margin: "25px" }}
      >
        {children}
      </div>
    </div>
  );
};

export { Layout };
