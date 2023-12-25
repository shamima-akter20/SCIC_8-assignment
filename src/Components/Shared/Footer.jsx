import Logo from "./Logo";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="flex items-center flex-col md:flex-row">
          <Logo></Logo>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
