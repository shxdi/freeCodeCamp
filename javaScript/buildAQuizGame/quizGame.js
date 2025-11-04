let questions = [
  {
    category: 'HTML',
    question: 'What is the role of HTML on the web?',
    choices: [
      'HTML is used to add interactivity on the page.',
      'HTML is used for style and layout.',
      'HTML represents the content and structure for a web page.',
    ],
    answer: 'HTML represents the content and structure for a web page.',
  },
  {
    category: 'HTML',
    question:
      'Where is the content represented on the page placed in an HTML document?',
    choices: [
      'Within the script element.',
      'Within the body element.',
      'In between the head and the body elements.',
    ],
    answer: 'Within the body element.',
  },
  {
    category: 'CSS',
    question: 'What are the main parts of a CSS rule?',
    choices: [
      'Style and sheets',
      'Elements and attributes',
      'Selectors and declaration blocks',
    ],
    answer: 'Selectors and declaration blocks',
  },
  {
    category: 'CSS',
    question: 'What character precedes a class selector name?',
    choices: ['.', '*', '#'],
    answer: '.',
  },
  {
    category: 'JavaScript',
    question: 'Which of the following best describes JavaScript?',
    choices: [
      'A programming language used for web development.',
      'A markup language used to design websites.',
      'A database management system.',
    ],
    answer: 'A programming language used for web development.',
  },
];

console.log('Use getNthQuestion(questions, num)');
console.log('Where num is the question number');

function getNthQuestion(questionsArray, num) {
  if (num > questionsArray.length) {
    return `Question ${num} not found.`;
  }

  let questionObject = questionsArray[num - 1];

  let question = questionObject.question;
  let choices = '';

  for (let i = 0; i < questionObject.choices.length; i++) {
    choices += `${i + 1}. ${questionObject.choices[i]} `;
  }

  console.log('Use chooseNthChoice(questions, num, choice)');
  console.log('Where num is the same question number');
  console.log('and choice is a number of your selection.');

  let displayQuestion = `Question: ${question} Choices:${choices}`;
  return displayQuestion;
}

function chooseNthChoice(questionsArray, num, chosenNum) {
  let questionObject = questionsArray[num - 1];

  let choices = questionObject.choices;
  let answer = questionObject.answer;

  if (num > questionsArray.length) {
    return `Question ${num} not found.`;
  } else if (chosenNum > choices.length) {
    return `Choice ${chosenNum} not found.`;
  }

  if (choices[chosenNum - 1] === answer) {
    return 'Correct';
  } else {
    return `Wrong, the correct answer was '${answer}'`;
  }
}
