// Placeholder interfaces for the project

export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}