import { FC } from "react";
import campumax from "@/assets/home/campusmax.jpg";
import plane from "@/assets/home/plane.png";
import "./index.less";
const Home: FC = () => {
  return (
    <div className="home">
      <section className="home-content-left">
        {/* <object data={test} className="home-title"></object> */}
        <img alt="" src={campumax} className="home-title"></img>
        <div className="home-desc">
          WIKi for universities, cocreated by students, explore the uni from the
          students’ eyes, checkin and take the emflight ticket, then freely
          explore campus.
        </div>
        <div className="home-btn">
          <button>EXPLORE</button>
          <button>CO-BUILD</button>
        </div>
      </section>
      <section className="home-content-right">
        <img alt="" src={plane} />
      </section>
    </div>
  );
};

export default Home;
