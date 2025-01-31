import { useState } from 'react'
import { Eye, EyeOff, Loader } from 'lucide-react'
import { useToast } from '../hooks/useToast'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../api/axios'

export default function AdminLogin() {
    const toast = useToast()
    const navigate = useNavigate()

    const [loader, setLoader] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.username || !formData.password) {
            toast('Please fill in all fields', 'error')
            return
        }
        try {
            setLoader(true)
            const sendableData = {
                name: formData.username,
                password: formData.password
            }
            const response = await axiosInstance.post('/login', sendableData)
            localStorage.setItem('authToken', response.data.token)
            toast('Login successful', 'success')
            navigate('/dashboard')
        } catch (error) {
            toast('Invalid username or password', 'error')
            console.log(error);
        } finally {
            setLoader(false)
        }

    }

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-black to-green-700 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8">
                <h2 className="text-base text-gray-700 mb-6">
                    Please fill in your unique admin login details below
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Username
                        </label>
                        <input
                            type="username"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-gray-700"
                        >
                            forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        disabled={loader}
                        className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 text-center"
                    >
                        {loader ? (
                            <Loader className="w-5 h-5 animate-spin mx-auto" />
                        ) : (
                            'Sign in'
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}