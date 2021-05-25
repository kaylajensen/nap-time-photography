const Footer = () => (
  <div className="footer-wrapper">
    <div className="copyright">© {new Date().getFullYear()} Nap Time Photography</div>
    <style jsx>{`
      .footer-wrapper {
        text-align: center;
        padding: 30px 30px;
        font-family: 'Jura', sans-serif;
      }
      .copyright {
        margin-bottom: 20px;
      }
    `}</style>
  </div>
);

export default Footer;
