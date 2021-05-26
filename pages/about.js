import Layout from '../components/Layout';

const About = () => (
  <Layout title="About">
    <h1>About Me</h1>
    <div className="services">
      <div className="item">
        <img src="/static/albums/family-of-three/6.jpg" />
        <h2>Kayla Jensen</h2>
        <p>Update on 10% of client investment goes to Gideon Bible Organization.</p>
      </div>
    </div>
    <style jsx>{`
      .services {
        max-width: 1000px;
        margin: 0 auto;
      }
      @media (max-width: 600px) {
        .services .item {
          width: auto;
          padding: 10px 20px;
        }
      }
    `}</style>
  </Layout>
);

export default About;
