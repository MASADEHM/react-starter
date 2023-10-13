import axios from "axios";
const Api = {
  fetchUsers: async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    return await axios
      .get(url)
      .then((res) => res)
      .catch((err) => err);
  },
};
export default Api;
