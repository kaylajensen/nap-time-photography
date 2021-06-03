import Layout from '../components/Layout';

const Prices = () => (
  <Layout title="Albums">
  <h1>Pricing</h1>
  <div className="services">
    <div className="services-list">
      <div className="item">
        <h2>All Sessions Begin at $99</h2>
        <p>Sessions begin at 30 minutes.</p>
        <p>You will recieve 10-15 edited digital photos.</p>
        <p>I can work around these times but the best shoot time is 1-2 hours after sunrise or 1-2 hours before sunset. </p>
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
    justify-content: center;
  }
  .services .item {
    padding: 20px;
    margin-bottom: 40px;
    width: 50%;
    cursor: pointer;
  }
  .services .item {
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

export default Prices;
