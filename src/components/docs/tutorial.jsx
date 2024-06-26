import React from "react";
import Js from "./js";
import Spoiler from "./spoiler";
import code1 from "./guessMyNumber.txt";
import "./tutorial.css";

const disabled = (<><h1 id="guessmynumber"><a href="#guessmynumber">Guess My Number</a></h1>
      <hr/>
      <p>In this section, we will be creating a game where we make the user guess a random number.</p>
      <p>We will first get a random number between 1 and 100 (both included), then we will ask the user for what number they guess. We will give the user 6 tries, and if the guess is wrong, we will tell the user if the guessed number was over or under. </p>
      <Js l>{code1}</Js>
      <p>Using // makes the rest of the line do nothing. This can be useful when describing what your code does.</p>
      <p>We use "const" and "let" to respectively create a constant and a variable. Both store values, but const stores values that cannot be overwritten, and let stores values that can be overwritten.</p>
      <p>We use "while" to create a loop, which keeps executing the code inside the curly brackets as long as the condition inside the parenthesis is true.</p>
      <p>We use the functions ctch.randomInt to get a random number, ctch.ask to ask the user something, ctch.asNumber to convert the user's text response to a number, ctch.isInt to check if an input is an integer, and ctch.alert to show something to the user</p>
      <p>Continue and break let us restart the loop and get out of the loop respectively.</p>
      <p>If we put variableName = value, then when we use variableName, value will be stored in it. This lets us increase the guesses by one.</p></>);

