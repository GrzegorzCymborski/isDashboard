const updateUser = (dispatch) => {
  const reqOptions = {
    method: "PUT",
    body: JSON.stringify(dispatch),
  };

  fetch(`${process.env.REACT_APP_API_URL}/${dispatch.id}`, reqOptions)
    .then(({ status }) => {
      console.log("updated user / status", status);
    })
    .catch((error) => console.log("API Error", error));
};

export default updateUser;

