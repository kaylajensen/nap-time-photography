import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const BabyLifestyle = () => {
  const milestoneImages = [];
  const milestoneImageCount = 6;

  for (let i = milestoneImageCount; i > 0; i--) {
    milestoneImages.push(`/static/albums/baby-lifestyle/five-month-${i}.jpg`);
  }

  const lifestyleImages = [];
  const lifestyleImageCount = 8;

  for (let i = lifestyleImageCount; i > 0; i--) {
    lifestyleImages.push(`/static/albums/baby-lifestyle/lemons-${i}.jpg`);
  }

  return (
    <Layout title="Albums">
      <h1>Monthly Milestones</h1>
      <Gallery images={milestoneImages} />
      <h1>Baby Lifestyle</h1>
      <Gallery images={lifestyleImages} />
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

export default BabyLifestyle;