export default function Tutorial() {
  return (
    <div id="tutorial">
      <h1 id="helloworld"><a href="#helloworld">Hello, World!</a></h1>
      <hr/>
      <p>Let's start off this JavaScript tutorial with a "Hello, World!" program.</p>
      <p>A "Hello, World!" program is a short piece of code that outputs Hello, World! to the screen.</p>
      <Js>ctch.print("Hello, World!");</Js>
      <p>Let's explain what this code is doing. First, ctch.print is a "function" that we use to output Hello, World! to the screen. Functions are repeatable pieces of code that let you do all sorts of things, including outputting to the screen. "Hello, World!" is a "string", a fancy name used in coding to refer to text.</p>
      <p>In this case, we pass in a value into ctch.print by putting into the parenthesis, which are required to actually run the function.</p>
      <p>Values passed into a function are comma-separated.</p>
      <p>The semicolon at the end helps us tell the computer that our statement has ended.</p>
      <h1 id="jsbasics"><a href="#jsbasics">JavaScript Basics</a></h1>
      <hr/>
      <p>In this section, we will discuss the basics of JavaScript.</p>
      <p>It is also recommended to be curious and do something random things to discover something new about JavaScript.</p>
      <h2>Variables and Outputting Them</h2>
      <p>In JavaScript, you sometimes will need to store certain values for use later. To do this, we can "define" a variable.</p>
      <p>To retrieve the value stored inside the variable, we can use its name.</p>
      <Js l>{"let variableName = 69420;\nctch.log(variableName);"}</Js>
      <p>As you can see, we first put a let, a variable name, an equals sign, and a value.</p>
      <p>Valid variable names contain only numbers, letters, dollar signs, and underscores.</p>
      <p>Variable names cannot start with a number.</p>
      <p>We can also change the value stored inside a variable.</p>
      <Js>variableName = 42069;</Js>
      <p>If you run this code, it will overwrite the value inside variableName to become 42069.</p>
      <p>IMPORTANT: to overwrite a variable, it must first be "defined", otherwise you will receive unexpected behaviour.</p>
      <h2>Operators</h2>
      <p>Like in math, we can use operators on numbers.</p>
      <Js>variableName = variableName + 69420;</Js>
      <p>In that code snippet, we set variableName to itself plus 69420.</p>
      <p>Additionally, you can use subtraction (-), multiplication (*), division (/), and exponentiation (**).</p>
      <h2>Comments</h2>
      <p>Comments allow you to write things in your code that aren't executed.</p>
      <p>This can be used to document your code or to deactivate certain parts.</p>
      <Js l>{"// This is a comment\n/* This is a multi\nline comment */"}</Js>
      <p>There are two types of comments, single-line comments, and multi-line comments. Single-line comments always come at the end of a line, and anything after the // of the same line will not be executed. Multi-line comments start with /* and will keep going until you put */ at the end. Multi-line comments do not have to be multi-lined, and they do not even need to be at the end of a line.</p>
      <h2>Strings and Booleans</h2>
      <p>JavaScript allows you to do things involving way more things than numbers. You can use "strings", a fancy name for text, and "booleans", a fancy name for true/false, yes/no, on/off values.</p>
      <Js>{"let iAmANumber = 69420;\nlet iAmAString = \"Hello, World!\";\nlet iAmABoolean = false;\nlet isThisTutorialCool = true;"}</Js>
      <p>As you can see, we can create a string by wrapping some text within quotes (you can use double or single), and booleans use the true/false values.</p>
      <h3>Escaping Certain Characters</h3>
      <p>Newlines, and quotes of the same type as the starting quote cannot be placed inside a string literally.</p>
      <p>This is due to the way that JavaScript is executed.</p>
      <p>To circumvent this problem, we can use escape sequences.</p>
      <p>To use an escape sequence, put a backslash (\) before the character you want to escape.</p>
      <p>Literal quotes and backslashes must be escaped.</p>
      <p>Here are some additional escape sequences:</p>
      <ul>
        <li>\n (newline)</li>
        <li>\r (carriage return)</li>
        <li>\t (tab)</li>
        <li>\b (backspace CHARACTER)</li>
        <li>\f (form feed)</li>
        <li>\v (vertical tab)</li>
        <li>\0 (null character, must not be followed by another number</li>
      </ul>
      <h3>String Concatenation</h3>
      <p>You can squish (or concatenate) two strings together by adding them like numbers.</p>
      <p>This works due to the weirdness of JavaScript.</p>
      <Js>ctch.log(iAmAString + " x2")</Js>
      <p>This can be used to put a variable in a string.</p>
      <Spoiler>
        <p>Modern JavaScript has a better way of putting variables into strings: Template Literals.</p>
        <Js>let iAmATemplateLiteral = `template literal $\{iAmAString\}`;</Js>
        <p>IMPORTANT: do not place a value before a template literal. It doesn't matter if it's in the previous line or not, there should be a semicolon separating the value and template literal.</p>
        <p>A value before a template literal is a different syntax.</p>
      </Spoiler>
      <h1 id="controlflow"><a href="#controlflow">Control Flow</a></h1>
      <hr/>
      <p>You can control the flow of your program. For example, you can conditionally execute code based on a boolean, or you can execute a piece of code forever.</p>
      <h2>If Statements</h2>
      <p>Use the power of if statements to conditionally execute code.</p>
      <Js l>{`if (iAmABoolean) {
      ctch.log(iAmAString);
      }`}</Js>
      <p>if will execute the code inside the curly brackets if and only if the value inside the parenthesis is true.</p>
      <Spoiler><p>The value inside the parenthesis doesn't actually have to be true. It just has to not be "falsy". The values that are falsy are: 0, NaN (not a number), "" (an empty string), false, undefined (we will discuss later), null (we will discuss later), and 0n (we will discuss later).</p></Spoiler>
      <p>Additionally, you can use else and else if to execute code in case the condition inside the parenthesis is false.</p>
      <h2>While Statements</h2>
      <p>While statements allow you to repeatedly execute a certain piece of code "while" a condition is true.</p>
      <Js l>{`while (iAmABoolean) {
      ctch.log(iAmAString);
      }`}</Js>
      <p>while will execute code inside the curly brackets as long as the value inside the parenthesis is true.</p>
      <Spoiler><p>Read the previous spoiler, it applies here too.</p></Spoiler>
      <Spoiler>
        <p>Introducing while's eldest brother, numeric for.</p>
        <p>Numeric for loops are a more advanced form of a while loop that allows you to simplify certain operations.</p>
        <Js l>{`for (let i = 0; i < n; i++) {
        ctch.log(i);
        }`}</Js>
        <p>Each part inside the parenthesis are separated by a semicolon, and all parts are optional. The first part is a variable definition, which can be skipped if a variable is defined elsewhere. The second part is a condition similar to the one in the while loop. The third part is a value to be evaluated. </p>
        <p>This can be used to create a loop that repeats code n number of times like in the code snippet shown.</p>
      </Spoiler>
      <h1 id="comingsoon">Coming soon...</h1>
    </div>
  )
}
