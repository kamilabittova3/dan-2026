import React from 'react';
import { questionVariants } from '../styles/questionVariants';

interface QuestionCardProps {
  designVariant: string;
  questionText: string;
  children: React.ReactNode;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  designVariant,
  questionText,
  children,
}) => {
  const variant = questionVariants[designVariant] ?? questionVariants['gradient-rose']!;

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ${variant.background} ${variant.pattern || ''}`}>
      <div className="max-w-3xl w-full">
        <div className={`${variant.cardBg} rounded-3xl shadow-2xl ${variant.shadowColor} p-6 sm:p-10 lg:p-12 border ${variant.borderColor}`}>
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${variant.textColor} text-center leading-tight`}>
              {questionText}
            </h2>

            <div className={`h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20 ${variant.textColor}`} />

            <div className="space-y-4 sm:space-y-5">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
