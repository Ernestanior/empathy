import { FC } from "react";
import { Row, Col, Button } from "antd";
import "./index.less";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { getLanguage, setLanguage } from "@/locale";
import logo from "@/assets/home/logo.png";
const HeaderPlx: FC = () => {
  const lang = getLanguage();
  return (
    <nav className="comp-header">
      <Row>
        <Col flex={1}>
          <Link to="/">
            <img alt="" src={logo} style={{ width: 200 }}></img>
          </Link>
        </Col>
        <Col span={5}>
          <div className="btns">
            <Button
              style={{ borderRadius: 30, color: "#2465e9" }}
              onClick={() => setLanguage(lang === "zh_CN" ? "en_US" : "zh_CN")}
            >
              {lang === "zh_CN" ? "English" : "中文"}
            </Button>
            <Button style={{ borderRadius: 30, color: "#2465e9" }}>
              <FormattedMessage id="LOGIN" />
            </Button>
            <Button style={{ borderRadius: 30, color: "#2465e9" }}>
              <FormattedMessage id="SIGN_UP" />
            </Button>
          </div>
        </Col>
      </Row>
    </nav>
  );
};

export default HeaderPlx;
