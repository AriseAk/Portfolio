
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Used for X/Twitter icon

const contactLinks = [
  {
    icon: <FaGithub size={24} className="text-gray-700" />,
    label: 'GitHub',
    username: 'cryskram',
    href: 'https://github.com/cryskram',
  },
  {
    icon: <FaLinkedin size={24} className="text-blue-600" />,
    label: 'LinkedIn',
    username: 'vageeshgn',
    href: 'https://linkedin.com/in/vageeshgn',
  },
  {
    icon: <FaInstagram size={24} className="text-pink-600" />,
    label: 'Instagram',
    username: 'vageesh404',
    href: 'https://instagram.com/vageesh404',
  },
  {
    icon: <FaXTwitter size={24} className="text-gray-800" />,
    label: 'X / Twitter',
    username: 'gn_vageesh',
    href: 'https://twitter.com/gn_vageesh',
  },
  {
    icon: <FaEnvelope size={24} className="text-red-500" />,
    label: 'Email',
    username: 'vageeshgn2005@gmail.com',
    href: 'mailto:vageeshgn2005@gmail.com',
    fullWidth: true, // Marker for single-column layout
  },
];

const ContactCard = () => {
  return (

    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl max-w-xl w-full mx-auto my-10 border border-gray-100">

      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Let's Connect</h2>
        <p className="text-gray-600 text-sm md:text-base px-2">
          Whether it's a collaboration, opportunity, or just a friendly chat - my inbox is open!
        </p>
      </div>


      <div className="grid grid-cols-2 gap-4">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
           
            className={`
              flex flex-col p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-150
              ${link.fullWidth ? 'col-span-2' : 'col-span-2 md:col-span-1'}
            `}
          >
            <div className="flex items-center mb-1">
              {link.icon}
              <span className="ml-3 text-lg font-semibold text-gray-700">{link.label}</span>
            </div>
            <p className="text-sm text-gray-500 pl-9 break-all">{link.username}</p>
          </a>
        ))}
      </div>

      <p className="text-center text-xs text-gray-400 mt-8">
        No spam, no bots - just genuine connections
      </p>
    </div>
  );
};

export default ContactCard;