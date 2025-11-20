import { useEffect, useState } from "react";
import { countries } from "@/app/_data/countries";

export const useSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: countries[0],
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    newsletter: true,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const updateFormData = (field: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your signup logic here
    console.log("Signup attempt:", formData);
  };

  return {
    showPassword,
    showConfirmPassword,
    formData,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    updateFormData,
    handleSubmit,
  };
};
