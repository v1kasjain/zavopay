"use client";

import { ConfigProvider, Layout } from "antd";
import MainContent from "./components/MainContent";
import NavSider from "./components/NavSider";

export default function Home() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Inter",
        },
      }}
    >
      <Layout style={{ padding: 0, margin: 0 }}>
        <NavSider />
        <Layout style={{ background: "#ffffff" }}>
          <MainContent />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
