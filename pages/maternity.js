import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const Maternity = () => {
  const images = [];
  const imageCount = 1;

  for (let i = imageCount; i < 6; i++) {
    images.push(`/static/albums/maternity/${i}.jpg`);
  }

  return (
    <Layout title="Albums">
        <h1>Maternity</h1>
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

export default Maternity;
