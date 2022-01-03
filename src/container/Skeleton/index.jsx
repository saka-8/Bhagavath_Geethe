import React from "react";
import styled from "styled-components";
import { Card as MyCard, CardBody, CardHeader } from "reactstrap";

import C1i from "../../assets/gita.png";

const Card = styled(MyCard)`
  width: 100%;
  height: 360px !important;
  max-height: 360px !important;
  border-radius: 10px;
  transition: all 0.5s ease-out;
  background: rgb(231 229 229 / 75%) !important;
  border-radius: 10px;
  border: none !important;

  .box {
    width: 100%;
    height: 240px;
    background: rgba(255, 255, 255, 0.5) !important;
  }

  .text-box {
    text-decoration: none !important;
    margin: 10px 5px !important;
    background: rgba(0, 0, 0, 0.2) !important;
    border-radius: 10px;
    width: 100%;
    height: 10px;
    display: block;
  }
`;

const Skeleton = ({ title, verseCount, chapterNumber }) => {
  return (
    <Card>
      <CardHeader className="p-0">
        <div className="box" />
      </CardHeader>
      <CardBody>
        <div className="text-box"></div>
        <div className="text-box"></div>
        <div className="text-box"></div>
      </CardBody>
    </Card>
  );
};

export default Skeleton;
