import { Flex } from "antd";
import React from "react";
import AccountCard from "../molecules/cards/AccountCard";

const accounts = [
  {
    title: "Main USD Account",
    currency: "USD",
    accoutNumber: "8741",
    ammount: "$17,527.80",
  },
  { title: "", currency: "EUR", accoutNumber: "8741", ammount: "£7,397.40" },
  {
    title: "Design Budget",
    currency: "GBP",
    accoutNumber: "8741",
    ammount: "£4397.40",
  },
  { title: "", currency: "GBP", accoutNumber: "8741", ammount: "£9397.40" },
  { title: "", currency: "USD", accoutNumber: "8741", ammount: "£1,397.40" },
  { title: "", currency: "EUR", accoutNumber: "8741", ammount: "£13,377.40" },
  { title: "", currency: "USD", accoutNumber: "8741", ammount: "$17,527.80" },
  { title: "", currency: "EUR", accoutNumber: "8741", ammount: "$17,527.80" },
  { title: "", currency: "GBP", accoutNumber: "8741", ammount: "£17,527.80" },
];

function Accounts() {
  return (
    <Flex wrap="wrap" justify="space-between" gap="small">
      {[
        accounts.map((info, index) => {
          console.log(index);
          return <AccountCard info={info} index={index} key={index}/>;
        }),
      ]}
    </Flex>
  );
}

export default Accounts;
