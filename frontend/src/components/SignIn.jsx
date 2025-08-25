export const SignIn = () => {
  return (
    <div className="min-h-screen flex">
      
      {/* Left Section (Form) */}
      <div className="w-1/2 flex flex-col justify-center px-20 bg-white">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">MyBank</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sign In</h2>
        <p className="text-gray-500 mb-8">Enter your details</p>

        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-gray-700 font-medium mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 mb-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Enter
        </button>

        <p className="text-gray-600 text-sm mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Sign Up
          </a>
        </p>
      </div>

      {/* Right Section (Gradient Background) */}
      <div className="w-1/2 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-200"></div>
    </div>
  );
}
