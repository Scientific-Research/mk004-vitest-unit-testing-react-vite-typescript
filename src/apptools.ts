/**
 * Surrounds a string with two letters
 *
 * tools.surrounds('primary','[]');
 *
 * '[primary]'
 */

export const surround = (text: string, twoLetters: string) => {
  if (twoLetters.length === 2) {
    const firstLetter = twoLetters.slice(0, 1);
    console.log(firstLetter); // [
    const secondLetter = twoLetters.slice(1, 2);
    console.log(secondLetter); // ]
    return firstLetter + text + secondLetter;
  } else {
    return text;
  }
};
