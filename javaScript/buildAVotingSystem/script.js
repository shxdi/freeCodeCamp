const poll = new Map();

function addOption(option) {
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  } else if (option === '') {
    return 'Option cannot be empty.';
  }

  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

function vote(option, voterId) {
  let pollOption = poll.get(option);

  if (pollOption === undefined) {
    return `Option "${option}" does not exist.`;
  } else if (pollOption.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  pollOption.add(voterId);

  return `Voter ${voterId} voted for "${option}".`;
}

function displayResults() {
  let pollResults = `Poll Results:`;

  poll.forEach((set, option) => {
    pollResults += `
${option}: ${set.size} votes`;
  });

  return pollResults;
}

addOption('Apple');
addOption('Peach');
addOption('Pear');

vote('Peach', 1);
vote('Peach', 2);
vote('Pear', 3);

console.log(displayResults());
