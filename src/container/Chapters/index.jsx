import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Row, Col, Container } from "reactstrap";
import ChaptersCard from "./ChaptersCard";
import { getChapters } from "../../redux/actions/chapters";

import Skeleton from "../Skeleton";

const Chapters = ({ chapters, fetchChapters }) => {
  const [sortedList, setList] = useState([]);
  let skeletons = [];

  for (let index = 0; index < 12; index++) {
    skeletons.push(
      <Col className="p-1" key={index + 1}>
        <Skeleton />
      </Col>
    );
  }

  const init = async () => {
    await fetchChapters();
    setList(
      chapters.sort((a, b) => {
        return a.chapter_number - b.chapter_number;
      })
    );
  };

  useEffect(() => {
    init();
    return () => {};
  }, [chapters]);

  return (
    <Container fluid className="wrapper">
      <h2 className="text-center text-dark pt-2 pb-3">Chapters</h2>
      {!sortedList.length ? (
        <Row xs="1" sm="2" md="3" xl="6" className="no-gutters">
          {skeletons}
        </Row>
      ) : (
        <Row xs="1" sm="2" md="3" xl="6" className="no-gutters">
          {sortedList.map((chapter) => (
            <Col key={chapter.chapter_number} className="p-2">
              <ChaptersCard
                title={chapter.translation}
                chapterNumber={chapter.chapter_number}
                verseCount={chapter.verses_count}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

Chapters.propTypes = {
  chapters: PropTypes.instanceOf(Array),
  fetchChapters: PropTypes.func,
};

Chapters.defaultProps = {
  chapters: [],
  fetchChapters: () => {},
};

const mapStateToProps = ({ chaptersReducer: { chapters } }) => ({ chapters });

const mapDispatchToProps = {
  fetchChapters: () => getChapters(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Chapters);
