import type { Question } from '../src/types/Question';

export const questions: Question[] = [
  {
    id: 'q1',
    type: 'multipleChoice',
    question: 'What charmed you the most about me?',
    designVariant: 'gradient-rose',
    videoSrc: 'videos/Opalite Taylora.mp4',
    options: [
      {
        text: 'I don\'t know',
        letterSegment: 'SAY IT TO MY FACE!',
      },
      {
        text: 'Your stunning personality and sense of humour',
        letterSegment: 'The whole package.',
      },
      {
        text: 'Your long legs that do not end...oh here they end!',
        letterSegment: 'And they walk so fast!',
      },
      {
        text: 'Your proper Simpsons knowledge',
        letterSegment: 'Trying is the first step towards failure :)',
      },
      {
        text: 'The sole fact that you have a dog, even without actually meeting Stella at that point',
        letterSegment: 'Comes with Fido and Lalau <3',
      },
      {
        text: '3 things',
        letterSegment: 'I wish they were done properly',
      },
    ],
  },
  {
    id: 'q2',
    type: 'heartRating',
    question: 'How much do you enjoy our time together?',
    designVariant: 'hearts-pattern',
    videoSrc: 'videos/hey_stella.mp4',
    maxHearts: 5,
    options: [
      { hearts: 1, letterSegment: 'I don\'t know.' },
      { hearts: 2, letterSegment: 'STELLAAAAAAA!!!!!' },
      { hearts: 3, letterSegment: 'You\'ve quickly become my favorite person to spend time with.' },
      { hearts: 4, letterSegment: 'I catch myself smiling just thinking about our plans.' },
      { hearts: 5, letterSegment: 'Honestly? I can\'t stop thinking about when we\'ll hang out next.' },
    ],
  },
 {
    id: 'q3',
    type: 'multipleChoice',
    question: 'What are you the most excited to do together in Canada?',
    designVariant: 'gradient-rose',
    videoSrc: 'videos/la_ronde.mp4',
    options: [
      {
        text: 'Eat poutine at La Belle Province and share PTSD',
        letterSegment: 'Or pizzaghetti. Let\'s murder that Italian cuisine and share another PTSD.',
      },
      {
        text: 'Go to Cirque du Soleil',
        letterSegment: 'Their costumes feel like they are wearing nothing at all!',
      },
      {
        text: 'Go hiking!',
        letterSegment: 'Finally the real deal!',
      },
      {
        text: 'Try the lovely contradance',
        letterSegment: 'Or salsa and bachata. They look too hot to handle!',
      },
      {
        text: 'Anything that includes Stella!',
        letterSegment: 'Your presence is not required...',
      },
      {
        text: 'Go to amusement park La Ronde',
        letterSegment: 'They have bumpy cars!',
      },
    ],
  },
  {
    id: 'q4',
    type: 'emojiReaction',
    question: 'How do you feel about getting to know me more?',
    designVariant: 'pastel-dream',
    videoSrc: 'us_norway.jpg',
    options: [
      {
        emoji: '\uD83E\uDD70',
        label: 'Excited and curious',
        letterSegment: 'Getting to know you has been the best part of my week.',
      },
      {
        emoji: '\u2728',
        label: 'Can\'t wait for more... Stella...',
        letterSegment: 'Every conversation leaves me wanting to know more about you and Stella.',
      },
      {
        emoji: '\uD83C\uDF08',
        label: 'It\'s been really fun',
        letterSegment: 'You make everything more fun \u2014 I didn\'t think that was possible.',
      },
      {
        emoji: '\uD83D\uDCAB',
        label: 'Pleasantly surprised',
        letterSegment: 'You\'ve surprised me in the best way, and I\'m here for it and for Stella.',
      },
    ],
  },
  {
    id: 'q5',
    type: 'multipleChoice',
    question: 'What would my ideal date night look like?',
    designVariant: 'love-bubbles',
    videoSrc: 'videos/Frozen2.mp4',
    options: [
      {
        text: 'We would watch Frozen 2 together',
        letterSegment: 'Into the unknooooooown!',
      },
      {
        text: 'Enjoy a hot candle massage',
        letterSegment: 'Too Hot to Handle :)',
      },
      {
        text: 'I don\'t know',
        letterSegment: 'I said I don\'t know!',
      },
      {
        text: 'Washing hands properly together, followed by brushing the teeth, and wiping Stella\'s outside paws',
        letterSegment: 'Because clean hands and breath is sexy.',
      },
      {
        text: 'Visit to a closed restaurant, followed by dip in a cold jacuzzi and walk afterwards in a hurricane',
        letterSegment: 'It doesn\'t need to be good, it needs to be memorable!',
      },
    ],
  },
  {
    id: 'q6',
    type: 'heartRating',
    question: 'How excited are you for our next definitely memorable date?',
    designVariant: 'soft-crimson',
    maxHearts: 5,
    options: [
      { hearts: 1, letterSegment: 'I\'m looking forward to it, for sure.' },
      { hearts: 2, letterSegment: 'Already thinking about what we could do. With Stella.' },
      { hearts: 3, letterSegment: 'Counting down the days, not gonna lie. And Stella.' },
      { hearts: 4, letterSegment: 'I may have already started planning outfit options to impress Stella.' },
      { hearts: 5, letterSegment: 'Let\'s just say my calendar is cleared and ready. Just book the flight!' },
    ],
  },
  {
    id: 'q7',
    type: 'yesNo',
    question: 'Would you say meeting me was a happy accident?',
    designVariant: 'golden-glow',
    videoSrc: 'videos/4-tyn-tyn.mp4',
    options: [
      {
        value: 'yes',
        text: 'Best accident ever',
        letterSegment: 'Meeting you was the kind of happy accident that makes everything feel like it\'s falling into place.',
      },
      {
        value: 'no',
        text: 'I think it was meant to be',
        letterSegment: 'I don\'t believe in accidents \u2014 I think we were supposed to meet.',
      },
    ],
  },
];
