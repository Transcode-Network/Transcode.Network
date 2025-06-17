import { Github, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 sm:px-8 lg:px-12 border-t border-[#2a3441] bg-[#0a0a0f] relative">
      <div className="max-w-5xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#5BCEFA] via-[#F5A9B8] to-[#FFFFFF] bg-clip-text text-transparent">Stay Connected</h3>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Join our email list for updates on new tools, community events, and ways to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="w-full sm:flex-1 px-6 py-4 bg-[#1a1a2e] border border-[#2a3441] rounded-xl focus:outline-none focus:border-[#5BCEFA] text-white text-lg placeholder-gray-400"
            />
            <button className="w-full sm:w-auto bg-gradient-to-r from-[#5BCEFA] to-[#F5A9B8] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-[#5BCEFA]/25 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-8 mb-12">
          <a href="#" className="text-gray-400 hover:text-[#5BCEFA] transition-colors p-3 rounded-xl hover:bg-[#5BCEFA]/10 flex items-center justify-center">
            <Github className="w-8 h-8" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#5BCEFA] transition-colors p-3 rounded-xl hover:bg-[#5BCEFA]/10 flex items-center justify-center">
            <Mail className="w-8 h-8" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#5BCEFA] transition-colors p-3 rounded-xl hover:bg-[#5BCEFA]/10 flex items-center justify-center">
            <MessageCircle className="w-8 h-8" />
          </a>
        </div>
        
        <div className="text-center">
          <p className="text-2xl font-bold bg-gradient-to-r from-[#5BCEFA] via-[#F5A9B8] to-[#FFFFFF] bg-clip-text text-transparent">
            Built with love, rage, and open source.
          </p>
        </div>
      </div>
    </footer>
  );
} 