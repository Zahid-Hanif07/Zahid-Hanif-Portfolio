import React from 'react';
import { socialLinks } from '../data/portfolioData';

const WhatsAppButton = () => {
  return (
    <a
      href={socialLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 md:p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-110 active:scale-95"
    >
      {/* Tooltip / Badge */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-bold font-sans tracking-wide pl-0 group-hover:pl-2 opacity-0 group-hover:opacity-100">
        Chat on WhatsApp
      </span>

      {/* WhatsApp SVG Icon */}
      <svg
        className="w-6 h-6 md:w-7 md:h-7 fill-current shrink-0"
        viewBox="0 0 24 24"
      >
        <path d="M12.031 0C5.396 0 .02 5.376.02 12.012c0 2.12.553 4.19 1.603 6.01L0 24l6.147-1.611a11.968 11.968 0 005.884 1.533h.005c6.634 0 12.01-5.376 12.01-12.012A11.94 11.94 0 0012.031 0zm.005 21.921h-.004a9.934 9.934 0 01-5.063-1.385l-.363-.215-3.762.987 1.004-3.667-.236-.376a9.923 9.923 0 01-1.523-5.234c0-5.485 4.463-9.948 9.95-9.948 2.658 0 5.156 1.036 7.034 2.914A9.877 9.877 0 0121.97 12.01c0 5.487-4.463 9.911-9.934 9.911zm5.449-7.444c-.299-.149-1.768-.873-2.042-.973-.274-.099-.474-.149-.673.149-.199.299-.772.973-.946 1.172-.174.199-.348.224-.647.075-.299-.149-1.263-.465-2.406-1.485-.889-.793-1.49-1.773-1.664-2.072-.174-.299-.019-.461.13-.61.134-.133.299-.348.448-.523.149-.174.199-.299.299-.498.099-.199.05-.373-.025-.523-.075-.149-.673-1.62-.921-2.217-.242-.582-.488-.503-.673-.512l-.573-.01c-.199 0-.523.075-.797.373-.274.299-1.046 1.021-1.046 2.492 0 1.47 1.071 2.889 1.22 3.088.149.199 2.11 3.223 5.111 4.52.714.309 1.272.493 1.707.631.717.228 1.37.196 1.886.119.576-.086 1.768-.722 2.017-1.42.249-.697.249-1.295.174-1.42-.075-.124-.274-.199-.573-.348z" />
      </svg>

      {/* Ping indicator badge */}
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-400 border-2 border-white"></span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
