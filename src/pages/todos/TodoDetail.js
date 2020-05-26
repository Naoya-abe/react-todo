import React from "react";

import "../../styles/pages/todos/index.scss";

import { Card } from "../../components";

const TodoDetail = () => {
  return (
    <div className="todo-detail">
      <div className="title">Detail</div>
      <div className="detail-card">
        <Card
          avatarUrl="https://my-pig-portfolio.s3-ap-northeast-1.amazonaws.com/images/pig.png"
          displayName="Tonpei"
          date="2020/05/05"
          description="Elliot requested permission to view your contact details"
          detail
        />
      </div>
    </div>
  );
};

export default TodoDetail;
