import { Button } from "antd";
import accountService from "../../store/account/service";
import ticket from "@/assets/login/ticket.png";
import scribble from "@/assets/login/scribble.png";
import helloAgain from "@/assets/login/helloAgain.png";
import frame from "@/assets/login/frame.png";
import brush from "@/assets/login/brush.png";
import "./index.less";
const Login = () => {
  const onFinish = (values: any) => {
    accountService.login(values.userName, values.pwd);
  };

  return (
    <section className="campus-login">
      <img alt="" src={ticket} className="ticket" />
      <img alt="" src={scribble} className="scribble" />
      <img alt="" src={helloAgain} className="helloAgain" />
      <img alt="" src={frame} className="frame" />
      <img alt="" src={brush} className="brush" />
      <section className="form">
        <div className="form-item">
          <label>Email</label>
          <input></input>
        </div>
        <div className="form-item">
          <label>Password</label>
          <input></input>
        </div>
        <div className="log-in-btn">
          <Button
            type="primary"
            style={{
              fontWeight: "bold",
              width: 250,
              height: 40,
              margin: "0 auto",
              fontSize: 18,
            }}
          >
            Log In
          </Button>
        </div>
      </section>
    </section>
  );
};

export default Login;
