"use client";

import { Divider, Flex, Layout, Space } from "antd";
import Image from "next/image";
import Navigation from "./Navigation";
import BottomNavigation from "./BottomNavigation";
const { Header, Content, Footer, Sider } = Layout;

function NavSider() {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{
        height: "100vh",
        background: "#09090c",
      }}
      className="navbar-desktop"
    >
      <Flex
        vertical
        align="stretch"
        wrap="wrap"
        justify="space-between"
        style={{
          height: "100vh",
        }}
      >
        <div>
          <Image
            src="/zavopay.png"
            alt="Zavopay Logo"
            width={82.5}
            height={24}
            style={{ margin: 32 }}
          />
          <Navigation />
        </div>
        <div>
          <Divider />
          <BottomNavigation />
          <Divider style={{background: '#26262b'}}/>
        </div>
      </Flex>
    </Sider>
  );
}

export default NavSider;
