import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import './Home.css';

function Home() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <img src="/assets/img/carsimg/r34.jpg" alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
