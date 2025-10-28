/*
Given an array of browser commands you executed on Netscape Navigator, return the current page 
you are on after executing all the commands using the following rules:

You always start on the "Home" page, which will not be included in the commands array.
Valid commands are:
"Visit Page": Where "Page" is the name of the page you are visiting. For example, "Visit About" 
takes you to the "About" page. When you visit a new page, make sure to discard any forward 
history you have.
"Back": Takes you to the previous page in your history or stays on the current page if there 
isn't one.
"Forward": Takes you forward in the history to the page you came from or stays on the current 
page if there isn't one.
For example, given ["Visit About Us", "Back", "Forward"], return "About Us".
*/

/*
1. navigate(["Visit About Us", "Back", "Forward"]) should return "About Us".
2. navigate(["Forward"]) should return "Home".
3. navigate(["Back"]) should return "Home".
4. navigate(["Visit About Us", "Visit Gallery"]) should return "Gallery".
5. navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]) should return "Home".
6. navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]) should 
return "Contact".
7. navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]) 
should return "Visit Us".
*/

function navigate(commands) {
  let currentPage = 0;
  let pages = ['Home'];

  // Loop over commands array
  for (let i = 0; i < commands.length; i++) {
    // If current command is new page
    if (commands[i].includes('Visit')) {
      // Loop over previous pages
      for (let current = i; current > 0; current--) {
        // If previous pages were 'Back'
        if (commands[current] === 'Back') {
          // Remove forward history
          pages.pop();
        }
      }

      pages.push(commands[i].slice(6));
      currentPage++;
      // If current command is back and not at home page
    } else if (commands[i] === 'Back' && pages[currentPage - 1] !== undefined) {
      currentPage--;
    } else if (
      // If current command is forward and not at end of forward history
      commands[i] === 'Forward' &&
      pages[currentPage + 1] !== undefined
    ) {
      currentPage++;
    }
  }

  // Return current page
  return pages[currentPage];
}
