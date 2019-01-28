import axios from "axios";

export default {

  getJoke: function() {
    return axios.get(`https://api.icndb.com/jokes/random`);
  }
};
