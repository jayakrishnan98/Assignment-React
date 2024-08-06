import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Tiny } from "@ant-design/plots";
import {
  Layout,
  Menu,
  Col,
  Row,
  Table,
  Tag,
  ConfigProvider,
  Space,
} from "antd";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Select } from "antd";
import type { MenuProps } from "antd";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Dashboard.scss";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  RightCircleFilled,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const columns: any = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags: string[]) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
];

const customerData = [
  {
    id: 0,
    name: "Jenny Wilson",
    rating: 4,
    image: "3.jpg",
    message:
      "The food was excellent and so was the service. Ihad the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    id: 1,
    name: "Dianne Russell",
    rating: 5,
    image: "4.jpg",
    message:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
  },
  {
    id: 2,
    name: "Devon Lane",
    rating: 3,
    image: "5.jpg",
    message: "Normally wings are wings, but theirs are lean meaty and tender.",
  },
];

const CustomBarShape = (props: any) => {
  const { fill, x, y, width, height } = props;
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      rx="20px" // This sets the border-radius to 20px
      ry="20px" // This sets the border-radius to 20px
    />
  );
};

type MenuItem = Required<MenuProps>["items"][number];
const fourthContainerData = [
  { id: 0, name: "Goals", icon: "target.png" },
  { id: 1, name: "Popular Dishes", icon: "food.png" },
  { id: 2, name: "Menus", icon: "burger.png" },
];
const tableData = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const data = [
  {
    name: "    5    ",
    pv: 2,
  },
  {
    name: "    9    ",
    pv: 1,
  },
  {
    name: "    11    ",
    pv: 9,
  },
  {
    name: "    13    ",
    pv: 3,
  },
  {
    name: "    15    ",
    pv: 4,
  },
  {
    name: "    17    ",
    pv: 3,
  },
  {
    name: "    19    ",
    pv: 4,
  },
  {
    name: "    21    ",
    pv: 2,
  },
  {
    name: "    23    ",
    pv: 1,
  },
  {
    name: "    25    ",
    pv: 9,
  },
  {
    name: "    27    ",
    pv: 3,
  },
  {
    name: "    29    ",
    pv: 4,
  },
  {
    name: "    31    ",
    pv: 3,
  },
  {
    name: "    33    ",
    pv: 4,
  },
  {
    name: "    33    ",
    pv: 2,
  },
  {
    name: "    35    ",
    pv: 1,
  },
  {
    name: "    37    ",
    pv: 9,
  },
  {
    name: "    39    ",
    pv: 3,
  },
  {
    name: "    41    ",
    pv: 4,
  },
  {
    name: "    43    ",
    pv: 3,
  },
  {
    name: "    45    ",
    pv: 4,
  },
  {
    name: "    47    ",
    pv: 2,
  },
  {
    name: "    49    ",
    pv: 1,
  },
  {
    name: "    51    ",
    pv: 9,
  },
  {
    name: "    53    ",
    pv: 3,
  },
  {
    name: "    55    ",
    pv: 4,
  },
  {
    name: "    57    ",
    pv: 3,
  },
  {
    name: "    59    ",
    pv: 4,
  },
  {
    name: "    61    ",
    pv: 2,
  },
  {
    name: "    63    ",
    pv: 1,
  },
  {
    name: "    65    ",
    pv: 9,
  },
  {
    name: "    67    ",
    pv: 3,
  },
  {
    name: "    69    ",
    pv: 4,
  },
];
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
      icon: "totalOrders.png",
    },
    {
      name: "Total Delivered",
      count: "70",
      isStatUp: false,
      statPercentage: "3%",
      icon: "delivered.png",
    },
    {
      name: "Total Cancelled",
      count: "05",
      isStatUp: true,
      statPercentage: "3%",
      icon: "completed.png",
    },
    {
      name: "Total Revenue",
      count: "$12k",
      isStatUp: false,
      statPercentage: "3%",
      icon: "revenue.png",
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
      },
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
          <Header className="header d-flex align-items-center justify-content-between">
            <Paper
              component="form"
              className="search-container bg-primary"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 300,
              }}
            >
              <IconButton sx={{ p: "10px" }} className="px-4" aria-label="menu">
                <SearchIcon className="text-color" />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                className="text-color"
              />
            </Paper>
            <div className="text-color account-items">
              <Space>
                <div className="iconz-container">
                  <img
                    src={"../assets/5.jpg"}
                    width="65%"
                    alt="Avatar"
                    className="img"
                  ></img>
                </div>
              </Space>
            </div>
          </Header>
          <Row>
            <Col span={24}>
              <h1 className="text-color p-1">Dashboard</h1>
            </Col>
          </Row>
          <div className="main-container">
            <Row>
              <Col span={16}>
                <Row className="padding-items-row">
                  {dashboardItems &&
                    dashboardItems.length &&
                    dashboardItems.map((item: any) => {
                      return (
                        <Col
                          span={6}
                          className="padding-items"
                          key={item?.name}
                        >
                          <div className="card-bg h-100 p-1">
                            <div className="icon-container text-color">
                              <img
                                src={"../assets/" + item?.icon}
                                alt="icon"
                                className="w-20"
                              />
                            </div>
                            <div className="item-name-text text-color mt-1">
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
                                <div
                                  className={
                                    item.isStatUp
                                      ? "green-text stat-container"
                                      : "red-text stat-container"
                                  }
                                >
                                  {item.isStatUp ? (
                                    <div>
                                      <ArrowDropUpIcon />
                                    </div>
                                  ) : (
                                    <div>
                                      <ArrowDropDownIcon />
                                    </div>
                                  )}
                                </div>
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
                      <div className="item-name-text text-color">
                        Net Profit
                      </div>
                      <div className="profit text-color">$ 6759.25</div>
                      <div className="green-text profit-growth">
                        <div className="d-flex">
                          <div>
                            <ArrowDropUpIcon />
                          </div>
                          3%
                        </div>
                      </div>
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
            <Row>
              <Col span={16} className="padding-items-row pt-15 pl-13">
                <div className="card-bg">
                  <Row>
                    <Col span={12}>
                      <h2 className="text-color">Activity</h2>
                    </Col>
                    <Col span={12}>
                      <Row justify="end">
                        <Select
                          defaultValue="weekly"
                          suffixIcon={
                            <ArrowDropDownIcon className="text-color" />
                          }
                          rootClassName="select-dropdown"
                          options={[
                            { label: "Yearly", value: "yearly" },
                            { label: "Weekly", value: "weekly" },
                            { label: "Monthly", value: "monthly" },
                          ]}
                        />
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        // width={500}
                        // height={300}
                        data={data}
                        margin={{
                          top: 5,
                          right: 5,
                          left: -15,
                          bottom: 10,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                          dataKey="pv"
                          fill="#8884d8"
                          activeBar={
                            <CustomBarShape fill="pink" stroke="blue" />
                          }
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </Row>
                </div>
              </Col>
              <Col span={8} className="pr-1 pt-15">
                <div className="card-bg">
                  {fourthContainerData.map((item: any) => {
                    return (
                      <div className="fourth-section-item text-color">
                        <Row>
                          <Col span={5} className="iconz-container">
                            <img
                              src={"../assets/" + item?.icon}
                              width={75}
                              alt=""
                            />
                          </Col>
                          <Col
                            span={15}
                            className="icon-name d-flex align-items-center"
                          >
                            <h3>{item?.name}</h3>
                          </Col>
                          <Col
                            span={4}
                            className="right-icon d-flex justify-content-center align-items-center"
                          >
                            <RightCircleFilled className="right-fourth-section-icon" />
                          </Col>
                        </Row>
                      </div>
                    );
                  })}
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={16} className="padding-items-row pt-15 pl-13">
                <div className="card-bg last-row custom-scroll">
                  <Row>
                    <Col span={12}>
                      <h2 className="text-color">Recent Orders</h2>
                    </Col>
                    <Col span={24}>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorBgContainer: "#41414184", // Overall background color
                          },
                          components: {
                            Table: {
                              colorBgContainer: "#41414184", // Table container background color
                              // colorRowBg: '#ffffff', // Row background color
                              // colorRowHoverBg: '#f5f5f5', // Row hover background color
                              headerColor: "#fff",
                              footerColor: "#fff",
                            },
                          },
                        }}
                      >
                        <Table
                          className="custom-table"
                          columns={columns}
                          pagination={false}
                          dataSource={tableData}
                        />
                      </ConfigProvider>
                    </Col>
                  </Row>
                  <Row></Row>
                </div>
              </Col>
              <Col span={8} className="pr-1 pt-15">
                <div className="card-bg last-row custom-scroll">
                  <Row>
                    <Col span={24}>
                      <h2 className="text-color">Customer's Feedback</h2>
                    </Col>
                    {customerData.map((item) => {
                      return (
                        <div>
                          <Row className="d-flex pb-04">
                            <Col span={2}>
                              <img
                                src={"../assets/" + item.image}
                                width="65%"
                                alt="Avatar"
                                className="img"
                              ></img>
                            </Col>
                            <Col
                              span={22}
                              className="customer-name text-color d-flex align-items-center"
                            >
                              <h3 className="mb-0">{item.name}</h3>
                            </Col>
                          </Row>
                          <Row className="pb-04">
                            <Rating
                              emptyIcon={
                                <StarIcon
                                  style={{ color: "#fff" }}
                                  fontSize="inherit"
                                />
                              }
                              name="disabled"
                              value={item?.rating}
                              readOnly
                            />
                          </Row>
                          <Row>
                            <p className="text-color">{item?.message}</p>
                          </Row>
                        </div>
                      );
                    })}
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
