import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/users/actions";
import addNewUser from "../../utils/addNewUser";
import { Form, Row, Col, Button } from "react-bootstrap";
import { addUserSchema } from "../../utils/yupSchema";
import FormField from "../formField/FormField";

const Adduser = ({ setAddingUser }) => {
  const fetchedUsers = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const nextID = () => Math.max(...fetchedUsers.map((user) => user.id)) + 1;

  return (
    <Formik
      validationSchema={addUserSchema}
      validateOnChange
      onSubmit={(values) => {
        addNewUser({ name: values.name, email: values.email });
        dispatch(
          actions.addUser({
            id: nextID(),
            name: values.name,
            email: values.email,
            username: "",
            address: { city: "" },
          })
        );
        setAddingUser(false);
      }}
      initialValues={{
        name: "",
        email: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
      }) => (
        <Form onSubmit={handleSubmit}>
          <hr />

          <FormField
            fieldName="Name"
            formName="name"
            values={values.name}
            handleChange={handleChange}
            touched={touched.name}
            errors={errors.name}
          />

          <FormField
            fieldName="Email"
            formName="email"
            values={values.email}
            handleChange={handleChange}
            touched={touched.email}
            errors={errors.email}
          />

          <Row>
            <Col className="d-flex justify-content-end" xs="10">
              <Button
                className="mr-3"
                variant="outline-danger"
                onClick={() => setAddingUser(false)}
              >
                Cancel
              </Button>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default Adduser;
