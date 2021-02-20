const fetchNewData = (dispatch) => {
  fetch(process.env.REACT_APP_API_URL)
    .then((data) => data.json())
    .then((data) => {
      dispatch(data);
      console.log(`data fetched ok, total users ${data.length}`);
    })
    .catch((error) => console.log("API Error", error));
};

export default fetchNewData;
