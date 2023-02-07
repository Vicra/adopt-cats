import axios from "axios";

export async function login(email, password) {
  const host = process.env.BACKEND_API || "http://localhost:3001";
  // const host = process.env.BACKEND_API ? process.env.BACKEND_API : "http://localhost:3001";

  const options = {
    method: "POST",
    url: `${host}/student/login`,
    data: {
      email,
      password,
    },
  };

  const response = await axios.request(options);
  console.log(response.data);
  return response.data;
}

export async function register(form) {
  // const { email, password, confirmPassword, name, dni, address, role } = form;
  const host = process.env.BACKEND_API || "http://localhost:3001";

  const options = {
    method: "POST",
    url: `${host}/user/register`,
    data: {
      ...form,
    },
  };

  // const response = await axios.request(options);
  // console.log(response.data);
  // return response.data;
  return true;
}

export async function getClasses(accessToken) {
  const host = process.env.BACKEND_API || "http://localhost:3001";
  // const host = process.env.BACKEND_API ? process.env.BACKEND_API : "http://localhost:3001";

  const options = {
    method: "GET",
    url: `${host}/class`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const response = await axios.request(options);
  console.log(response.data);
  return response.data;
}
