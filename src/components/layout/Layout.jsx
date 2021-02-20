import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Layout = ({ children, addingUser, setAddingUser, editingUser }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="my-3">
            <Card.Header>isPies🐕‍🦺</Card.Header>
            <Card.Body>
              <Container
                fluid
                className="d-flex justify-content-between align-items-center mb-3 mt-2"
              >
                <Card.Title>
                  {addingUser
                    ? `Add user`
                    : editingUser
                    ? `Edit User`
                    : `Dashboard`}
                </Card.Title>
                {!addingUser && !editingUser && (
                  <Button
                    variant="primary"
                    onClick={() => setAddingUser(!addingUser)}
                  >
                    Add new
                  </Button>
                )}
              </Container>
              {children}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
