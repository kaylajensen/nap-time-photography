import Layout from '../components/Layout';

const About = () => (
  <Layout title="Contact">
    <h1>About Me</h1>
    <div className="about-text">
      <img src="/static/albums/family-of-three/6.jpg" />
      <h3>Hi there!</h3>
      <p>Thank you so much for your interest. My name is Kayla and I live in beautiful South Carolina with my hunky husband and our sweet baby girl, Hayden. That precious girl is the one who inspired me to get a "real" camera and begin my photography journey.</p>
      <h3>What's up with your name?</h3>
      <p>If you're wondering where the name Nap Time Photography came from, it's from all the naps my growing girl takes! Being a mother is my absolute favorite job I've ever had but taking and editing photos is a close second.</p>
      <h3>glory to him</h3>
      <p>I would not be where I am today without the Grace of God and my walk with Jesus. All glory goes to Him. 10% of all profit will go to <a href="https://gideons.org/" target="_blank">The Gideons International</a> for the expansion of the kingdom through the Word of God. Galatians 5:22.</p>
      <h3>savor the moments</h3>
      <p>Capturing photos is a lifelong journey and I'd love to be a part of capturing your family as you grow and love together!</p>
    </div>
    <style jsx>{`
      h3 {
        color: #f08da8;
        font-size: 35px;
        font-weight: normal;
        font-family: 'Liu Jian Mao Cao', cursive;
        text-transform: lowercase;
        margin: 0;
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

export default About;
