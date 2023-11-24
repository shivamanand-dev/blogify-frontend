// import { DiwaliCanvas, HeartCanvas } from "./components/canvas";
"use client";
import { StyledLandingPage } from "./components/StyledPages/StyledLandingPage";
// import { authApi } from "./utils/services/auth";

export default function Home() {
  // const handleButtonClick = async () => {
  //   try {
  //     await authApi.loginUser({
  //       email: "shivam@shivam.com",
  //       password: "password123",
  //     });
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //   }
  // };
  return (
    <main>
      <StyledLandingPage>
        <div className="hero flex">
          <h1>Welcome to Our Blogging Community</h1>
          <h2>Join thousands of writers and readers around the world</h2>
          {/* <PrimaryButton
            buttonText="Join now"
            onClick={() => {
              router.push(app_routes.login);
            }}
          /> */}
        </div>
      </StyledLandingPage>
    </main>
  );
}
