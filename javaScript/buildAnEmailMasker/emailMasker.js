let email = 'apple.pie@example.com';

function maskEmail(email) {
  let emailParts = email.split('@');
  let username = emailParts[0];
  let domain = emailParts[1];

  let maskedUsername =
    username[0] +
    '*'.repeat(username.length - 2) +
    username[username.length - 1];

  let maskedEmail = maskedUsername + '@' + domain;

  return maskedEmail;
}

console.log(maskEmail(email));
