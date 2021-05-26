import Layout from '../components/Layout';

const Prices = () => (
  <Layout title="Albums">
  <h1>Investment</h1>
  <div className="services">
    <div className="services-list">
      <div className="item">
        <img src="/static/albums/baby-lifestyle/lemons-2.jpg" />
        <h2>All Sessions Begin at $99</h2>
        <p>Capture moments of your beautiful family doing what you do best together, loving each other!</p>
      </div>
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
    border: 1px solid #f08da8;
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

export default Prices;
