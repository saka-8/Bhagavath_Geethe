import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Row, Col, Container } from "reactstrap";

import { getChapter } from "../../redux/actions/chapter";

const Chapter = ({ fetchChapter, chapter }) => {
  const { flag } = useParams();

  const init = async () => {
    await fetchChapter(flag);
  };
  useEffect(() => {
    init();
    return () => {};
  }, []);

  return (
    <Container fluid className="wrapper p-0">
      <Row className="chapter-row no-gutters p-3">
        <Col>
          <h3 className="text-center py-3">{`Chapter ${chapter?.chapter_number}`}</h3>
          <h5 className="text-center">{chapter?.verse_count}</h5>
          <p className="lead text-center">{`${chapter?.name}   (${chapter?.translation})`}</p>
          <h6>
            <i className="font-weight-bold">Meaning:</i> {chapter.meaning?.en}
          </h6>
          <h3>Summary in Hindhi</h3>
          <p>{chapter.summary?.hi}</p>
          <h3>Summary in English</h3>
          <p>{chapter.summary?.en}</p>
        </Col>
      </Row>
    </Container>
  );
};

Chapter.propTypes = {
  fetchChapter: PropTypes.func,
  chapter: PropTypes.instanceOf(Object),
};

Chapter.defaultProps = {
  fetchChapter: () => {},
  chapter: {},
};

const mapStateToProps = ({ chapterReducer: { chapter } }) => ({ chapter });
const mapDispatchToProps = { fetchChapter: (id) => getChapter(id) };

export default connect(mapStateToProps, mapDispatchToProps)(Chapter);
