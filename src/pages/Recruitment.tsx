import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Terminal } from 'lucide-react';
import emailjs from 'emailjs-com';

const Recruitment: React.FC = () => {
  emailjs.init("-UuevrY3L5mT5kqF8"); // Substitua com sua chave API

  const [formData, setFormData] = useState({
    codename: '',
    emai: '',
    especialization: '',
    experience: '',
    motivation: ''
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    const { codename, emai, especialization, experience, motivation } = formData;

    emailjs
      .send(
        "service_zjxsf4p", // Substitua com seu Service ID
        "template_zu4fkft", // Substitua com seu Template ID
        {
          codename,
          emai,
          especialization,
          experience,
          motivation
        }
      )
      .then(() => {
        setStatus("Mensagem enviada com sucesso!");
        setFormData({
          codename: '',
          emai: '',
          especialization: '',
          experience: '',
          motivation: ''
        });
      })
      .catch(() => setStatus("Erro ao enviar mensagem."));
  };

  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold mb-8 neon-text text-center">Junte-se ao DedSec</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20 hover:border-neon-green/40 transition-colors">
            <Shield className="w-12 h-12 text-neon-green mb-4" />
            <h3 className="text-xl font-bold mb-2">Segurança</h3>
            <p className="text-gray-400">
              Especialistas em segurança digital e proteção de dados.
            </p>
          </div>

          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20 hover:border-neon-green/40 transition-colors">
            <Code className="w-12 h-12 text-neon-green mb-4" />
            <h3 className="text-xl font-bold mb-2">Desenvolvimento</h3>
            <p className="text-gray-400">
              Desenvolvedores de ferramentas e exploits.
            </p>
          </div>

          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20 hover:border-neon-green/40 transition-colors">
            <Terminal className="w-12 h-12 text-neon-green mb-4" />
            <h3 className="text-xl font-bold mb-2">Pesquisa</h3>
            <p className="text-gray-400">
              Pesquisadores de vulnerabilidades e análise de malware.
            </p>
          </div>
        </div>

        <div className="bg-darker-bg/60 p-8 rounded-lg border border-neon-green/20">
          <h2 className="text-2xl font-bold mb-6">Formulário de Recrutamento</h2>

          <form onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Codinome</label>
              <input
                type="text"
                name="codename"
                value={formData.codename}
                onChange={handleChange}
                className="w-full bg-black/50 border border-neon-green/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-green"
                placeholder="Seu codinome"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">E-mail</label>
              <input
                type="email"
                name="emai"
                value={formData.emai}
                onChange={handleChange}
                className="w-full bg-black/50 border border-neon-green/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-green"
                placeholder="Seu e-mail"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Área de Especialização</label>
              <select
                name="especialization"
                value={formData.especialization}
                onChange={handleChange}
                className="w-full bg-black/50 border border-neon-green/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-green"
              >
                <option value="">Selecione uma área</option>
                <option value="Segurança Digital">Segurança Digital</option>
                <option value="Desenvolvimento">Desenvolvimento</option>
                <option value="Pesquisa de Vulnerabilidades">Pesquisa de Vulnerabilidades</option>
                <option value="Análise de Malware">Análise de Malware</option>
                <option value="Outra">Outra</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Experiência</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={4}
                className="w-full bg-black/50 border border-neon-green/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-green"
                placeholder="Descreva sua experiência em segurança/programação"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Motivação</label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                rows={4}
                className="w-full bg-black/50 border border-neon-green/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-green"
                placeholder="Por que você quer se juntar ao DedSec?"
              />
            </div>

            <button type="submit" className="cyber-button w-full">
              <span className="relative z-10">Enviar Candidatura</span>
            </button>
          </form>

          {status && (
            <div className="mt-4 text-center text-gray-400">{status}</div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Recruitment;