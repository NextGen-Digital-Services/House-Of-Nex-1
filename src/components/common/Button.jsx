import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'gold'
  size = 'md', // 'sm' | 'md' | 'lg'
  type = 'button',
  fullWidth = false,
  disabled = false,
  className = '',
  icon: Icon
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer tracking-wide';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs uppercase',
    md: 'px-6 py-3 text-sm uppercase tracking-wider',
    lg: 'px-8 py-4 text-base uppercase tracking-widest'
  };

  const variantStyles = {
    primary: 'bg-terracotta text-ivory hover:bg-terracotta-hover focus:ring-terracotta border border-transparent shadow-sm',
    secondary: 'bg-espresso text-ivory hover:bg-warmcharcoal focus:ring-espresso border border-transparent',
    outline: 'bg-transparent text-espresso border-2 border-espresso hover:bg-espresso hover:text-ivory focus:ring-espresso',
    gold: 'bg-gold text-espresso hover:bg-gold-hover focus:ring-gold border border-transparent font-semibold',
    whatsapp: 'bg-olive text-ivory hover:bg-olive-hover focus:ring-olive border border-transparent font-medium shadow-sm'
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${disabledStyle} ${className}`}
    >
      {Icon && <Icon className="w-4 h-4 mr-2.5 shrink-0" />}
      <span>{children}</span>
    </motion.button>
  );
}
