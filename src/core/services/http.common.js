import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api/v3/",
  headers: { "Content-type": "application/json" },
});
