const addNewUser = (dispatch) => {
  const reqOptions = {
    method: "POST",
    body: JSON.stringify(dispatch),
  };

  fetch(process.env.REACT_APP_API_URL, reqOptions)
    .then(({status}) => {
      console.log("added new user / status", status);
    })
    .catch((error) => console.log("API Error", error));
};

export default addNewUser;
