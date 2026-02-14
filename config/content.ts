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
        letterSegment: 'I\'m the whole package.',
      },
      {
        text: 'Your long legs that do not end...oh here they end!',
        letterSegment: 'And my legs walk so fast!',
      },
      {
        text: 'Your proper Simpsons knowledge',
        letterSegment: 'Trying is the first step towards failure :)',
      },
      {
        text: 'The sole fact that you have a dog, even without actually meeting Stella at that point',
        letterSegment: 'I also come with Fido and Lalau <3',
      },
      {
        text: '3 things',
        letterSegment: 'You wish those 3 things were done properly...? :)',
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
        letterSegment: 'Poutine or pizzaghetti. Let\'s murder that Italian cuisine and share another PTSD.',
      },
      {
        text: 'Go to Cirque du Soleil',
        letterSegment: 'Costumes at Cirque du Soleil feel like they are wearing nothing at all!',
      },
      {
        text: 'Go hiking!',
        letterSegment: 'Finally the real deal, hiking!',
      },
      {
        text: 'Try the lovely contradance',
        letterSegment: 'Contradance, salsa or bachata. They all look too hot to handle!',
      },
      {
        text: 'Anything that includes Stella!',
        letterSegment: 'Stella is the important one. My presence is not required...',
      },
      {
        text: 'Go to amusement park La Ronde',
        letterSegment: 'They have bumpy cars at La Ronde!',
      },
    ],
  },
  {
    id: 'q4',
    type: 'emojiReaction',
    question: 'How do you feel about getting to know me more?',
    designVariant: 'pastel-dream',
    options: [
      {
        emoji: '\uD83E\uDD70',
        label: 'Excited and curious',
        letterSegment: 'Getting to know you has been the best part of my week.',
      },
      {
        emoji: '\u2728',
        label: 'Can\'t wait for more... Stella...',
        letterSegment: 'Every conversation leaves me wanting to know more about you and ask you if you washed your hands?',
      },
      {
        emoji: '\uD83C\uDF08',
        label: 'It\'s been really fun',
        letterSegment: 'You make everything more fun \u2014 I didn\'t think that was possible.',
      },
      {
        emoji: '\uD83D\uDCAB',
        label: 'Pleasantly surprised',
        letterSegment: 'You\'ve surprised me, and I\'m here for it.',
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
        letterSegment: 'Too Hot to Handle Candle Massage :)',
      },
      {
        text: 'I don\'t know',
        letterSegment: 'You said you don\'t know!',
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
      { hearts: 3, letterSegment: 'Counting down the days, not gonna lie.' },
      { hearts: 4, letterSegment: 'I may have already started planning spring outfit options with my only winter collection.' },
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
