import FormCredentials from "@/components/FormCredentials";
import GoogleButton from "@/components/GoogleButton";

const signIn = () => {
  return (
    <div className="place">
      <div className="background">
        <img src="/background.jpg" alt="" />
      </div>
      <div className="signIn">
        <div className="signin-h1">
          <h1>Sign In</h1>
        </div>
        <div className="credentials">
          <GoogleButton />
          <FormCredentials />
          <button className="register">Register</button>
        </div>
      </div>
    </div>
  );
};

export default signIn;
