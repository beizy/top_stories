import { useState } from "react"
import { Card, Button, Modal } from "react-bootstrap"
import "../styles/App.css"

export default function NewsCard(props) {
  const { imgUrl, title, abstract, section, pdate, udate, url, byline } = props
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <Card style={{ width: "16rem", height: "23rem" }}>
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{
          width: "100%",
          height: "50%",
        }}
      />
      <Card.Text
        style={{
          marginTop: "-1.1rem",
          color: "white",
          background: "rgba(0,0,0,0.2)",
          fontSize: "0.7rem",
          textAlign: "start",
        }}
      >
        Section:{section.toUpperCase()}
      </Card.Text>
      <Card.Body className="d-flex flex-column justify-content-between align-items-center">
        <Card.Title
          style={{
            fontSize: "1rem",
          }}
        >
          {title}
        </Card.Title>

        <Button variant="primary" size="sm" onClick={handleShow}>
          Detail
        </Button>
      </Card.Body>

      <Modal show={show} onHide={handleClose} fullscreen="md-down">
        <Modal.Header closeButton>
          <Modal.Title>
            {title}
            <p
              style={{
                margin: "0",
                fontSize: "0.7rem",
                color: "#757e85",
              }}
            >
              {byline}
            </p>
            <p
              style={{
                margin: "0",
                fontSize: "0.7rem",
                color: "#757e85",
              }}
            >
              Published at:{pdate}; Updated at: {udate}
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{abstract}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" href={url} target="_blank">
            Read Full Article
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  )
}
