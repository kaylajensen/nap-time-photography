import Link from 'next/link';

const Menu = () => (
  <ul className="menu">
    <li>
      <Link href="/">
        <a>HOME</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>ABOUT</a>
      </Link>
    </li>
    <li>
      <Link href="/albums">
        <a>ALBUMS</a>
      </Link>
    </li>
    <li>
      <Link href="/prices">
        <a>PRICING</a>
      </Link>
    </li>
    <li>
      <Link href="/contact">
        <a>CONTACT</a>
      </Link>
    </li>
    <style jsx>{`
      .menu {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
      }
      .menu li a {
        font-size: 22px;
        color: #111;
        font-weight: 300;
        padding: 5px 2px;
        margin: 0 10px;
        text-decoration: none;
        font-family: 'Jura', sans-serif;
      }
      .menu li a:hover {
        padding-bottom: 3px;
        border-bottom: 1px solid #f08da8;
      }
      @media (max-width: 800px) {
        .menu {
          display: block;
          margin-top: -15px
        }
        .menu li {
          display: inline-block;
        }
        .menu li a {
          font-size: 18px;
        }
      }
    `}</style>
  </ul>
);

export default Menu;
