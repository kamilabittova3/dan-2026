/**
 * Valentine Quiz -- White-Label Configuration
 * =============================================
 *
 * Edit this file to customise every piece of user-facing text in the quiz.
 * No other source files need to be changed.
 *
 * Sections:
 *   names        - Recipient and sender names used across all screens
 *   pageTitle    - The browser tab / window title
 *   intro        - Welcome screen text and button labels
 *   scoreReveal  - The "100 % match" results screen
 *   loveLetter   - The personalised love letter screen
 *   valentine    - The "Will you be my Valentine?" prompt screen
 *   footer       - Small text at the bottom of every page
 *
 * Theme colours are controlled by Tailwind classes in the components and
 * by src/styles/questionVariants.ts -- edit those if you want different
 * colour palettes.
 */
export const config = {
  // ─── Names ──────────────────────────────────────────────────────────
  /** The recipient's name (the person taking the quiz) */
  recipientName: 'Dan',

  /** The sender's name (the person who created the quiz) */
  senderName: 'Kamilla',

  // ─── Page title ─────────────────────────────────────────────────────
  /** Shown in the browser tab */
  pageTitle: "It's Valentine!",

    // ─── Intro screen ──────────────────────────────────────────────────
  intro: {
    /** Greeting line above the recipient's name */
    greeting: "Happy Valentine's Day",
    /** Main message paragraph */
    message: "I prepared this little moment for us. Hope you prepared something as well.",
    /** Instruction text below the message */
    instruction: "Answer these 7 questions for me :3",
    /** Text on the start button (emoji is appended automatically) */
    startButton: "FIX YOUR POSTURE & Let's Go!",
    /** Small note below the button */
    timeEstimate: "Takes about 2 minutes",
  },

  // ─── Score reveal screen ───────────────────────────────────────────
  scoreReveal: {
    /** Heading after the animated percentage */
    title: "Perfect Match!",
    /** Body text explaining the score */
    message: "A Perfect Match. My heart knew it all along, but seeing your answers makes it sing. I wish you knew my correct name as well.",
    /** Label on the continue button (emoji appended automatically) */
    continueButton: "See Your Letter",
  },

  // ─── Love letter screen ────────────────────────────────────────────
  loveLetter: {
    /** Section heading */
    heading: 'A Letter For You',
    /** Closing line before signature */
    closing: 'With a smile,',
    /** Signature prefix -- the senderName is appended automatically */
    signaturePrefix: 'Yours,',
    /** Label on the continue button (emoji appended automatically) */
    continueButton: 'One More Thing...',
  },

  // ─── Valentine prompt screen ───────────────────────────────────────
  valentine: {
    /** The big question */
    question: 'Will you be my Valentine?',
    /** Subtitle under the question */
    subtitle: "You know there's only one right answer...",
    /** Label on the Yes button (emoji appended automatically) */
    yesButton: 'Yes!',
    /** Label on the No button */
    noButton: 'No',
    /** Hint text at the bottom */
    hintText: '(Try clicking "No" if you dare...)',
    /** Witty messages shown when the No button is clicked */
    noClickMessages: [
      'What did you say? SAY IT TO MY FACE!!!!!',
      'What did you say? SAY IT TO MY FACE!!!!!',
      'Are you sure? Think again!',
      'What did you say? SAY IT TO MY FACE!!!!!',
      "That button doesn't work here!",
      'What did you say? SAY IT TO MY FACE!!!!!'
    ],
  },

  // ─── Footer ────────────────────────────────────────────────────────
  footer: {
    /** Footer text template. {sender} and {recipient} are replaced automatically. */
    text: 'Made with love by {sender} for {recipient}',
  },
};
