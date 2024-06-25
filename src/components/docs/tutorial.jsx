import React from "react";
import Code from "react-syntax-highlighter";
import code1 from "./guessMyNumber.txt";
import "./tutorial.css";

export default function Tutorial() {
  return (
    <div id="tutorial">
      <h1 id="helloworld">Hello, World!</h1>
      <hr/>
      <p>Let's start off this JavaScript tutorial with a "Hello, World!" program.</p>
      <p>A "Hello, World!" program is a short piece of code that outputs Hello, World! to the screen.</p>
      <Code language="javascript">Ctch.print("Hello, World!")</Code>
      <p>Let's explain what this code is doing. First, Ctch.print is a "function" that we use to output Hello, World! to the screen. Functions are repeatable pieces of code that let you do all sorts of things, including outputting to the screen. "Hello, World!" is a "string", a fancy name used in coding to refer to text.</p>
      <p>In this case, we pass in a value into Ctch.print by putting into the parenthesis, which are required to actually run the function.</p>
      <p>Values passed into a function are comma-separated.</p>
      <h1 id="guessmynumber">Guess My Number</h1>
      <p>In this section, we will be creating a game where we make the user guess a random number.</p>
      <p>We will first get a random number between 1 and 100 (both included), then we will ask the user for what number they guess. We will give the user 6 tries, and if the guess is wrong, we will tell the user if the guessed number was over or under. </p>
      <Code language="javascript" showLineNumbers>{code1}</Code>
      <p>Using // makes the rest of the line do nothing. This can be useful when describing what your code does.</p>
      <p>We use "const" and "let" to respectively create a constant and a variable. Both store values, but const stores values that cannot be overwritten, and let stores values that can be overwritten.</p>
      <p>We use "while" to create a loop, which keeps executing the code inside the curly brackets as long as the condition inside the parenthesis is true.</p>
      <p>We use the functions Ctch.randomInt to get a random number, Ctch.ask to ask the user something, Ctch.asNumber to convert the user's text response to a number, Ctch.isInt to check if an input is an integer, and Ctch.alert to show something to the user</p>
      <p>Continue and break let us restart the loop and get out of the loop respectively.</p>
      <p>If we put variableName = value, then when we use variableName, value will be stored in it. This lets us increase the guesses by one.</p>
    </div>
  )
}
