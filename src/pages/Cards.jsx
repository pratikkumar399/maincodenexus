import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import card4 from '../images/card4.png';
import './Cards.css';

// ... (other imports)



const Cards = () => {
    const cardData = [
        { title: 'Card 1', image: card1 },
        { title: 'Card 2', image: card2 },
        { title: 'Card 3', image: card3 },
        { title: 'Card 4', image: card4 },
    ];

    return (
        <div className="background">
            <Container>
                {Array.from({ length: Math.ceil(cardData.length / 2) }).map((_, rowIndex) => (
                    <Row key={rowIndex} className="mb-4">
                        {cardData.slice(rowIndex * 2, rowIndex * 2 + 2).map((card, index) => (
                            <Col key={index} xs={12} sm={6} md={6} className="d-flex justify-content-center mb-4">
                                <Card>
                                    <Card.Img variant="top" src={card.image} />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>
        </div>
    );
};

export default Cards;

