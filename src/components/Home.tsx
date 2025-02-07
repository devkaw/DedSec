import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, ShieldAlert, Code } from "lucide-react";

const Home: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "O futuro é nosso, o sistema, também.";
  const navigate = useNavigate();

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8 max-w-4xl px-4"
      >
        <div className="relative inline-block">
          <Terminal className="w-24 h-24 text-neon-green mx-auto mb-6 animate-glitch" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold neon-text tracking-tight">
          {text}
          <span className="animate-pulse">_</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Somos uma elite de hackers dedicados à segurança digital e à proteção da privacidade.
          Unidos contra a vigilância em massa e o controle corporativo.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <button className="cyber-button" onClick={() => navigate("/login")}>
            <span className="relative z-10">Acessar</span>
          </button>
          <button className="cyber-button" onClick={() => navigate("/recruitment")}>
            <span className="relative z-10">Junte-se a nós</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20 hover:border-neon-green/40 transition-colors">
            <ShieldAlert className="w-12 h-12 text-neon-green mb-4" />
            <h3 className="text-xl font-bold mb-2">Segurança Avançada</h3>
            <p className="text-gray-400">Proteção de dados e privacidade digital com as mais recentes tecnologias.</p>
          </div>
          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20 hover:border-neon-green/40 transition-colors">
            <Code className="w-12 h-12 text-neon-green mb-4" />
            <h3 className="text-xl font-bold mb-2">Hacking Ético</h3>
            <p className="text-gray-400">Identificação e correção de vulnerabilidades em sistemas críticos.</p>
          </div>
          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20 hover:border-neon-green/40 transition-colors">
            <Terminal className="w-12 h-12 text-neon-green mb-4" />
            <h3 className="text-xl font-bold mb-2">Ferramentas Exclusivas</h3>
            <p className="text-gray-400">Acesso a ferramentas e recursos desenvolvidos pela nossa equipe.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;