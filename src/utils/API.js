import axios from "axios";

export default {

  getJoke: function(title) {
    return axios.get(`http://api.icndb.com/jokes/random`);
  }
};
