# Frontend Mentor - Age calculator app solution

This is my solution to the [Age Calculator App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- Mobile-first workflow

### What I learned

During this project, I practiced:

- Validating user input using JavaScript (day/month/year constraints)
- Creating a responsive form layout
- Calculating the difference between dates using the `Date` object
- Showing error messages for edge cases like future dates and invalid dates (e.g. April 31)
- Animating numbers from `--` to their result values (bonus)

Here’s a code snippet I’m proud of:

```js
function isValidDate(day, month, year) {
  const date = new Date(`${year}-${month}-${day}`);
  return (
    date.getFullYear() === Number(year) &&
    date.getMonth() + 1 === Number(month) &&
    date.getDate() === Number(day)
  );
}
