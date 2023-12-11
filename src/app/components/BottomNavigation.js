import { Menu } from "antd";
import React from "react";
import { HelpIcon, SettingsIcon } from "../molecules/icons/customIcons";

const navItems = [
  {
    key: "1",
    icon: SettingsIcon,
    label: "Settings",
  },
  {
    key: "2",
    icon: HelpIcon,
    label: "Help",
  },
];

function BottomNavigation() {
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

export default BottomNavigation;
