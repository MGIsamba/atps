import React from "react";
import { useAuthentication } from "../utils/useAuthentication";
import AppContainer from "./AppNavigation";
import AuthStack from "./AuthStack";

const RootNavigation = () => {
  const { user } = useAuthentication();

  return user ? <AppContainer /> : <AuthStack />;
};

export default RootNavigation;
