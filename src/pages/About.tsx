import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const timeline = [
    {
      year: '2025',
      title: 'Origem',
      description: 'Dado sonho de dois adolescentes em estudar cybersecurity, ocorre a fundação do grupo com foco em segurança digital e privacidade.',
    }
  ];

  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 neon-text text-center">Sobre o DedSec</h1>
        
        <div className="mb-16 text-gray-300 space-y-6">
          <p className="text-lg">
            Somos um grupo de elite dedicado à segurança digital e à proteção da privacidade.
            Nossa missão é expor vulnerabilidades, proteger dados e lutar contra a vigilância em massa.
          </p>
          <p className="text-lg">
            Operamos nas sombras, mas nosso impacto é visível. Cada linha de código que escrevemos,
            cada sistema que protegemos, contribui para um futuro digital mais seguro e livre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20">
            <Shield className="w-12 h-12 text-neon-green mb-4" />
            <h3 className="text-xl font-bold mb-2">Nossa Missão</h3>
            <p className="text-gray-400">
              Proteger a privacidade digital e expor ameaças à segurança cibernética.
            </p>
          </div>
          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20">
            <Target className="w-12 h-12 text-neon-green mb-4" />
            <h3 className="text-xl font-bold mb-2">Objetivos</h3>
            <p className="text-gray-400">
              Desenvolver ferramentas de segurança e educar sobre ameaças digitais.
            </p>
          </div>
          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20">
            <Users className="w-12 h-12 text-neon-green mb-4" />
            <h3 className="text-xl font-bold mb-2">Nossa Equipe</h3>
            <p className="text-gray-400">
              Especialistas em segurança, desenvolvedores e pesquisadores.
            </p>
          </div>
          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20">
            <Trophy className="w-12 h-12 text-neon-green mb-4" />
            <h3 className="text-xl font-bold mb-2">Conquistas</h3>
            <p className="text-gray-400">
              Descoberta de vulnerabilidades críticas e proteção de sistemas.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 neon-text text-center">Nossa História</h2>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start space-x-4"
            >
              <div className="w-24 flex-shrink-0">
                <span className="text-neon-green font-bold">{item.year}</span>
              </div>
              <div className="flex-1 pb-8 border-l-2 border-neon-green/20 pl-8 relative">
                <div className="absolute w-3 h-3 bg-neon-green rounded-full -left-[7px] top-2" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;