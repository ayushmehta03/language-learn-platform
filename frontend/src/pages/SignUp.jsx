import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import axiosInstance from "../lib/axios"; // ✅ Ensure this points to your Axios base setup

const SignUp = () => {
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosInstance.post("/auth/signup", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Signup successful!");
      navigate("/onboarding");
    },
    onError: (err) => {
      setError(err.response?.data?.message || "Signup failed");
    },
  });

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!signupData.email || !signupData.password || !signupData.fullName) {
      toast.error("All fields are required");
      return;
    }
    if (signupData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    mutate(signupData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="card bg-base-200 p-6 w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold text-center">Sign Up</h2>

        {error && <p className="text-error">{error}</p>}

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={signupData.fullName}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signupData.email}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signupData.password}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <button type="submit" className="btn btn-primary w-full" disabled={isPending}>
          {isPending ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
