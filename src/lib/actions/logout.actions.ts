"use server";

import { signOut } from "@/authentication/auth";

export const logout = async () => {
  await signOut();
};
