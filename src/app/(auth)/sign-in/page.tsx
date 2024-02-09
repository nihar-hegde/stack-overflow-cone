import { CardWrapper } from "@/components/auth/CardWrapper";
import React from "react";

const SignInPage = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back!"
      backButtonHref="/sign-up"
      backButtonLabel="Don't Have an account?"
      showSocial
    >
      <h1 className="flex items-center justify-center text-center font-semibold">
        Login with Google or Github
      </h1>
    </CardWrapper>
  );
};

export default SignInPage;
