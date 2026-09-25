import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { REGISTRATION_URL } from '@/data/constants';

interface RegisterButtonProps {
  label: string;
  size?: 'md' | 'lg' | 'xl';
  variant?: 'solid' | 'outline' | 'white';
  showArrow?: boolean;
  className?: string;
}

export function RegisterButton({
  label,
  size = 'md',
  variant = 'solid',
  showArrow = true,
  className = '',
}: RegisterButtonProps) {
  const sizes = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  };

  const baseClasses = `group inline-flex items-center justify-center gap-2 font-display font-600 tracking-wide rounded-xl transition-all duration-300 ${sizes[size]} ${className}`;

  if (variant === 'white') {
    return (
      <motion.a
        href={REGISTRATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseClasses} bg-apl-white text-apl-saffron-dark shadow-lg hover:shadow-xl`}
      >
        {label}
        {showArrow && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
      </motion.a>
    );
  }

  if (variant === 'outline') {
    return (
      <motion.a
        href={REGISTRATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseClasses} border-2 border-apl-saffron text-apl-saffron-dark hover:bg-apl-saffron hover:text-apl-white`}
      >
        {label}
        {showArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </motion.a>
    );
  }

  return (
    <motion.a
      href={REGISTRATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} gradient-saffron-bright text-apl-white glow-orange hover:glow-orange-strong relative overflow-hidden`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      <span className="relative flex items-center gap-2">
        {label}
        {showArrow && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
        <ExternalLink className="w-3.5 h-3.5 opacity-50" />
      </span>
    </motion.a>
  );
}
