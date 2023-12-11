import { Menu } from "antd";
import React from "react";
import {
  UploadOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { CardIcon, PaymentsIcon, RecipientsIcon, TeamIcon } from "../molecules/icons/customIcons";

const navItems = [
  {
    key: "1",
    icon: HomeOutlined,
    label: "Home",
  },
  {
    key: "2",
    icon: CardIcon,
    label: "Cards",
  },
  {
    key: "3",
    icon: TeamIcon,
    label: "Team members",
  },
  {
    key: "4",
    icon: RecipientsIcon,
    label: "Recipients",
  },
  {
    key: "5",
    icon: PaymentsIcon,
    label: "Payments",
  },
];

function Navigation() {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={navItems.map((item, index) => ({
        key: String(index + 1),
        icon: React.createElement(item.icon),
        label: item.label,
      }))}
      style={{
        background: "transparent",
      }}
    />
  );
}

export default Navigation;
