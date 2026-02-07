import React from 'react';

interface IntroScreenProps {
  onStart: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-rose-200/50 p-8 sm:p-12 lg:p-16 border border-rose-300">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rose-900 tracking-tight">
                Happy Valentine's Day
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-rose-700">
                Tanya
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

            <div className="space-y-4 sm:space-y-5">
              <p className="text-lg sm:text-xl text-rose-800 leading-relaxed">
                I've created something special for you—a journey through our love story.
              </p>
              <p className="text-base sm:text-lg text-rose-700 leading-relaxed">
                Answer 7 questions, and I'll write you a personalized love letter that captures what makes us extraordinary.
              </p>
            </div>

            <button
              type="button"
              onClick={onStart}
              className="mt-8 sm:mt-10 px-8 sm:px-12 py-4 sm:py-5 bg-rose-500 hover:bg-rose-600 text-white text-lg sm:text-xl font-semibold rounded-full shadow-lg shadow-rose-300/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-rose-400/50 active:scale-95"
            >
              Begin Our Journey
            </button>

            <p className="text-sm sm:text-base text-rose-600 mt-6 sm:mt-8">
              Takes about 2 minutes • Made with love just for you
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-rose-700/70">
            Every answer you choose will become part of your unique love letter
          </p>
        </div>
      </div>
    </div>
  );
};
