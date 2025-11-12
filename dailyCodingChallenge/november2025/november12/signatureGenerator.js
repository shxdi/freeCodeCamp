/*
Given strings for a person's name, title, and company, return an email signature as a single 
string using the following rules:

The name should appear first, preceded by a prefix that depends on the first letter of the name. 
For names starting with (case-insensitive):
A-I: Use >> as the prefix.
J-R: Use -- as the prefix.
S-Z: Use :: as the prefix.
A comma and space (, ) should follow the name.
The title and company should follow the comma and space, separated by " at " (with spaces around 
it).
For example, given "Quinn Waverly", "Founder and CEO", and "TechCo" return "--Quinn Waverly, 
Founder and CEO at TechCo".
*/

/*
1. generateSignature("Quinn Waverly", "Founder and CEO", "TechCo") should return "--Quinn 
Waverly, Founder and CEO at TechCo".
2. generateSignature("Alice Reed", "Engineer", "TechCo") should return ">>Alice Reed, 
Engineer at TechCo".
3. generateSignature("Tina Vaughn", "Developer", "example.com") should return "::Tina Vaughn,
Developer at example.com".
4. generateSignature("B. B.", "Product Tester", "AcmeCorp") should return ">>B. B., Product 
Tester at AcmeCorp".
5. generateSignature("windstorm", "Cloud Architect", "Atmospheronics") should return 
"::windstorm, Cloud Architect at Atmospheronics".
*/

function generateSignature(name, title, company) {
  let signature = [];
  let firstLetter = name[0].toLowerCase();

  let prefixOne = 'abcdefghi';
  let prefixTwo = 'jklmnopqr';
  let prefixThree = 'stuvwxyz';

  if (prefixOne.includes(firstLetter)) {
    signature.push(`>>${name}`);
  } else if (prefixTwo.includes(firstLetter)) {
    signature.push(`--${name}`);
  } else if (prefixThree.includes(firstLetter)) {
    signature.push(`::${name}`);
  }

  signature.push(`${title} at ${company}`);

  return signature.join(', ');
}
