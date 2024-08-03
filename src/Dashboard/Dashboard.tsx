import React, { useState } from "react";
import { Tiny } from "@ant-design/plots";
import { Layout, Menu, Col, Row } from "antd";
import type { MenuProps } from "antd";
import "./Dashboard.scss";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const { Header, Sider } = Layout;
const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const Dashboard: React.FC = () => {
  const [dashboardItems] = useState([
    {
      name: "Total Orders",
      count: "75",
      isStatUp: true,
      statPercentage: "3%",
      icon: "order-icon",
    },
    {
      name: "Total Delivered",
      count: "70",
      isStatUp: false,
      statPercentage: "3%",
      icon: "order-icon",
    },
    {
      name: "Total Cancelled",
      count: "05",
      isStatUp: true,
      statPercentage: "3%",
      icon: "order-icon",
    },
    {
      name: "Total Revenue",
      count: "$12k",
      isStatUp: false,
      statPercentage: "3%",
      icon: "order-icon",
    },
  ]);

  const percent = 0.7;
  const config = {
    percent,
    width: 110,
    height: 110,
    color: ["#E8EFF5", "#66AFF4"],
    annotations: [
      {
        type: "text",
        style: {
          text: `${percent * 100}%`,
          x: "50%",
          y: "50%",
          textAlign: "center",
          fontSize: 16,
          fontStyle: "bold",
        },
      }
      // ,
      // {
      //   type: "text",
      //   style: {
      //     text: `Goal`,
      //     x: "50%",
      //     y: "50%",
      //     textAlign: "center",
      //     fontSize: 16,
      //     fontStyle: "bold",
      //   },
      // },
      // {
      //   type: "text",
      //   style: {
      //     text: `Completed`,
      //     x: "50%",
      //     y: "50%",
      //     textAlign: "center",
      //     fontSize: 16,
      //     fontStyle: "bold",
      //   },
      // }
    ],
  };
  return (
    <div className="main-container-dark">
      <Layout className="layout-min-height background-black">
        <Sider className="background-secondary" collapsible collapsed={true}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            className="background-secondary"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="background-black">
          <Header className="header">
            <div className="demo-logo" />
          </Header>

          <Row>
            <Col span={24}>
              <h1 className="text-color p-1">Dashboard</h1>
            </Col>
            <Col span={16}>
              <Row className="padding-items-row">
                {dashboardItems &&
                  dashboardItems.length &&
                  dashboardItems.map((item: any) => {
                    return (
                      <Col span={6} className="padding-items">
                        <div className="card-bg h-100 p-1">
                          <div className="icon-container text-color">
                            <img src="../assets/completed.png" alt="" />
                          </div>
                          <div className="item-name-text text-color">
                            {item?.name}
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="item-count-text text-color">
                              {item?.count}
                            </div>
                            <div
                              className={
                                item.isStatUp
                                  ? "green-text stat-container"
                                  : "red-text stat-container"
                              }
                            >
                              {item?.statPercentage}
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
              </Row>
            </Col>
            <Col span={8} className="pr-1">
              <div className="card-bg m-1">
                <Row>
                  <Col span={17}>
                    <div className="item-name-text text-color">Net Profit</div>
                    <div className="profit text-color">$ 6759.25</div>
                    <div className="green-text profit-growth">3%</div>
                  </Col>
                  <Col span={7}>
                    <div>
                      <Tiny.Ring
                        className="data-chart d-flex justify-content-center"
                        {...config}
                      />
                      <div className="d-flex justify-content-center align-items-center">
                        <p className="text-color value-rouned">
                          The Values here has been rounded off.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
