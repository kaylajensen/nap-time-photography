import Link from 'next/link';
import Layout from '../components/Layout';

const Homepage = () => (
  <Layout>
    <div className="cover">
      {/* <div className="hello">
        <h1>Hi there, memory treasurer!</h1>
        <div>I'd love to help capture your family's moments</div>
        <Link href="/albums">
          <a className="view-more">Gallery</a>
        </Link>
      </div> */}
    </div>
    <style jsx>{`
      .cover {
        position: relative;
        min-height: 600px;
        background: transparent url(/static/cover.jpg) no-repeat center center;
        background-size: cover;
      }
      .hello {
        position: absolute;
        top: 60px;
        right: 60px;
        background: #fff;
        padding: 30px;
      }
      .hello h1 {
        margin: 0 0 10px 0;
      }
      a.view-more {
        text-transform: uppercase;
        font-size: 16px;
      }
      .latest-work {
        text-align: center;
        padding: 30px 0;
        margin-bottom: 60px;
      }
      @media (max-width: 480px) {
        .hello {
          left: 30px;
          right: 30px;
          font-size: 18px;
          padding: 20px;
        }
        h1 {
          font-size: 28px;
        }
      }
    `}</style>
  </Layout>
);

export default Homepage;
