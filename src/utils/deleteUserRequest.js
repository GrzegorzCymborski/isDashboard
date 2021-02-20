const deleteUserRequest = (dispatch) => {
  const reqOptions = {
    method: "DELETE",
  };

  fetch(`${process.env.REACT_APP_API_URL}/${dispatch}`, reqOptions)
    .then(({ status }) => {
      console.log("deleted user / status", status);
    })
    .catch((error) => console.log("API Error", error));
};

export default deleteUserRequest;

