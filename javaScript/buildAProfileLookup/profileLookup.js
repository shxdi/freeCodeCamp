let contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

function lookUpProfile(name, property) {
  let contact;

  for (let person in contacts) {
    if (contacts[person]['firstName'] === name) {
      contact = contacts[person];
    }
  }

  if (contact === undefined) {
    return 'No such contact';
  }

  if (contact.hasOwnProperty(property)) {
    return contact[property];
  } else {
    return 'No such property';
  }
}
