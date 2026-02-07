import React from 'react';
import type { EmojiReactionQuestion as EmojiReactionQuestionType } from '../types/Question';

interface EmojiReactionQuestionProps {
  question: EmojiReactionQuestionType;
  selectedAnswer: string | null;
  onAnswer: (letterSegment: string) => void;
}

export const EmojiReactionQuestion: React.FC<EmojiReactionQuestionProps> = ({
  question,
  selectedAnswer,
  onAnswer,
}) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.letterSegment;
          
          return (
            <button
              key={option.letterSegment}
              type="button"
              onClick={() => onAnswer(option.letterSegment)}
              className={`group relative px-4 py-6 sm:px-5 sm:py-8 rounded-2xl border-2 transition-all duration-300 ${
                isSelected
                  ? 'border-rose-500 bg-rose-50 shadow-lg shadow-rose-200/50 scale-105'
                  : 'border-gray-200 bg-white hover:border-rose-300 hover:bg-rose-50/50 hover:scale-102 hover:shadow-md'
              }`}
            >
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <span className={`text-4xl sm:text-5xl transition-transform duration-300 ${
                  isSelected ? 'scale-110' : 'group-hover:scale-105'
                }`}>
                  {option.emoji}
                </span>
                
                <span className={`text-xs sm:text-sm font-medium text-center transition-colors duration-300 ${
                  isSelected ? 'text-rose-900' : 'text-gray-700 group-hover:text-rose-800'
                }`}>
                  {option.label}
                </span>
              </div>

              {isSelected && (
                <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 bg-rose-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {selectedAnswer && (
        <p className="text-center text-sm sm:text-base text-gray-600 animate-fade-in">
          Perfect choice—your emotions shine through
        </p>
      )}
    </div>
  );
};
