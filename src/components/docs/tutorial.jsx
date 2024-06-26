import React from "react";
import Js from "./js";
import code1 from "./guessMyNumber.txt";
import "./tutorial.css";

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
      <p></p>
      <h1 id="guessmynumber"><a href="#guessmynumber">Guess My Number</a></h1>
      <hr/>
      <p>In this section, we will be creating a game where we make the user guess a random number.</p>
      <p>We will first get a random number between 1 and 100 (both included), then we will ask the user for what number they guess. We will give the user 6 tries, and if the guess is wrong, we will tell the user if the guessed number was over or under. </p>
      <Js l>{code1}</Js>
      <p>Using // makes the rest of the line do nothing. This can be useful when describing what your code does.</p>
      <p>We use "const" and "let" to respectively create a constant and a variable. Both store values, but const stores values that cannot be overwritten, and let stores values that can be overwritten.</p>
      <p>We use "while" to create a loop, which keeps executing the code inside the curly brackets as long as the condition inside the parenthesis is true.</p>
      <p>We use the functions ctch.randomInt to get a random number, ctch.ask to ask the user something, ctch.asNumber to convert the user's text response to a number, ctch.isInt to check if an input is an integer, and ctch.alert to show something to the user</p>
      <p>Continue and break let us restart the loop and get out of the loop respectively.</p>
      <p>If we put variableName = value, then when we use variableName, value will be stored in it. This lets us increase the guesses by one.</p>
      <h1 id="comingsoon">Coming soon...</h1>
    </div>
  )
}
