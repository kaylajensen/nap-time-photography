import Layout from '../components/Layout';
import Link from 'next/link';

const Albums = () => {
  const images = [];
  const imageCount = 9;

  for (let i = imageCount; i > 0; i--) {
    images.push(`/static/albums/family-of-three/${i}.jpg`);
  }

  return (
    <Layout title="Albums">
      <h1>Albums</h1>
      <div className="services">
        <div className="services-list">
          <Link href="/family-lifestyle">
            <div className="item">
              <img src="/static/albums/family-of-three/5.jpg" />
              <h2>FAMILY LIFESTYLE</h2>
              <p>Capture moments of your beautiful family doing what you do best together, loving each other!</p>
            </div>
          </Link>
          <Link href="/maternity">
            <div className="item">
              <img src="/static/albums/maternity/1.jpg" />
              <h2>MATERNITY</h2>
              <p>Soak up this sweet heavenly preparation.</p>
            </div>
          </Link>
          <Link href="/baby-lifestyle">
            <div className="item">
              <img src="/static/albums/baby-lifestyle/lemons-5.jpg" />
              <h2>BABY LIFESTYLE & MILESTONES</h2>
              <p>These sweet moments go by so fast. Capture them before they're gone!</p>
            </div>
          </Link>
          <Link href="/engagement">
            <div className="item">
              <img src="/static/albums/engagement/engagement-6.jpg" />
              <h2>ENGAGEMENT</h2>
              <p>Congratulations! Capture the love and excitement for the adventures together ahead in marriage.</p>
            </div>
          </Link>
          <Link href="/portraits">
            <div className="item">
              <img src="/static/albums/portraits/grandparent-2.jpg" />
              <h2>PORTRAITS & HEADSHOTS</h2>
              <p>Capture other moments you'd like to savor. Or update your professional headshots.</p>
            </div>
          </Link>
        </div>
      </div>
      <style jsx>{`
      .services {
        max-width: 1000px;
        margin: 0 auto;
      }
      .services-list {
        padding: 0 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .services .item {
        padding: 20px;
        margin-bottom: 40px;
        width: 50%;
        cursor: pointer;
      }
      .services .item:hover {
        border: 2px solid #f08da8;
      }
      img {
        max-width: 100%;
      }
      h2 {
        margin: 0 0 5px 0;
      }
      p {
        font-size: 18px;
        color: #777;
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
};

export default Albums;
