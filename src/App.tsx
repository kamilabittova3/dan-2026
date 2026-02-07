import { useReducer } from 'react';
import { IntroScreen } from './components/IntroScreen';
import { ProgressBar } from './components/ProgressBar';
import { QuestionCard } from './components/QuestionCard';
import { MultipleChoiceQuestion } from './components/MultipleChoiceQuestion';
import { HeartRatingQuestion } from './components/HeartRatingQuestion';
import { YesNoQuestion } from './components/YesNoQuestion';
import { EmojiReactionQuestion } from './components/EmojiReactionQuestion';
import { NavigationButtons } from './components/NavigationButtons';
import { questions } from './data/questions';

type Step = 'intro' | 'question' | 'score' | 'letter' | 'valentine';

interface QuizState {
  step: Step;
  questionIndex: number;
  answers: string[];
}

type QuizAction =
  | { type: 'START_QUIZ' }
  | { type: 'ANSWER_QUESTION'; letterSegment: string }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREVIOUS_QUESTION' }
  | { type: 'SHOW_SCORE' }
  | { type: 'SHOW_LETTER' }
  | { type: 'SHOW_VALENTINE' };

const initialState: QuizState = {
  step: 'intro',
  questionIndex: 0,
  answers: [],
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'START_QUIZ':
      return {
        ...state,
        step: 'question',
        questionIndex: 0,
        answers: [],
      };

    case 'ANSWER_QUESTION': {
      const newAnswers = [...state.answers];
      newAnswers[state.questionIndex] = action.letterSegment;

      // Auto-advance: if not the last question, move to next
      const isLastQuestion = state.questionIndex === questions.length - 1;
      
      return {
        ...state,
        answers: newAnswers,
        questionIndex: isLastQuestion ? state.questionIndex : state.questionIndex + 1,
        step: isLastQuestion ? 'score' : 'question',
      };
    }

    case 'NEXT_QUESTION':
      if (state.questionIndex < questions.length - 1) {
        return {
          ...state,
          questionIndex: state.questionIndex + 1,
        };
      }
      return {
        ...state,
        step: 'score',
      };

    case 'PREVIOUS_QUESTION':
      if (state.questionIndex > 0) {
        return {
          ...state,
          questionIndex: state.questionIndex - 1,
        };
      }
      return state;

    case 'SHOW_SCORE':
      return {
        ...state,
        step: 'score',
      };

    case 'SHOW_LETTER':
      return {
        ...state,
        step: 'letter',
      };

    case 'SHOW_VALENTINE':
      return {
        ...state,
        step: 'valentine',
      };

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const handleStart = () => {
    dispatch({ type: 'START_QUIZ' });
  };

  const handleAnswer = (letterSegment: string) => {
    dispatch({ type: 'ANSWER_QUESTION', letterSegment });
  };

  const handleBack = () => {
    dispatch({ type: 'PREVIOUS_QUESTION' });
  };

  const currentQuestion = questions[state.questionIndex];
  const currentAnswer = state.answers[state.questionIndex] ?? null;

  // Render intro screen
  if (state.step === 'intro') {
    return <IntroScreen onStart={handleStart} />;
  }

  // Render question screen
  if (state.step === 'question' && currentQuestion) {
    return (
      <div className="min-h-screen flex flex-col">
        <ProgressBar current={state.questionIndex + 1} total={questions.length} />
        
        <QuestionCard
          designVariant={currentQuestion.designVariant}
          questionText={currentQuestion.question}
        >
          {currentQuestion.type === 'multipleChoice' && (
            <MultipleChoiceQuestion
              question={currentQuestion}
              selectedAnswer={currentAnswer}
              onAnswer={handleAnswer}
            />
          )}

          {currentQuestion.type === 'heartRating' && (
            <HeartRatingQuestion
              question={currentQuestion}
              selectedAnswer={currentAnswer}
              onAnswer={handleAnswer}
            />
          )}

          {currentQuestion.type === 'yesNo' && (
            <YesNoQuestion
              question={currentQuestion}
              selectedAnswer={currentAnswer}
              onAnswer={handleAnswer}
            />
          )}

          {currentQuestion.type === 'emojiReaction' && (
            <EmojiReactionQuestion
              question={currentQuestion}
              selectedAnswer={currentAnswer}
              onAnswer={handleAnswer}
            />
          )}

          <NavigationButtons
            onBack={handleBack}
            showBack={state.questionIndex > 0}
            showNext={false}
          />
        </QuestionCard>
      </div>
    );
  }

  // Placeholder screens for score, letter, valentine
  if (state.step === 'score') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200 px-4">
        <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center">
          <h1 className="text-4xl font-bold text-rose-900 mb-4">Score Screen</h1>
          <p className="text-lg text-rose-700 mb-8">
            You answered {state.answers.length} questions!
          </p>
          <button
            type="button"
            onClick={() => dispatch({ type: 'SHOW_LETTER' })}
            className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            View Your Letter
          </button>
        </div>
      </div>
    );
  }

  if (state.step === 'letter') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200 px-4">
        <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center">
          <h1 className="text-4xl font-bold text-rose-900 mb-4">Letter Screen</h1>
          <p className="text-lg text-rose-700 mb-8">
            Your personalized love letter will appear here.
          </p>
          <button
            type="button"
            onClick={() => dispatch({ type: 'SHOW_VALENTINE' })}
            className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  if (state.step === 'valentine') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200 px-4">
        <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center">
          <h1 className="text-4xl font-bold text-rose-900 mb-4">Valentine Screen</h1>
          <p className="text-lg text-rose-700">
            Final valentine message will appear here.
          </p>
        </div>
      </div>
    );
  }

  return null;
}
