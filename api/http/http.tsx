import axios from "axios";

interface LoginData {
  email: string;
  password: string;
}

export const login = async (user: LoginData) => {
  try {
    await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie");
    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/v2/user/auth/login",
      user
    );
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};
