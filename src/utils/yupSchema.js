import * as yup from "yup";

export const addUserSchema = yup.object({
  name: yup
    .string()
    .required("Name is required ")
    .min(3, "Minimum 3 chars")
    .max(25, "Max 25 chars"),
  email: yup
    .string()
    .email()
    .required("Email is required ")
    .min(5, "Minimum 5 chars")
    .max(30, "Max 30 chars"),
});

export const editUserSchema = yup.object({
  name: yup
    .string()
    .required("Name is required ")
    .min(3, "Minimum 3 chars")
    .max(25, "Max 25 chars"),
  username: yup.string().min(3, "Minimum 3 chars").max(25, "Max 25 chars"),
  email: yup
    .string()
    .email()
    .required("Email is required ")
    .min(5, "Minimum 5 chars")
    .max(30, "Max 30 chars"),
  address: yup.object({
    street: yup.string(),
    suite: yup.string(),
    city: yup.string(),
    zipcode: yup.string(),
    geo: yup.object({
      lat: yup.string(),
      lng: yup.string(),
    }),
  }),
  phone: yup.string(),
  website: yup.string(),
  company: yup.object({
    name: yup.string(),
    catchPhrase: yup.string(),
    bs: yup.string(),
  }),
});
