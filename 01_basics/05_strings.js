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

/** Basic Methods: **/   						                                        
// 1. charAt()										             
// 2. charCodeAt()										                     	                    
// 3. concat()									                           
// 4. includes()								                             
// 5. indexOf()									                      
// 6. lastIndexOf()								                          
// 7. localeCompare()
// 8. match()									                      
// 9. matchAll()								                  
// 10. repeat()									                  
// 11. replace()								                            
// 12. replaceAll()  
// 13. search()									                 
// 14. slice()									
// 15. split()									
// 16. substring()								
// 17. toLowerCase()							

// 18. toUpperCase()							
// 19. trim()									
// 20. trimStart() / trimLeft()					
// 21. trimEnd() / trimRight()

/** ES6+ Methods: **/
// 22. startsWith()
// 23. endsWith()
// 24. padStart()
// 25. padEnd()
// 26. fromCodePoint()
// 27. normalize()

/** Other Methods: **/
// 28. toLocaleLowerCase()
// 29. toLocaleUpperCase()
// 30. valueOf()

/** Deprecated Methods: **/
// 31. fixed()
// 32. fontcolor()
// 33. fontsize()
// 34. italics()
// 35. strike()
// 36. sub()
// 37. sup()

/** miscellaneous methods**/
// 38. anchor()
// 39. at()
// 40. blink()
// 41. bold()
// 42. codePointAt()
// 43. constructor()
// 44. isWellFormed()
// 45. link()
// 46. toString()
// 47. Symbol(Symbol.iterator)
// 48. small()
// 49. substr()
// 50. toWellFormed()

let text = "HEllo world"
let myStr = "Hello planet earth, you are a great planet.";
/** Basic Methods: **/
console.log("1.charAt() ", text.charAt(0)); // H
console.log("2.charCodeAt() ", text.charCodeAt(1)); // 69, Decimal number for E -> 69
console.log("3.concat() ", text.concat(', welcome to coding')); // Hello world, welcome to coding
console.log("4.includes()", text.includes('world')) // true
console.log("5.indexOf()", text.indexOf('E')); // 1 (**helps locate a substring within a string and returns its position. indexOf method to return the position of the first occurrence of specified character(s) in a string. **)
console.log("6.lastIndexOf()", myStr.lastIndexOf('planet')); // 36  (**returns the position of the last occurrence of specified character(s) in a string**)
console.log("7.localeCompare()", myStr.localeCompare(text));






