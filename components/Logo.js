import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
        <img src="/static/logo.png" />
      </a>
    </Link>

    <style jsx>{`
      .logo img {
        display: block;
        width: 300px;
      }
      @media (max-width: 800px) {
        .logo {
          display: inline-block;
        }
      }
    `}</style>
  </div>
);

export default Logo;
