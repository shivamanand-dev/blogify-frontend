// import { DiwaliCanvas, HeartCanvas } from "./components/canvas";
"use client";
import { authApi } from "./utils/services/auth";

export default function Home() {
  const handleButtonClick = async () => {
    try {
      await authApi.loginUser({
        email: "shivam@shivam.com",
        password: "password123",
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <main>
      <h1>Hello World</h1>
      <button onClick={handleButtonClick}>Submit</button>
    </main>
  );
}
