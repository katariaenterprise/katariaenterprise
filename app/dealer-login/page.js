"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NextImage from "next/image";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DealerLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ userId: "", password: "", mobile: "" });
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up authentication
    console.log("Login attempt:", form);
  }

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <a href="/">
            <NextImage
              src="/assets/logo.png"
              alt="Kataria Enterprise"
              width={180}
              height={54}
              className="object-contain"
            />
          </a>
        </div>

        {/* Card */}
        <div className="bg-background rounded-2xl border border-border shadow-xl p-8 md:p-10">

          {/* Header */}
          <div className="mb-8">
            <p className="text-primary font-heading font-semibold text-xs uppercase tracking-widest mb-2">
              Portal Access
            </p>
            <h1 className="font-heading font-black text-3xl text-foreground">
              Dealer Login
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Sign in to access your dealer dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* User ID */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="userId" className="text-sm font-heading font-semibold text-foreground">
                User ID
              </label>
              <input
                id="userId"
                name="userId"
                type="text"
                autoComplete="username"
                placeholder="Enter your user ID"
                value={form.userId}
                onChange={handleChange}
                required
                className="h-11 rounded-xl border border-input bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-sm font-heading font-semibold text-foreground">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="h-11 w-full rounded-xl border border-input bg-secondary px-4 pr-11 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="mobile" className="text-sm font-heading font-semibold text-foreground">
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                autoComplete="tel"
                placeholder="Enter your mobile number"
                value={form.mobile}
                onChange={handleChange}
                required
                maxLength={10}
                pattern="[6-9][0-9]{9}"
                className="h-11 rounded-xl border border-input bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="gradient-red text-primary-foreground font-heading font-bold mt-2 gap-2"
            >
              <LogIn size={18} />
              Sign In
            </Button>

          </form>

          {/* Back link */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            <a href="/" className="hover:text-primary transition-colors font-semibold">
              ← Back to Website
            </a>
          </p>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          © {new Date().getFullYear()} Kataria Enterprise. All rights reserved.
        </p>
      </div>
    </div>
  );
}
