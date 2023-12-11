"use client";

import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    DownOutlined,
    PlusOutlined
} from "@ant-design/icons";
import { Badge, Button, Flex, Layout, Space, Tabs } from "antd";
import Image from "next/image";
import {
    BellIcon,
    ExchangeIcon,
    SearchIcon,
    SendIcon,
} from "../molecules/icons/customIcons";
import Accounts from "./Accounts";
const { Header, Content, Footer, Sider } = Layout;

const Operations = (
  <>
    <Space>
      <Button type="text">
        Sort by
        <DownOutlined />
      </Button>

      <Button>
        Add new account <PlusOutlined />
      </Button>
    </Space>
  </>
);

function MainContent() {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Accounts",
      children: <Accounts />,
    },
    {
      key: "2",
      label: "Transactions",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Analytics",
      children: "Content of Tab Pane 3",
    },
  ];
  return (
    <>
      <Header
        style={{
          padding: 0,
          background: "#ffffff",
          marginLeft: 36,
          marginRight: 38,
        }}
      >
        <Flex justify="space-between">
          <Space size="large">
            <ArrowLeftOutlined />
            <ArrowRightOutlined />
          </Space>
          <Space>
            <SearchIcon />
            <Badge count={4}>
              <BellIcon />
            </Badge>
          </Space>
        </Flex>
      </Header>
      <Content
        style={{
          margin: "0 36px 0",
        }}
      >
        <h1 style={{ fontSize: 44, fontWeight: 600 }}>$79,156.36</h1>
        <Flex>
          <Button>
            <Space>
              All accounts
              <DownOutlined />
            </Space>
          </Button>

          <Button type="text">
            <Space>
              Total balance in
              <Image src={`/flags/USD.png`} width={20} height={20} alt="USD" />
              USD
              <DownOutlined />
            </Space>
          </Button>
        </Flex>
        <Flex
          justify="flex-start"
          gap="small"
          align="center"
          style={{ marginTop: 32, paddingBottom: 32 }}
        >
          <Button
            style={{
              background: "#1CB0CA",
              color: "#fff",
              display: "flex",
              alignItems: "center",
            }}
          >
            Send <SendIcon style={{ color: "#000" }} />{" "}
          </Button>
          <Button style={{ display: "flex", alignItems: "center" }}>
            Exchange <ExchangeIcon />
          </Button>
        </Flex>
        <Tabs
          tabBarExtraContent={Operations}
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
      </Content>
    </>
  );
}

export default MainContent;
