import axios from "axios";

export default axios.create({
  badeURL: "http://192.168.0.10:8282/boards/list",
  headers: {
    "Content-type": "application/json",
  },
});
