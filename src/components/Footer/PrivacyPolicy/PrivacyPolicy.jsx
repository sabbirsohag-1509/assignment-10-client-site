import React from "react";
import { Helmet } from "react-helmet-async";
import {
  ShieldCheck,
  Database,
  Eye,
  Lock,
  Users,
  FileText,
} from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          <title> 
        Privacy Policy - HomeNest
      </title>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
          Privacy Policy
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          At Home <span className="text-blue-400 font-semibold">Nest</span>, your privacy is our priority. This Privacy Policy explains
          how we collect, use, protect, and handle your personal information
          when you use our platform.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Database className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold">
            Information We Collect
          </h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          We may collect personal information such as your name, email address,
          phone number, location, and account details when you register or
          interact with Home<span className="text-blue-400 font-semibold">Nest</span>. We also collect property-related data when you
          list or apply for properties.
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Eye className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold">
            How We Use Your Information
          </h2>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>To provide and manage our services</li>
          <li>To process property listings and applications</li>
          <li>To communicate important updates and notifications</li>
          <li>To improve user experience and platform security</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold">
            Sharing of Information
          </h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Home<span className="text-blue-400 font-semibold">Nest</span> does not sell or rent your personal information to third
          parties. Information may only be shared with trusted partners or
          service providers when required to deliver our services or comply
          with legal obligations.
        </p>
      </section>

      {/* Section 4 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Lock className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold">
            Data Security
          </h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          We implement industry-standard security measures to protect your data
          from unauthorized access, alteration, or disclosure. However, no
          method of transmission over the internet is 100% secure.
        </p>
      </section>

      {/* Section 5 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold">
            Cookies & Tracking
          </h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Home<span className="text-blue-400 font-semibold">Nest</span> may use cookies and similar technologies to enhance your
          browsing experience, analyze usage patterns, and personalize content.
          You can control cookie preferences through your browser settings.
        </p>
      </section>

      {/* Section 6 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold">
            Your Rights
          </h2>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Access and review your personal data</li>
          <li>Request correction or deletion of data</li>
          <li>Withdraw consent for data processing</li>
        </ul>
      </section>

      {/* Section 7 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold">
            Policy Updates
          </h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and continued use of HomeNest means you accept
          the updated policy.
        </p>
      </section>

      {/* Footer */}
      <div className="text-center text-gray-500 dark:text-gray-400 pt-10">
        © {new Date().getFullYear()} Home<span className="text-blue-400 font-semibold">Nest</span>. All rights reserved.
      </div>
    </div>
  );
};

export default PrivacyPolicy;
