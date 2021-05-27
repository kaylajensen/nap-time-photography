import Layout from '../components/Layout';

const Contact = () => (
  <Layout title="Contact">
    <h1>Contact Me</h1>
    <ul className="company-info">
      <li>Indian Land, SC</li>
      <li>And Greater Charlotte Area</li>
      <li>
        <a href="mailto:naptimephotography@gmail.com">naptimephotography</a>
      </li>
    </ul>
    <style jsx>{`
      .company-info {
        margin: 0 0 100px 0;
        padding: 0;
        list-style: none;
        font-size: 18px;
        font-family: 'Jura', sans-serif;
      }
      .company-logo {
        display: inline-block !important;
      }
      .about-text {
        color: #777;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      }
      img {
        margin: 10px 0 20px 20px;
      }
      @media (max-width: 600px) {
        .about-text img {
          float: none;
          display: block;
          margin: 0 auto 30px;
        }
      }
    `}</style>
  </Layout>
);

export default Contact;
