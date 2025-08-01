import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Question = ({ eventKey, header, body }) => {
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>
                {body}
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default Question