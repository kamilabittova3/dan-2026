# Draft: Valentine 2026 Site

## Requirements (confirmed)

- **Language**: English
- **Completion flow**: Score reveal → Love letter → Celebration animation (all of the above)
- **Data handling**: Save answers via EmailJS (no backend needed)
- **Deployment**: GitHub Pages → send link to wife
- **Design**: Google Forms style but pink/cute/romantic
- **Tech stack**: Bun, TypeScript, React, Tailwind CSS

### Question Presentation

- **Flow**: One question at a time (stepped), Google Forms style
- **Navigation**: Next/Back buttons with progress bar (on answer -> go to next question, can go back to change answers)
- **Question count**: 5-7 questions (quick and sweet)
- **Question types used**: Multiple choice, Heart rating (1-5), Yes/No toggle, Emoji reaction
- **Question types NOT used**: No free text input
- **Visual variety**: EACH question appears on its own page with unique cute design variations
  - Different button styles per question (rounded, pill-shaped, with borders, etc.)
  - Slightly different background colors/gradients (all pink/romantic themed)
  - Varied spacing, card styles, or decorative elements per question
  - Goal: Keep it fresh and playful, not repetitive

### Completion Flow (after last question)

1. **Score reveal**: Fun compatibility/love score (always high/positive)
2. **Dynamic love letter**: Different sweet messages based on her answers
3. **Celebration animation**: Hearts/confetti explosion
4. **"Will you be my Valentine?" prompt**: Final screen with Yes/No buttons
  - **"No" button is a RUNAWAY BUTTON** — escapes when pointer/finger gets near it
  - On desktop: moves away on `mouseenter`/`mousemove` proximity
  - On mobile: moves away on `touchstart` / finger proximity
  - Should be funny/playful — button dodges around the screen
  - The only clickable option is "Yes"
  - On "Yes" click: trigger extra-big celebration (hearts/confetti explosion #2)

### Answer Delivery

- **Method**: EmailJS (client-side email service, no backend)
- **What's sent**: All answers + which options she picked
- **Sent to**: User's email

## Technical Decisions

- **Deployment target**: GitHub Pages (static site, SPA)
- **Answer storage**: EmailJS (free tier: 200 emails/month — more than enough)
- **No backend needed**: Fully static site, EmailJS handles email from client
- **Build tool**: Vite (standard for React + TypeScript + Bun)

## Research Findings

- (pending — need to research EmailJS setup, animation libraries)

## Open Questions (all resolved)

- ~~What notification method?~~ → EmailJS ✅
- ~~Question types?~~ → Multiple choice, heart rating, yes/no, emoji ✅
- ~~How many questions?~~ → 5-7 ✅
- ~~Stepped or scrollable?~~ → Stepped ✅
- ~~Love letter?~~ → Dynamic based on answers ✅
- ~~Specific questions?~~ → Design them (agent will suggest) ✅
- ~~Mobile or desktop?~~ → Both equally (responsive) ✅
- ~~Score always positive?~~ → Always high (90-100%) ✅
- ~~Personalization?~~ → Yes, use wife's name ✅
- ~~Animation library?~~ → TBD in plan (Framer Motion recommended)

## Personalization

- **Wife's name**: Will be used in greeting/title (need user to provide the actual name)
- **Score**: Always 100%

## Responsive Design

- **Target**: Both mobile and desktop equally
- **Approach**: Mobile-first CSS with desktop breakpoints

## Question Content

- Agent will design 5-7 romantic questions using the confirmed question types
- Mix of: multiple choice, heart rating, yes/no toggle, emoji reaction

## Scope Boundaries

- INCLUDE: Single-page Valentine quiz, pink/romantic design, stepped question flow with progress bar, 5-7 designed
  romantic questions (multiple choice, heart rating, yes/no, emoji), score reveal (90-100%), dynamic love letter based
  on answers, hearts/confetti celebration, **"Will you be my Valentine?" final screen with runaway "No" button**,
  EmailJS answer delivery, GitHub Pages deployment, responsive (mobile+desktop), personalized with wife's name (Tanya)
- EXCLUDE: Backend/server, database, user accounts/auth, multi-page routing, free text inputs, actual quiz grading,
  analytics tracking

## Test Strategy Decision

- **Infrastructure exists**: NO (empty project)
- **Automated tests**: YES — basic Vitest tests after implementation
- **Agent-Executed QA**: ALWAYS (mandatory for all tasks)

## Wife's Name

- **Name**: Tanya
