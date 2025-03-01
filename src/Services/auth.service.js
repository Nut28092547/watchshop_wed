import http from "../../http-common";

const login = async (data) => {
  try {
    const response = await http.post("/auths/login", data);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

const register = async (data) => {
  try {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    const response = await http.post("/auths/register", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  } catch (error) {
    console.error("Registration Error:", error);
    throw error;
  }
};

const AuthService = {
  login,
  register,
};

export default AuthService;
