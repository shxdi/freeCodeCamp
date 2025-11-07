function getAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total / arr.length;
}

function getGrade(score) {
  if (score === 100) {
    return 'A+';
  } else if (score <= 99 && score >= 90) {
    return 'A';
  } else if (score <= 89 && score >= 80) {
    return 'B';
  } else if (score <= 79 && score >= 70) {
    return 'C';
  } else if (score <= 69 && score >= 60) {
    return 'D';
  } else if (score <= 59) {
    return 'F';
  }
}

function hasPassingGrade(score) {
  let grade = getGrade(score);

  if (grade === 'F') {
    return false;
  } else {
    return true;
  }
}

function studentMsg(arr, score) {
  let average = getAverage(arr);
  let grade = getGrade(score);
  let passed = hasPassingGrade(score);

  console.log(average);

  if (passed === true) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}
