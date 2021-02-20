import { Form, Row, Col } from "react-bootstrap";

const FormField = ({
  formName,
  values,
  handleChange,
  touched,
  errors,
  fieldName
}) => {
  return (
    <Form.Group as={Row} controlId={formName}>
      <Form.Label column sm={{ offset: 2, span: 2 }}>
        {fieldName}:
      </Form.Label>
      <Col sm="6">
        <Form.Control
          type="text"
          name={formName}
          value={values}
          onChange={handleChange}
          isValid={touched && !errors}
          isInvalid={!!errors}
          error={errors}
        />
        <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
      </Col>
    </Form.Group>
  );
};
export default FormField;
