import { auth } from "@/authentication/auth";
import { LogoutButton } from "@/components/auth/logout-button";

import React from "react";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <div>
        <LogoutButton>Logout</LogoutButton>
      </div>
    </div>
  );
};

export default SettingsPage;
