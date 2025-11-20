import { useState } from "react";

export const useLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login attempt:", { username, password });
  };

  return {
    showPassword,
    togglePasswordVisibility,
    username,
    setUsername,
    password,
    setPassword,
    handleSubmit,
  };
};
