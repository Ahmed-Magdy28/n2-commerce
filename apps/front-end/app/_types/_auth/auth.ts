export type signupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: {
    code: string;
    name: string;
    flag: string;
  };
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  newsletter: boolean;
};
