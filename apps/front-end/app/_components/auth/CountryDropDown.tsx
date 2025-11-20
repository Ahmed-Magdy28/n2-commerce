import { useState } from "react";
import { countries } from "../../_data/countries";
import { ChevronDown, Check } from "lucide-react";

interface CountryDropdownProps {
  selectedCountry: (typeof countries)[0];
  onSelect: (country: (typeof countries)[0]) => void;
}

export function CountryDropdown({
  selectedCountry,
  onSelect,
}: CountryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white flex items-center justify-between transition-colors hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <div className="flex items-center space-x-3">
          <span className="text-lg">{selectedCountry.flag}</span>
          <span>{selectedCountry.name}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown menu */}
          <div className="absolute z-20 w-full mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-auto">
            {countries.map((country) => (
              <button
                key={country.code}
                type="button"
                onClick={() => {
                  onSelect(country);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors ${
                  selectedCountry.code === country.code
                    ? "bg-indigo-50 dark:bg-indigo-900/20"
                    : ""
                }`}
              >
                <span className="text-lg">{country.flag}</span>
                <span className="flex-1 text-left">{country.name}</span>
                {selectedCountry.code === country.code && (
                  <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
