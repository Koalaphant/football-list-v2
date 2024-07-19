import { useState } from "react";
import { useCookies } from "react-cookie";

function Auth() {
  const [cookie, setCookie, removeCookie] = useCookies(null);
  const [loggedIn, isLoggedIn] = useState(true);
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [password, setPassword] = useState(null);
}

export default Auth;
