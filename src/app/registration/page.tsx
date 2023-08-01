import FormRegistration from "@/components/FormRegistration";

const page = () => {
  return (
    <div className="place">
      <div className="background">
        <img src="/background.jpg" alt="" />
      </div>
      <div className="signIn">
        <div className="signin-h1">
          <h1>Register</h1>
        </div>
        <div className="credentials">
          <FormRegistration />
        </div>
      </div>
    </div>
  );
};

export default page;
