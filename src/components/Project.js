import React from 'react'
import "../style.css"

import { Col,Row,Card,OverlayTrigger,Tooltip } from "react-bootstrap"

function Project({project}) {
    const cardStyle = {
        width: '18rem',
      };

      const renderDeployTooltip = props => (
        <Tooltip {...props}>Enjoy The App!</Tooltip>
      );

      const renderGithubTooltip = props => (
        <Tooltip {...props}>Enjoy The Code!</Tooltip>
      );

    return (
      <>
      <Row className="card-row">
      <Col>
     <Card border="dark">
        <Card.Header>{`${project.title}`}
        <br />
        <OverlayTrigger placement="top" overlay={renderDeployTooltip}>
            <a href={`${project.link}`} target="_blank" rel="noreferrer">App Working</a>
        </OverlayTrigger>
        <br />
        <OverlayTrigger placement="top" overlay={renderGithubTooltip}>
            <a href={`${project.githubRepo}`} target="_blank" rel="noreferrer">GitHub Repo</a>
        </OverlayTrigger>
        </Card.Header>
        <Card.Body>
          <Card.Text>
             <a href={`${project.link}`} target="_blank" rel="noreferrer"><img src={`${project.image}`} alt={`${project.title}`} style={cardStyle} /></a>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col> 
      </Row>
        </>
    )
}

export default Project
