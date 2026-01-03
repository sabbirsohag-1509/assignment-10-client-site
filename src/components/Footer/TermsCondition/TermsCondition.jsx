import React from "react";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, BookOpen, Users } from "lucide-react";

const TermsCondition = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          <title> 
        Terms & Conditions - HomeNest
      </title>

      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
          Terms & Conditions
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Welcome to Home<span className="text-blue-600">Nest</span>! By accessing our website and using our services, 
          you agree to comply with the following terms and conditions. Please 
          read them carefully to ensure a safe and reliable experience.
        </p>
      </div>

      {/* Section 1: Use of Website */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="text-blue-600 w-6 h-6" />
          <h2 className="text-2xl font-semibold">Use of Website</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Users agree to use Home<span className="text-blue-600">Nest</span> for lawful purposes only. Any attempt to 
          access or modify restricted sections of the website without authorization 
          is strictly prohibited. By using our services, you acknowledge that you 
          will not engage in any behavior that may harm the platform or other users.
        </p>
      </section>

      {/* Section 2: Account Responsibility */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <Users className="text-blue-600 w-6 h-6" />
          <h2 className="text-2xl font-semibold">Account Responsibility</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Users are responsible for maintaining the confidentiality of their accounts, 
          including passwords and login credentials. Any activity under your account 
          is your responsibility. Home<span className="text-blue-600">Nest</span> will not be liable for any losses arising 
          from unauthorized access due to negligence.
        </p>
      </section>

      {/* Section 3: Property Listings */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="text-blue-600 w-6 h-6" />
          <h2 className="text-2xl font-semibold">Property Listings</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          All property listings are provided by users. Home<span className="text-blue-600">Nest</span> does not guarantee 
          the accuracy, completeness, or authenticity of listings. Users must verify 
          information before making decisions based on listings. Home<span className="text-blue-600">Nest</span> reserves 
          the right to remove any listing violating our terms.
        </p>
      </section>

      {/* Section 4: Payment Terms */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="text-blue-600 w-6 h-6" />
          <h2 className="text-2xl font-semibold">Payment Terms</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Payments made through HomeNest’s platform for premium listings or services 
          are secure and processed via trusted payment gateways. Users are responsible 
          for ensuring the accuracy of payment details. Refunds and cancellations are 
          subject to our refund policy.
        </p>
      </section>

      {/* Section 5: Privacy & Data */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="text-blue-600 w-6 h-6" />
          <h2 className="text-2xl font-semibold">Privacy & Data</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Home<span className="text-blue-600">Nest</span> respects your privacy. Personal information collected during registration 
          or transactions is used solely for providing services and improving user experience. 
          Users consent to the collection and use of data in accordance with our Privacy Policy.
        </p>
      </section>

      {/* Section 6: Prohibited Conduct */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="text-blue-600 w-6 h-6" />
          <h2 className="text-2xl font-semibold">Prohibited Conduct</h2>
        </div>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Posting fraudulent or misleading property listings.</li>
          <li>Using the platform for unlawful purposes.</li>
          <li>Impersonating other users or Home<span className="text-blue-600">Nest</span> staff.</li>
          <li>Attempting to disrupt website operations or security.</li>
        </ul>
      </section>

      {/* Section 7: Limitation of Liability */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="text-blue-600 w-6 h-6" />
          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Home<span className="text-blue-600">Nest</span> shall not be liable for any direct, indirect, incidental, or consequential 
          damages arising from the use of the website, property listings, or any third-party services. 
          Users agree to use the platform at their own risk.
        </p>
      </section>

      {/* Section 8: Changes to Terms */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="text-blue-600 w-6 h-6" />
          <h2 className="text-2xl font-semibold">Changes to Terms</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Home<span className="text-blue-600">Nest</span> reserves the right to modify these Terms & Conditions at any time. 
          Updated terms will be posted on this page, and continued use of the platform 
          constitutes acceptance of the revised terms.
        </p>
      </section>

      {/* Footer Note */}
      <div className="text-center text-gray-500 dark:text-gray-400 mt-12">
        © {new Date().getFullYear()} Home<span className="text-blue-600">Nest</span>. All rights reserved.
      </div>
    </div>
  );
};

export default TermsCondition;
