import { Menu } from '../layout/Menu'
import { Container, Row, Col } from 'react-bootstrap'

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
      link: "/login",
      label: "Sign out"
    }
  ]


  return (
    <>
      <Menu nav={nav} />
      <Container className="section">
        <Row className="justify-content-center">
          <Col className="text-center" md="auto">
            <h1>Exercise form here</h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}
