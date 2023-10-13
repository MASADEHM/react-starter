import axios from "axios";

export const Loginservice = async (request) => {
  const url = "http://restapi.adequateshop.com/api/authaccount/login";
  const req = JSON.stringify(request);
  const response =  await axios.post(url, req, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

