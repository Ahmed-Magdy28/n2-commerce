"use client";
import { useSignup } from "@/app/_logic/(auth)/useSignUp";
import { EyeOff, Eye } from "lucide-react";
import { CountryDropdown } from "./CountryDropDown";

export default function SignupForm() {
  const {
    showPassword,
    showConfirmPassword,
    formData,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    updateFormData,
    handleSubmit,
  } = useSignup();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Create Account
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Join us today and get started
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="john.doe@example.com"
                required
              />
            </div>

            {/* Phone & Country */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="+1234567890"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Country
                </label>
                <CountryDropdown
                  selectedCountry={formData.country}
                  onSelect={(country) => updateFormData("country", country)}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => updateFormData("password", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white pr-12 transition-colors"
                  placeholder="Create a strong password"
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Must be at least 8 characters with numbers and symbols
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    updateFormData("confirmPassword", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white pr-12 transition-colors"
                  placeholder="Confirm your password"
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <input
                  id="acceptTerms"
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={(e) =>
                    updateFormData("acceptTerms", e.target.checked)
                  }
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-1"
                  required
                />
                <label
                  htmlFor="acceptTerms"
                  className="text-sm text-gray-700 dark:text-gray-300"
                >
                  I agree to the{" "}
                  <a
                    href="terms"
                    className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="privacy"
                    className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  id="newsletter"
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={(e) =>
                    updateFormData("newsletter", e.target.checked)
                  }
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-1"
                />
                <label
                  htmlFor="newsletter"
                  className="text-sm text-gray-700 dark:text-gray-300"
                >
                  Send me product updates and marketing communications
                </label>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors font-medium"
            >
              Create Account
            </button>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Already have an account?{" "}
                <a
                  href="login"
                  className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                >
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
