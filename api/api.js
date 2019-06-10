import axios from "axios";

export const callGetUser = postData =>
  axios.get("https://jsonplaceholder.typicode.com/users", postData);
