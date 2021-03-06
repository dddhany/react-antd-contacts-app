import React, { FC, Fragment, useState } from "react";
import { Button, Layout, Table, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./App.less";
import { PlusCircleFilled } from "@ant-design/icons";
import AddDrawer from "./AddDrawer";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App: FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [values, setValues] = useState([]);
  const [errorInfo, setErrorInfo] = useState({});
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const handleAddFormOnFinish = (data) => {
    setValues([
      ...values,
      {
        key: values.length + 1,
        ...data,
      },
    ]);
    setShowDrawer(false);
  };
  const handleAddFormOnFinishFailed = (errorInfo) => {
    setErrorInfo(errorInfo);
  };
  console.log("values=", values);

  const dataSource = [,];

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline"></Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: "#fff" }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Fragment>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                <div></div>
                <div>
                <Button
                  type="primary"
                  icon={<PlusCircleFilled />}
                  data-testid="add-contact-button"
                  onClick={() => setShowDrawer(true)}
                >
                    Add
                </Button>
                </div>
              </div>

              <Layout.Content>
                <Table dataSource={values} columns={columns} />
              </Layout.Content>
              <AddDrawer
                show={showDrawer}
                handleOnClose={() => setShowDrawer(false)}
                handleOnFinish={handleAddFormOnFinish}
                handleOnFinishFailed={handleAddFormOnFinishFailed}
              />
            </Fragment>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ??2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
