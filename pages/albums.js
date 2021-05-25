import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

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
        <div className="item">
          <img src="/static/albums/family-of-three/1.jpg" />
          <h2>FAMILY LIFESTYLE</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet rhoncus mi ac porta.</p>
        </div>
        <div className="item">
          <img src="/static/albums/family-of-three/2.jpg" />
          <h2>PORTRAITS</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet rhoncus mi ac porta.</p>
        </div>
        <div className="item">
          <img src="/static/albums/family-of-three/3.jpg" />
          <h2>ENGAGEMENT</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet rhoncus mi ac porta.</p>
        </div>
        <div className="item">
          <img src="/static/albums/family-of-three/4.jpg" />
          <h2>0-12 MONTH LIFESTYLE & MILESTONES</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet rhoncus mi ac porta.</p>
        </div>
      </div>
    </div>
      <h1>Albums</h1>
      <Gallery images={images} />
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
