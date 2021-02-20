import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/users/actions";
import taskActions from "../../redux/currentTask/actions";
import { Button, Col, Form, Row } from "react-bootstrap";
import { editUserSchema } from "../../utils/yupSchema";
import updateUser from "../../utils/updateUser";
import FormField from "../formField/FormField";

const EditUser = ({ setEditingUser }) => {
  const activeTask = useSelector((state) => state.currentTask);
  const dispatch = useDispatch();

  const {
    name = "",
    username = "",
    email = "",
    address: {
      street = "",
      suite = "",
      city = "",
      zipcode,
      geo: { lat = "", lng = "" } = "",
    },
    phone = "",
    website = "",
    company: { name: cName = "", catchPhrase = "", bs = "" } = "",
  } = activeTask;

  return (
    <Formik
      validationSchema={editUserSchema}
      validateOnChange
      onSubmit={(values) => {
        values.id = activeTask.id;
        dispatch(actions.editUser(values));
        updateUser(values);
        setEditingUser();
      }}
      initialValues={{
        name,
        username,
        email,
        address: {
          street,
          suite,
          city,
          zipcode,
          geo: { lat, lng },
        },
        phone,
        website,
        company: { name: cName, catchPhrase, bs },
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <FormField
              fieldName="Name"
              formName="name"
              values={values.name}
              handleChange={handleChange}
              touched={touched.name}
              errors={errors.name}
            />
            <FormField
              fieldName="Username"
              formName="username"
              values={values.username}
              handleChange={handleChange}
              touched={touched.username}
              errors={errors.username}
            />
            <FormField
              fieldName="Email"
              formName="email"
              values={values.email}
              handleChange={handleChange}
              touched={touched.email}
              errors={errors.email}
            />
            <FormField
              fieldName="Street"
              formName="address.street"
              values={values.address.street}
              handleChange={handleChange}
              touched={touched.address?.street}
              errors={errors.address?.street}
            />
            <FormField
              fieldName="Suite"
              formName="address.suite"
              values={values.address.suite}
              handleChange={handleChange}
              touched={touched.address?.suite}
              errors={errors.address?.suite}
            />
            <FormField
              fieldName="City"
              formName="address.city"
              values={values.address.city}
              handleChange={handleChange}
              touched={touched.address?.city}
              errors={errors.address?.city}
            />
            <FormField
              fieldName="Zipcode"
              formName="address.zipcode"
              values={values.address.zipcode}
              handleChange={handleChange}
              touched={touched.address?.zipcode}
              errors={errors.address?.zipcode}
            />
            <FormField
              fieldName="Latitude"
              formName="address.geo.lat"
              values={values.address.geo.lat}
              handleChange={handleChange}
              touched={touched.address?.geo?.lat}
              errors={errors.address?.geo?.lat}
            />
            <FormField
              fieldName="Longtitude"
              formName="address.geo.lng"
              values={values.address.geo.lng}
              handleChange={handleChange}
              touched={touched.address?.geo?.lng}
              errors={errors.address?.geo?.lng}
            />
            <FormField
              fieldName="Phone"
              formName="phone"
              values={values.phone}
              handleChange={handleChange}
              touched={touched.phone}
              errors={errors.phone}
            />
            <FormField
              fieldName="Website"
              formName="website"
              values={values.website}
              handleChange={handleChange}
              touched={touched.website}
              errors={errors.website}
            />
            <FormField
              fieldName="Company Name"
              formName="company.name"
              values={values.company.name}
              handleChange={handleChange}
              touched={touched.company?.name}
              errors={errors.company?.name}
            />
            <FormField
              fieldName="Catch Phrase"
              formName="company.catchPhrase"
              values={values.company.catchPhrase}
              handleChange={handleChange}
              touched={touched.company?.catchPhrase}
              errors={errors.company?.catchPhrase}
            />
            <FormField
              fieldName="Branch"
              formName="company.bs"
              values={values.company.bs}
              handleChange={handleChange}
              touched={touched.company?.bs}
              errors={errors.company?.bs}
            />

            <Row>
              <Col className="d-flex justify-content-end" xs="10">
                <Button
                  className="mr-3"
                  variant="outline-danger"
                  onClick={() => {
                    setEditingUser();
                    dispatch(taskActions.currentTask({}));
                  }}
                >
                  Cancel
                </Button>
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EditUser;
