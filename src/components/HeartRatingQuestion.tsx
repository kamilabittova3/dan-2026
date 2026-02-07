import React from 'react';
import type { HeartRatingQuestion as HeartRatingQuestionType } from '../types/Question';

interface HeartRatingQuestionProps {
  question: HeartRatingQuestionType;
  selectedAnswer: string | null;
  onAnswer: (letterSegment: string) => void;
}

export const HeartRatingQuestion: React.FC<HeartRatingQuestionProps> = ({
  question,
  selectedAnswer,
  onAnswer,
}) => {
  const getOptionForHearts = (hearts: number) => {
    return question.options.find(opt => opt.hearts === hearts);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
        {Array.from({ length: question.maxHearts }, (_, i) => i + 1).map((hearts) => {
          const option = getOptionForHearts(hearts);
          const isSelected = option && selectedAnswer === option.letterSegment;
          
          return (
            <button
              key={hearts}
              type="button"
              onClick={() => option && onAnswer(option.letterSegment)}
              className={`group relative transition-all duration-300 ${
                isSelected ? 'scale-110' : 'hover:scale-105'
              }`}
              aria-label={`Rate ${hearts} out of ${question.maxHearts} hearts`}
            >
              <svg
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-all duration-300 ${
                  isSelected
                    ? 'fill-rose-500 stroke-rose-600 drop-shadow-lg'
                    : 'fill-gray-200 stroke-gray-300 group-hover:fill-rose-300 group-hover:stroke-rose-400'
                }`}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              
              {isSelected && (
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs sm:text-sm font-semibold text-rose-600">
                    {hearts} {hearts === 1 ? 'heart' : 'hearts'}
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="text-center space-y-2">
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 px-4">
          <span>Less</span>
          <span>More</span>
        </div>
        {selectedAnswer && (
          <p className="text-sm sm:text-base text-gray-700 font-medium animate-fade-in">
            Your heart speaks volumes
          </p>
        )}
      </div>
    </div>
  );
};
