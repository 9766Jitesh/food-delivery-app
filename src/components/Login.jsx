import React from 'react'

export default function Login() {
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Login to Your Account</h2>

                {/* Form */}
                <form action="#" method="post">
                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 text-sm mb-2">
                            Email Address
                        </label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" required />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 text-sm mb-2">
                            Password
                        </label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md" required />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Login
                    </button>
                </form>

                {/* Additional Options */}
                <div className="mt-4 text-sm text-gray-600">
                    <p>
                        Don't have an account? <a href="#" className="text-blue-500">
                            Sign Up
                        </a>
                    </p>
                    <p>
                        Forgot your password? <a href="#" className="text-blue-500">
                            Reset Password
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
