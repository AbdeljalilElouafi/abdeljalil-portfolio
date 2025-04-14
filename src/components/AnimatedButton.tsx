
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  variant = 'default',
  children,
  icon,
  href,
  className,
  ...props
}) => {
  const baseClasses = cn(
    'relative overflow-hidden group transition-all duration-300',
    'hover:shadow-md active:translate-y-0.5',
    className
  );

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:transform group-hover:translate-x-1">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-full bg-gradient-to-r from-purple/80 to-blue-light/80 -z-10 transition-all duration-300 group-hover:w-full"></span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        <Button variant={variant} className={baseClasses} {...props}>
          {buttonContent}
        </Button>
      </a>
    );
  }

  return (
    <Button variant={variant} className={baseClasses} {...props}>
      {buttonContent}
    </Button>
  );
};

export default AnimatedButton;
