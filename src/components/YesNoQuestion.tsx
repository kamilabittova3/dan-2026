import React from 'react';
import type { YesNoQuestion as YesNoQuestionType } from '../types/Question';

interface YesNoQuestionProps {
  question: YesNoQuestionType;
  selectedAnswer: string | null;
  onAnswer: (letterSegment: string) => void;
}

export const YesNoQuestion: React.FC<YesNoQuestionProps> = ({
  question,
  selectedAnswer,
  onAnswer,
}) => {
  const yesOption = question.options.find(opt => opt.value === 'yes');
  const noOption = question.options.find(opt => opt.value === 'no');

  if (!yesOption || !noOption) {
    return null;
  }

  const isYesSelected = selectedAnswer === yesOption.letterSegment;
  const isNoSelected = selectedAnswer === noOption.letterSegment;

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        <button
          type="button"
          onClick={() => onAnswer(noOption.letterSegment)}
          className={`flex-1 max-w-xs px-6 sm:px-8 py-5 sm:py-6 rounded-2xl border-2 transition-all duration-300 ${
            isNoSelected
              ? 'border-gray-400 bg-gray-100 shadow-lg'
              : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
          }`}
        >
          <div className="text-center space-y-2">
            <div className={`text-3xl sm:text-4xl ${isNoSelected ? 'scale-110' : ''} transition-transform duration-300`}>
              👎
            </div>
            <span className={`block text-lg sm:text-xl font-semibold ${
              isNoSelected ? 'text-gray-900' : 'text-gray-700'
            }`}>
              {noOption.text}
            </span>
          </div>
        </button>

        <div className="relative">
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 transition-all duration-500 ${
            isYesSelected
              ? 'border-rose-500 bg-rose-50'
              : isNoSelected
              ? 'border-gray-400 bg-gray-50'
              : 'border-gray-300 bg-white'
          }`}>
            <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
              isYesSelected
                ? 'translate-x-0'
                : isNoSelected
                ? '-translate-x-0'
                : 'translate-x-0'
            }`}>
              <div className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-500 ${
                isYesSelected
                  ? 'bg-rose-500 scale-90'
                  : isNoSelected
                  ? 'bg-gray-400 scale-90'
                  : 'bg-gray-300 scale-75'
              }`}>
                <span className="text-white text-xl sm:text-2xl font-bold">
                  {isYesSelected ? '✓' : isNoSelected ? '✗' : '?'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onAnswer(yesOption.letterSegment)}
          className={`flex-1 max-w-xs px-6 sm:px-8 py-5 sm:py-6 rounded-2xl border-2 transition-all duration-300 ${
            isYesSelected
              ? 'border-rose-500 bg-rose-50 shadow-lg shadow-rose-200/50'
              : 'border-gray-200 bg-white hover:border-rose-300 hover:bg-rose-50/50'
          }`}
        >
          <div className="text-center space-y-2">
            <div className={`text-3xl sm:text-4xl ${isYesSelected ? 'scale-110' : ''} transition-transform duration-300`}>
              👍
            </div>
            <span className={`block text-lg sm:text-xl font-semibold ${
              isYesSelected ? 'text-rose-900' : 'text-gray-700'
            }`}>
              {yesOption.text}
            </span>
          </div>
        </button>
      </div>

      {selectedAnswer && (
        <p className="text-center text-sm sm:text-base text-gray-600 animate-fade-in">
          Your choice reveals your heart
        </p>
      )}
    </div>
  );
};
