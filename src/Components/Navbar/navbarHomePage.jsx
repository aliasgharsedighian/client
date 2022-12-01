import "../../Styles/Navbar.scss";

const NavbarHomePage = () => {
  return (
    <nav className="navbar-home-page">
      <ul style={{ display: "flex" }}>
        <li>
          <a href="/">صفحه اصلی</a>
        </li>
        <li>
          <a href="/">موبایل</a>
          <ul>
            <li>
              <a href="/">اپل</a>
            </li>
            <li>
              <a href="/">سامسونگ</a>
            </li>
            <li>
              <a href="/">سونی</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">ساعت</a>
        </li>
        <li>
          <a href="/">ارتباط با ما</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarHomePage;
