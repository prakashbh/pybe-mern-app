const { resetData } = require('./data/store');
require('dotenv').config();

const scenarios = [
  {
    title: 'Canteen Queue Decisions',
    difficulty: 'Beginner',
    concepts: ['conditionals', 'lists', 'loops'],
    context: 'A school canteen wants to decide which students should be served first based on token number and lunch period.',
    prompt: 'How would you reason through serving students fairly and quickly?',
    objectives: ['Identify ordering rules', 'Map decisions to if statements', 'Use lists for groups'],
    sampleReasoning: 'Check each token, compare the lunch period, and serve matching students first.',
    effectivenessScore: 91
  },
  {
    title: 'Monthly Allowance Planner',
    difficulty: 'Beginner',
    concepts: ['variables', 'arithmetic', 'conditionals'],
    context: 'A learner wants to split a monthly allowance between food, transport, savings, and fun.',
    prompt: 'Describe how you would calculate a simple budget and warn when spending is too high.',
    objectives: ['Represent amounts as variables', 'Calculate totals', 'Use a warning condition'],
    sampleReasoning: 'Add spending categories and compare the total to the allowance.',
    effectivenessScore: 88
  },
  {
    title: 'Cricket Practice Tracker',
    difficulty: 'Explorer',
    concepts: ['loops', 'averages', 'lists'],
    context: 'A cricket coach records runs from practice balls and wants to find the average and best hit.',
    prompt: 'Explain how you would process all practice attempts to summarize performance.',
    objectives: ['Use collections', 'Repeat calculations', 'Generate feedback'],
    sampleReasoning: 'Go through every score, keep a total, and compare each score to the current best.',
    effectivenessScore: 86
  },
  {
    title: 'Library Book Finder',
    difficulty: 'Explorer',
    concepts: ['search', 'dictionaries', 'conditionals'],
    context: 'A small library needs a tool to find whether a requested book is available and where it sits.',
    prompt: 'What information would you store and how would you decide what message to show?',
    objectives: ['Model key-value data', 'Search records', 'Branch on availability'],
    sampleReasoning: 'Store each book with a shelf and status, then look up the requested title.',
    effectivenessScore: 84
  },
  {
    title: 'Reusable Bill Calculator',
    difficulty: 'Builder',
    concepts: ['functions', 'arithmetic', 'return values'],
    context: 'A cafe repeatedly calculates bill totals with tax and optional discounts.',
    prompt: 'How could you make the calculation reusable for many orders?',
    objectives: ['Recognize reusable logic', 'Design function inputs', 'Return computed totals'],
    sampleReasoning: 'Put the bill steps into a named process that accepts amount, tax, and discount.',
    effectivenessScore: 82
  }
];

async function run() {
  await resetData(scenarios);
  console.log(`Seeded ${scenarios.length} PyBe scenarios`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
