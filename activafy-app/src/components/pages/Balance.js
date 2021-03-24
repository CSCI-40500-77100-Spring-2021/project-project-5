import { useState } from 'react'
import { Menu } from '../layout/Menu'
import { Container, Row, Col, Button, Table, Modal } from 'react-bootstrap'
import '../../style/style.css'


export const Balance = () => {
  const nav = [
    {
      id: 1,
      link: "/settings",
      label: "Settings"
    },
    {
      id: 2,
      link: "/",
      label: "Sign out"
    }
  ]

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Menu nav={nav} link='/home'/>
      <Container className="section">
        <Row className="justify-content-center">
          <Col className="text-center" md="auto">
            <h2>Balance Routine</h2><br/>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>DAY</th>
                  <th>ACTIVITY</th>
                  <th>ACTIVE TIME</th>
                  <th>COOL DOWN</th>
                  <th>DISTANCE</th>
                  <th>SETS</th>
                  <th>REPS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MONDAY</td>
                  <td>Banded triplanar toe taps</td>
                  <td>5 min</td>
                  <td>1 min</td>
                  <td>X</td>
                  <td>1</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>TUESDAY</td>
                  <td>Single leg cross-body punches</td>
                  <td>5 min</td>
                  <td>1 min</td>
                  <td>X</td>
                  <td>2</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>WEDNESDAY</td>
                  <td>Paloff press with rotation</td>
                  <td>5 min</td>
                  <td>1 min</td>
                  <td>X</td>
                  <td>3</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>THURSDAY</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>FRIDAY</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>SATURDAY</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>SUNDAY</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
              </tbody>
            </Table>
            <p>
              <Button variant="primary" href="/balance-edit">Edit</Button> { }
              <Button variant="primary" onClick={handleShow}>Synchronize</Button>
            </p>
              <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Synchronize Balance Routine</Modal.Title>
                </Modal.Header>
                <Modal.Body>Proceed to sync this workout to your calendar?</Modal.Body>
                <Modal.Footer>
                 <Button variant="primary" onClick={handleClose}>
                    Yes
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    No
                  </Button>                
                </Modal.Footer>
              </Modal>
          </Col>
        </Row>
      </Container>
    </>
  )
}
