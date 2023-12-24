import { Navbar } from "keep-react";
import Logo from "./Logo";

const Nav = () => {

  const navLink = (
    <>
      <div className="flex lg:flex-row flex-col lg:py-0 list-none ">
         <Navbar.Link
            linkName="Home"
          />
          <Navbar.Link
            linkName="Projects"
          />
          <Navbar.Link
            linkName="Blogs"
          />
       
  
      </div>
    </>
  );



  return (
    <Navbar fluid={true} className="!py-5">
    <Navbar.Container className="flex items-center justify-between">

      <Navbar.Brand>
        {/* logo */}
        <Logo></Logo>
      </Navbar.Brand>

      <Navbar.Collapse
        collapseType="sidebar"
        className="fixed right-0 top-0 bg-white p-10 xl:!w-1/6 lg:!w-2/6 md:!w-1/2"
      >
        <Navbar.Container tag="ul" className="">
          {navLink}
        </Navbar.Container>
      </Navbar.Collapse>

      <Navbar.Container className="flex gap-1">
        <Navbar.Toggle className="block " />
            {navLink}
      </Navbar.Container>
    </Navbar.Container>
  </Navbar>
  );
};

export default Nav;