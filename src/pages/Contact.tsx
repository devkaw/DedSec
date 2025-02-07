import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Key, MessageSquare } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  emailjs.init("-UuevrY3L5mT5kqF8")

  const [formData, setFormData] = useState({
    codename: '',
    emai: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    emailjs.send(
      "service_zjxsf4p",
      "template_7mexqhe",
      {
        codename: formData.codename,
        emai: formData.emai,
        message: formData.message,
      }
    )
    .then(() => {
      setStatus("Mensagem enviada com sucesso!");
      setFormData({ codename: '', emai: '', message: '' });
    })
    .catch(() => setStatus("Erro ao enviar mensagem."));
  };

  return (
    <div className="py-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 neon-text text-center">Contato Seguro</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20">
            <Mail className="w-12 h-12 text-neon-green mb-4" />
            <h3 className="text-xl font-bold mb-2">Email DedSec</h3>
            <code className="block bg-black/50 p-4 rounded text-neon-green text-sm break-all">contact.cyberdedsec@gmail.com</code>
          </div>
          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20">
            <Key className="w-12 h-12 text-neon-green mb-4" />
            <h3 className="text-xl font-bold mb-2">Chave Criptografia Pública</h3>
            <code className="block bg-black/50 p-4 rounded text-neon-green text-sm break-all">tentenovamente</code>
          </div>
        </div>

        <div className="bg-darker-bg/60 p-8 rounded-lg border border-neon-green/20">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <MessageSquare className="w-6 h-6 mr-2" />
            Enviar Mensagem
          </h2>
          
          <form className="space-y-6" onSubmit={sendEmail}>
            <div>
              <label className="block text-sm font-medium mb-2">Codename</label>
              <input type="text" name="codename" value={formData.codename} onChange={handleChange} required className="w-full bg-black/50 border border-neon-green/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-green" placeholder="Seu codenome" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="text" name="emai" value={formData.emai} onChange={handleChange} required className="w-full bg-black/50 border border-neon-green/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-green" placeholder="Seu email" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mensagem Criptografada</label>
              <textarea name="message" rows={6} value={formData.message} onChange={handleChange} required className="w-full bg-black/50 border border-neon-green/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-green" placeholder="Cole sua mensagem criptografada aqui" />
            </div>
            <button type="submit" className="cyber-button w-full">
              <span className="relative z-10">Enviar Mensagem Segura</span>
            </button>
          </form>
          {status && <p className="text-center mt-4 text-neon-green">{status}</p>}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;