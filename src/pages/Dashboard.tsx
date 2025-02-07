import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Shield, Terminal, Users } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h1 className="text-3xl font-bold mb-8 neon-text">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Membros DedSec</h3>
              <Users className="w-5 h-5 text-neon-green" />
            </div>
            <p className="text-2xl font-bold text-neon-green">2</p>
          </div>
          
          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Missões Ativas</h3>
              <Activity className="w-5 h-5 text-neon-green" />
            </div>
            <p className="text-2xl font-bold text-neon-green">0</p>
          </div>
          
          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Vulnerabilidades</h3>
              <Shield className="w-5 h-5 text-neon-green" />
            </div>
            <p className="text-2xl font-bold text-neon-green">0</p>
          </div>
          
          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Scripts Disponíveis</h3>
              <Terminal className="w-5 h-5 text-neon-green" />
            </div>
            <p className="text-2xl font-bold text-neon-green">0</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20">
            <h2 className="text-xl font-bold mb-4">Atividades Recentes</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5">
                <div className="w-2 h-2 mt-2 rounded-full bg-neon-green"></div>
                <div>
                  <p className="text-sm text-gray-300">Agora</p>
                  <p className="text-white">Nenhuma vulnerabilidade detectada em sistema corporativo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20">
            <h2 className="text-xl font-bold mb-4">Logs do Sistema</h2>
            <div className="font-mono text-sm space-y-2">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="text-gray-400">
                  <span className="text-neon-green">[{new Date().toISOString()}]</span> {' '}
                  System check completed. Status: operational
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;