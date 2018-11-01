## Code Challenge: Multi Bracket Validation

#### Whiteboard partners
Ben Harris & Trevor Stam

### Challenge

Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

- Round Brackets : ()
- Square Brackets : []
- Curly Brackets : {}

### Edge Case inclusion
For this lab we opted to use a function called bracketValidator(str) because it was shorter to write. However, prior to submitting our completed whiteboard solution we discovered that our solution was missing an important validation step. Basically our solution will successfully return as TRUE if there are equal open/close pairs of parentheses, brackets, and curly braces in the given string. However, it will not check to see if the parentheses, brackets, and curly braces are in proper order (i.e. eslinter like). Unfortunately by this point we had exhausted our hour on this assignment, so I wanted to post this addendum to quickly call attention to a simple solution.

Basically, during the for loop in our solution where it iterates through each character of the supplied string, all you would need to do is use an additional set of counters—one for each character type (e.g. countParens, countBracket, countCurly)—and increment the corresponding counters each time an "open" character was used and decrement each time a "close" character was used. A countCurly of '+2' would mean that you have at least two unresolved openCurly braces.

Now, prior to looping back through the iteration all you would need to check is that countParens, countBracket, or countCurly was still >= 0. As long as these values were NEVER negative, then it would mean that the pairs had closed properly, and the loop could continue. Otherwise, if the value were < 0 then it would mean that a character hadn't closed properly and was out-of-place, and should therefore immediately RETURN as false. Also, if any of the open parens/bracket/curly counters were > 0 at the end of the string...our dataKey logic would kick in and resolve the mismatch to RETURN as false.

### Whiteboard Solution
![Whiteboard1](./assets/1.jpg)
![Whiteboard2](./assets/2.jpg)

