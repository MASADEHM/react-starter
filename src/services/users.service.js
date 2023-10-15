import axios from "axios";
const UsersService = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  return await axios
    .get(url)
    .then((r) => r)
    .catch((err) => err);
};
export default UsersService;
