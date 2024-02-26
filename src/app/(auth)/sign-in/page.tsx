import { CardWrapper } from "@/components/auth/CardWrapper";
import React from "react";

const SignInPage = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back!"
      backButtonHref="/"
      backButtonLabel="Back to Home"
      showSocial
    >
      <h1 className="flex items-center justify-center text-center font-semibold">
        Proceed with Google or Github.
      </h1>
    </CardWrapper>
  );
};

export default SignInPage;
