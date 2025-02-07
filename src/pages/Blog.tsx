import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: 'Instant Phishing',
      excerpt: 'Clona qualquer site e recebe os dados instantaneamente',
      date: '2025-02-07',
      author: 'Devkaw',
      category: 'Phishing'
    },
    {
      title: 'PhantomNet',
      excerpt: 'Uma plataforma de ataques distribuídos que permite invadir sistemas de comunicação por meio de uma rede fantasma de dispositivos comprometidos, tornando os rastros indetectáveis.',
      date: '2025-02-07',
      author: 'Devkaw',
      category: 'Botnets e DDoS'
    },
    {
      title: 'Crypt0n',
      excerpt: 'Ferramenta de descriptografia que permite quebrar algoritmos de criptografia avançados utilizando um sistema quântico de força bruta.',
      date: '2025-02-07',
      author: 'Rafdev',
      category: 'Descriptografia e Cracking de Senhas'
    }
  ];

  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold mb-8 neon-text">Blog</h1>
        
        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-darker-bg/60 p-6 rounded-lg border border-neon-green/20 hover:border-neon-green/40 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                <span className="px-3 py-1 rounded-full bg-neon-green/10 text-neon-green">
                  {post.category}
                </span>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {post.author}
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-3 text-white hover:text-neon-green transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-400 mb-4">
                {post.excerpt}
              </p>
              
              <button className="flex items-center text-neon-green hover:text-white transition-colors">
                Download
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;