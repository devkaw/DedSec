import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, Shield, Eye, EyeOff } from 'lucide-react';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);

    // Simulate authentication delay
    setTimeout(() => {
      const email = (e.target as any).email.value;
      const password = (e.target as any).password.value;

      // Check if email and password are correct
      if ((email === "kaduoxz@gmail.com" && password === "kwjr15052025") || (email === "joserafaelps15.oficial@gmail.com" && password === "kwjr15052025") || (email === "gabypc.frozen@gmail.com" && password === "1234asdf") ) {
        localStorage.setItem("logged", "true");
        setIsAuthenticating(false);
        window.location.href = "/dashboard"; // Redirect to dashboard or home page
      } else {
        setErrorMessage("Email ou senha incorretos.");
        setIsAuthenticating(false);
      }
    }, 2000);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-darker-bg/60 p-8 rounded-lg border border-neon-green/20">
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 text-neon-green mx-auto mb-4" />
            <h1 className="text-3xl font-bold neon-text">Acesso Seguro</h1>
            <p className="text-gray-400 mt-2">Autentique-se para acessar a área restrita</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Identificador</label>
              <input
                type="email"
                name="email"
                className="w-full bg-black/50 border border-neon-green/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-green"
                placeholder="Seu identificador único"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full bg-black/50 border border-neon-green/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-green pr-10"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-neon-green"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm text-center">{errorMessage}</div>
            )}

            <button
              type="submit"
              className="cyber-button w-full relative"
              disabled={isAuthenticating}
            >
              <span className="relative z-10 flex items-center justify-center">
                {isAuthenticating ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <LogIn className="w-5 h-5 mr-2" />
                    Acessar Sistema
                  </>
                )}
              </span>
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Não tem acesso?{' '}
            <a href="/recruitment" className="text-neon-green hover:text-white transition-colors">
              Candidate-se
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
