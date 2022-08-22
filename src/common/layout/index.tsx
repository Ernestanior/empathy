import { FC } from "react";
import { Layout } from "antd";
import ContentP from "./content";
import HeaderPlx from "./header";

interface IProps {
  children: any;
}
const LayoutPlx: FC<IProps> = ({ children }) => {
  return (
    <Layout className="height-fill">
      <HeaderPlx />
      <Layout>
        <ContentP>{children}</ContentP>
      </Layout>
    </Layout>
  );
};

export default LayoutPlx;
