import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import './LearningExperiences.css';

const LearningExperiences = ({ learningExperiences }) => {
  return (
    <Carousel className="learning-experiences-carousel">
      {Object.keys(learningExperiences).map((category) => (
        <Carousel.Item key={category}>
          <Card>
            <Card.Body>
              <Card.Title>{category}</Card.Title>
              <Card.Text>{learningExperiences[category]}</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default LearningExperiences;
