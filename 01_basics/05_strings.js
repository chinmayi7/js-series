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
/** Basic Methods: **/   						/** ES6+ Methods: **/                            
// 1. charAt()									// 22. startsWith()				
// 2. charCodeAt()								// 23. endsWith()			
// 3. concat()									// 24. padStart()
// 4. includes()								// 25. padEnd()
// 5. indexOf()									// 26. fromCodePoint()
// 6. lastIndexOf()								// 27. normalize()
// 7. localeCompare()
// 8. match()									/** Other Methods: **/
// 9. matchAll()								// 28. toLocaleLowerCase()
// 10. repeat()									// 29. toLocaleUpperCase()
// 11. replace()								// 30. valueOf()
// 12. replaceAll()
// 13. search()									/** Deprecated Methods: **/
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




