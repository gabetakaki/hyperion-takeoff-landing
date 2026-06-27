"use client";

import { useState } from "react";

const CTA_PRIMARY = "Start free trial";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSignedIn(true);
  };

  return (
    <div id="signin" className="signin">
      <div className="signin__border" aria-hidden="true" />
      <div className="signin__card">
        <div className="signin__head">
          <div>
            <h2 className="signin__title">Sign in</h2>
            <p className="signin__sub">Welcome back to your workspace</p>
          </div>
          <div className="signin__logo">
            <img src="/assets/logo.png" alt="" />
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <label className="field">
            <span className="field__label">WORK EMAIL</span>
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              autoComplete="email"
            />
          </label>

          <label className="field">
            <div className="field__row">
              <span className="field__label">PASSWORD</span>
              <span
                className="pw-toggle"
                role="button"
                tabIndex={0}
                onClick={() => setShowPw((s) => !s)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setShowPw((s) => !s);
                  }
                }}
              >
                {showPw ? "Hide" : "Show"}
              </span>
            </div>
            <input
              className="input"
              type={showPw ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </label>

          <div className="form__meta">
            <label className="checkbox-label">
              <input type="checkbox" /> Keep me signed in
            </label>
            <a href="#signin" className="forgot">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn-submit">
            {signedIn ? "✓ Welcome back" : "Sign in"}
          </button>
        </form>

        <div className="divider">
          <div className="divider__line" />
          <span className="divider__text">OR</span>
          <div className="divider__line" />
        </div>
        <div className="signup-note">
          New to Hyperion?{" "}
          <a href="#signin">Create an account</a>
        </div>
      </div>
    </div>
  );
}

export { CTA_PRIMARY };
