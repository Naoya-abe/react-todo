import base from "../base";

export const createMeAPI = async (data) => {
  try {
    const { email, displayName, password } = data;
    const params = {
      email,
      display_name: displayName,
      password,
      about: "",
      avatar_url: "",
    };
    const response = await base.post("/users/", params);
    return response;
  } catch (err) {
    throw err;
  }
};

export const fetchMeTokenAPI = async (data) => {
  try {
    const { email, password } = data;
    const params = {
      username: email,
      password,
    };
    const response = await base.post("/login/", params);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const fetchMeAPI = async () => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await base.get("/users/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return response;
  } catch (err) {
    throw err;
  }
};
