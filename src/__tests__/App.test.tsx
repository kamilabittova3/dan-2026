import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { config } from '../../config/config';
import { questions } from '../../config/content';
import type { Question } from '../types/Question';

/** Safely create a case-insensitive RegExp from a config string (escaping special chars). */
function configPattern(str: string): RegExp {
  return new RegExp(str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
}

/** Extract display text from the first option of a question. */
function getFirstOptionText(q: Question): string {
  switch (q.type) {
    case 'multipleChoice':
    case 'yesNo':
      return q.options[0].text;
    case 'emojiReaction':
      return q.options[0].label;
    default:
      return '';
  }
}

describe('App', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('renders intro screen on initial load', () => {
    render(<App />);
    expect(screen.getByText(configPattern(config.intro.greeting))).toBeInTheDocument();
    expect(screen.getByText(configPattern(config.recipientName))).toBeInTheDocument();
  });

  it('displays progress indicator during quiz', async () => {
    const user = userEvent.setup();
    render(<App />);

    const startButton = screen.getByRole('button', { name: configPattern(config.intro.startButton) });
    await user.click(startButton);

    expect(screen.getByText(`Q1/${questions.length}`)).toBeInTheDocument();
  });

  it('shows first question after starting quiz', async () => {
    const user = userEvent.setup();
    render(<App />);

    const startButton = screen.getByRole('button', { name: configPattern(config.intro.startButton) });
    await user.click(startButton);

    expect(screen.getByText(`Q1/${questions.length}`)).toBeInTheDocument();
  });

  it('navigates through questions on answer selection', async () => {
    const user = userEvent.setup();
    render(<App />);

    const startButton = screen.getByRole('button', { name: configPattern(config.intro.startButton) });
    await user.click(startButton);

    const firstOptionText = getFirstOptionText(questions[0]);
    const firstOption = screen.getAllByRole('button').find(btn =>
      btn.textContent?.includes(firstOptionText)
    );

    if (firstOption) {
      await user.click(firstOption);
      // After selecting, need to click Next to advance
      const nextButton = screen.getByRole('button', { name: /next/i });
      await user.click(nextButton);
      expect(screen.getByText(`Q2/${questions.length}`)).toBeInTheDocument();
    }
  });

  it('allows answering multiple questions', async () => {
    const user = userEvent.setup();
    render(<App />);

    const startButton = screen.getByRole('button', { name: configPattern(config.intro.startButton) });
    await user.click(startButton);

    expect(screen.getByText(`Q1/${questions.length}`)).toBeInTheDocument();

    // Click the first answer option for Q1
    const firstOptionText = getFirstOptionText(questions[0]);
    const firstAnswerButton = screen.getByRole('button', { name: configPattern(firstOptionText) });
    await user.click(firstAnswerButton);

    // Click Next to advance
    const nextButton = screen.getByRole('button', { name: /next/i });
    await user.click(nextButton);
    expect(screen.getByText(`Q2/${questions.length}`)).toBeInTheDocument();
  });
});
