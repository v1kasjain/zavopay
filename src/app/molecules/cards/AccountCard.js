import { Card, Flex, Space } from "antd";
import React from "react";
import { SmallDashOutlined } from "@ant-design/icons";
import Image from "next/image";
import { StarIcon, VerticalMenuIcon } from "../icons/customIcons";

const { Meta } = Card;

function AccountCard({ info, index }) {
  console.log('sd', index);
  const Title = () => {
    return (
      <Flex justify="space-between">
        {info.title} 
        <Space>
          {index === 0 ? <StarIcon /> : ''}
        <VerticalMenuIcon />
        </Space>
      </Flex>
    );
  };
  const Description = () => {
    return (
      <Space>
        <Image
          src={`/flags/${info.currency}.png`}
          width={20}
          height={20}
          alt={info.currency}
        />
        {info.currency}
        <SmallDashOutlined />
        {info.accoutNumber}
      </Space>
    );
  };
  return (
    <Card style={{ width: "30%", height: 144, flexDirection: 'column', display: 'flex'}}>
      <Meta title={info.title ? <Title /> : ''} description={<Description />} />
      <div style={{fontSize: 20, position:'absolute', bottom: 20}}>{info.ammount}</div>
    </Card>
  );
}

export default AccountCard;
