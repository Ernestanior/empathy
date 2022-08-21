import { FC } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Space, Row, Col, Button } from "antd";
import "./index.less";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const HeaderPlx: FC = () => {
  return (
    <nav className="comp-header">
      <Row align="middle">
        <Col flex={1}>
          <Link to="/home"><span className="logo">EMPATHY</span></Link>
        </Col>
        <Col span={3}>
          <div className="btns" >
            <Button style={{ borderRadius: 30, color: "#2465e9" }}><FormattedMessage id="LOGIN"></FormattedMessage>Login</Button>
            <Button style={{ borderRadius: 30, color: "#2465e9" }}>Sign up</Button>
          </div>
        </Col>
      </Row>
    </nav>
  );
};

export default HeaderPlx;
