/**
    The following content explains the basic syntax rules 
    that has to be followed in the JavaScript programming language.

    They are no-op rules, which means that we have to abide by them.
    Still, starting JavaScript is not that hard after all.
    So, here are some key points:

    1. Statements end with a semicolon (;).​​

    2. Code blocks are enclosed in curly braces ({ }).​​

    3. JavaScript is case-sensitive (e.g., myVariable is different from myvariable).​​

    4. Comments can be single-line (//) or multi-line (\/* *\/).​
*/

/**
 * Functions
 *** reusable blocks of code that can be defined once and executed (invoked) multiple times. ***
 */
function myFunction() {
    // code block to be executed

}

let myArrowFunction = () => {
    //code block to be executed

};

(function() {});

myFunction();

/**
 * Loops
 *** structures that allow you to repeat a block of code multiple times until a certain condition is met. ***
 */

 for(let i=0; i < 10; i++) {
    //code block to be exectued
 }

/**
 * Conditionals
 *** control structures that allow you to make decisions in your code based on specified conditions. ***
 */

 if(true) {
    // code block to be executed
 } else if (true){
    //code block to be executed
 } else {
    // code block to be executed 
 }