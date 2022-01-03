import React from "react";
import styled from "styled-components";
import { Card as MyCard, CardBody, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

import C1i from "../../assets/gita.png";

const Card = styled(MyCard)`
  width: 100%;
  height: auto;
  max-height: 350px !important;
  transition: all 0.5s ease-out;
  z-index: 100;
  background: transparent;
  object-fit: cover;
  overflow: hidden;
  box-shadow: 0 5px 10px 0 rgba(31, 38, 135, 0.37);
  border: none !important;

  img {
    width: 100%;
    height: 240px;
  }

  &:hover {
    transform: translateY(-10px);
    z-index: 1000;
    text-decoration: none;
  }

  a,
  h6,
  p {
    color: #111 !important;
    text-decoration: none !important;
  }

  p {
    font-size: 13px !important;
    margin: 0 5px !important;
  }

  .card-body {
    background: rgba(55, 185, 238, 0.4);
    backdrop-filter: blur(11px);
    -webkit-backdrop-filter: blur(11px);
    overflow: hidden;
  }
`;

const ChaptersCard = ({ title, verseCount, chapterNumber }) => {
  return (
    <Card>
      <Link to={`/chapter/${chapterNumber}`}>
        <CardHeader className="p-0 border-0">
          <img alt="Chapter 1" src={C1i} />
        </CardHeader>
        <CardBody>
          <h6>Chapter {chapterNumber}</h6>
          <p>
            <i>{verseCount} verses</i>
          </p>
          <p>{title}</p>
        </CardBody>
      </Link>
    </Card>
  );
};

export default ChaptersCard;
