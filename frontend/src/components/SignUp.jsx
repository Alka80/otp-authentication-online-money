import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="min-h-screen flex">
      
      {/* Left Section - Form */}
      <div className="w-1/2 flex flex-col justify-center px-20 bg-white py-20">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">MyBank</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sign Up</h2>
        <p className="text-gray-500 mb-8">Open your secure account</p>

        {/* Full Name */}
        <label className="block text-gray-700 font-medium mb-1">Full Name</label>
        <input type="text" placeholder="Enter your full name"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

        {/* Email */}
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input type="email" placeholder="Enter your email"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

        {/* Phone */}
        <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
        <input type="tel" placeholder="Enter your phone number"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

        {/* Date of Birth */}
        <label className="block text-gray-700 font-medium mb-1">Date of Birth</label>
        <input type="date"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

        {/* Account Type */}
        <label className="block text-gray-700 font-medium mb-1">Account Type</label>
        <select className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Savings</option>
          <option>Current</option>
        </select>

        {/* Password */}
        <label className="block text-gray-700 font-medium mb-1">Password</label>
        <input type="password" placeholder="Enter your password"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

        {/* Confirm Password */}
        <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
        <input type="password" placeholder="Re-enter your password"
          className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

        {/* Terms & Conditions */}
        <div className="flex items-center mb-6">
          <input type="checkbox" className="mr-2"/>
          <p className="text-sm text-gray-600">I agree to the <a href="#" className="text-blue-600">Terms & Conditions</a></p>
        </div>

        {/* Sign Up Button */}
        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Create Account
        </button>

        {/* Link to Sign In */}
        <p className="text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline font-medium">
            Sign In
        </Link>
        </p>
      </div>

      {/* Right Section - Gradient */}
      <div className="w-1/2 bg-gradient-to-br from-blue-300 via-blue-200 to-blue-300"></div>
    </div>
  );
}

