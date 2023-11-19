import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./firebase";

const auth: Auth = getAuth(app);

const createUser = async (data: {
  email: string;
  password: string;
}): Promise<any> => {
  return await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password
  ).catch((error) => {
    return error;
  });
};

const loginUser = async (data: {
  email: string;
  password: string;
}): Promise<any> => {
  return await signInWithEmailAndPassword(
    auth,
    data.email,
    data.password
  ).catch((error) => {
    return error.code;
  });
};

const logout = async (): Promise<any> => {
  localStorage.clear();
  await auth.signOut();
};

interface AuthApi {
  createUser: (data: { email: string; password: string }) => Promise<any>;
  loginUser: (data: { email: string; password: string }) => Promise<any>;
  logout: () => Promise<void>;
}

export const authApi: AuthApi = {
  createUser,
  loginUser,
  logout,
};
