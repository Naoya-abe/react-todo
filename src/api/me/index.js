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