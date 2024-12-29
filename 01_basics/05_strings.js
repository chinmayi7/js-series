const name = "devi"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);
// (`) -> back tick / typographical mark

const gameName = new String('Chess-Board')

// console.log(gameName.length); // 11
// console.log(gameName[0]);

// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('B'));


const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "    Chess Players   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://devi.com/devi%20chinmayi"

console.log(url.replace('%20', '-'))

console.log(url.includes('chess game'));

console.log(gameName.split('-'));



// console.log(typeof gameName); // object


/************************************************** String Methods *******************************************************/

const outDoorGame = new String("badminton")
/** Basic Methods: **/   						/** ES6+ Methods: **/                       /** miscellaneous methods**/                     
// 1. charAt()									// 22. startsWith()				            // 38. anchor() 
// 2. charCodeAt()								// 23. endsWith()		                    // 39. at() 	                    
// 3. concat()									// 24. padStart()                           // 40. blink()
// 4. includes()								// 25. padEnd()                             // 41. bold()
// 5. indexOf()									// 26. fromCodePoint()                      // 42. codePointAt()
// 6. lastIndexOf()								// 27. normalize()                          // 43. constructor()
// 7. localeCompare()                                                                       // 44. isWellFormed()
// 8. match()									/** Other Methods: **/                      // 45. link()
// 9. matchAll()								// 28. toLocaleLowerCase()                  // 46. toString()
// 10. repeat()									// 29. toLocaleUpperCase()                  // 47. Symbol(Symbol.iterator)
// 11. replace()								// 30. valueOf()                            // 48. small()
// 12. replaceAll()                                                                         // 49. substr()
// 13. search()									/** Deprecated Methods: **/                 // 50. toWellFormed()
// 14. slice()									// 31. fixed()
// 15. split()									// 32. fontcolor()
// 16. substring()								// 33. fontsize()
// 17. toLowerCase()							// 34. italics()
// 18. toUpperCase()							// 35. strike()
// 19. trim()									// 36. sub()
// 20. trimStart() / trimLeft()					// 37. sup()
// 21. trimEnd() / trimRight()


console.log(outDoorGame.anchor('bad')); // anchor()
console.log(outDoorGame.at(2)); // at()
console.log(outDoorGame);

console.log('protoType', outDoorGame.__proto__);




