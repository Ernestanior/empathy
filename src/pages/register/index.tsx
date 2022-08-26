import { Button } from "antd";
import accountService from "../../store/account/service";
import ticket from "@/assets/register/ticket.png";
import newlogo from "@/assets/register/new.png";
import cloud from "@/assets/register/cloud.png";
import frame from "@/assets/register/frame.png";
import sparkle from "@/assets/register/sparkle.png";
import "./index.less";
const Login = () => {
  const onFinish = (values: any) => {
    accountService.login(values.userName, values.pwd);
  };

  return (
    <section style={{ marginTop: 30 }} className="campus-register">
      <img alt="" src={ticket} className="ticket" />
      <img alt="" src={newlogo} className="newlogo" />
      <img alt="" src={cloud} className="cloud" />
      <img alt="" src={frame} className="frame" />
      <img alt="" src={sparkle} className="sparkle" />
      <section className="form">
        <div className="form-item">
          <label>Name</label>
          <input></input>
        </div>
        <div className="form-item">
          <label>Email</label>
          <input></input>
        </div>
        <div className="form-item">
          <label>Password</label>
          <input></input>
        </div>
        <div className="form-item">
          <label>Confirm Password</label>
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
            Sign Up
          </Button>
        </div>
      </section>
    </section>
  );
};

export default Login;
