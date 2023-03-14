import axios from "axios";

const host =
  process.env.BACKEND_API || "http://localhost:3001/.netlify/functions/api";

export async function login(email, password) {
  const options = {
    method: "POST",
    url: `${host}/auth/login`,
    data: {
      email,
      password,
    },
  };

  const response = await axios.request(options);
  return response.data;
}

export async function register(form) {
  const options = {
    method: "POST",
    url: `${host}/auth/register`,
    data: form,
  };
  const response = await axios.request(options);
  return response.data;
}
