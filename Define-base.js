var wordRequests = [];

let Database = {
    "Web": {
      definition: "The web is a network system that allows the user to interact and access files on the internet.",
      images: ["pics/web.jpg"],
      examples:  ["For example, you could use the web to access and interact with web pages around  the world."],
    },
    "HTML": {
      definition: "The HTML, also known as HyperText Markup Language, is a scripting language used to organise the content and structure of the web page.",
      images: ["pics/html.jpg"],
      examples: ["HTML is pretty much the base of the webpage and will have the main content that will be displayed on the webpage.", " For example, you can change the font, font colour, background colour, the margins of the content and many more."],
    },
    "CSS": {
        definition: "The CSS, also known as Cascading Style Sheet, is a stylesheet that is used to design and organise the appearance of the web page.",
        images: ["pics/css.jpg"],
        examples: ["CSS can be used to design how the information on the webpage will be displayed.", "For example, you can change the font, font colour, background colour, the margins of the content and many more."],
    },
      "JavaScript": {
        definition: "JavaScript is a programming language used to program how the web page will interact with the user based on user input and interaction.",
        images: ["pics/js.jpg"],
        examples: ["JavaScript would be used to direct the web page to complete a certain task or action based on the user’s interaction.", "For example, you can use JavaScript to program the web page to increase a displayed number by one each time a button is pressed."]
    },
      "Element": {
        definition: "Elements are basically the content within the HTML file.",
        images: ["pics/element.jpg"],
        examples: ["<h> (the element content goes here) </h> this is a heading element."], 
    },
    "Attribute": {
        definition: "Attributes are extra pieces of information used for HTML elements to give specific details about the selected element.",
        images: ["pics/attribute.jpg"],
        examples: ["<p style = \"color: blue\"> (content) </p>The style attribute will signify that the content within the paragraph tag will be the colour blue."], 
    },
    "Selector": {
        definition: "Selectors are used in the CSS file to identify elements within the HTML and assign certain properties to those elements.",
        images: ["pics/selector.jpg"],
        examples: ["For instance, you can assign multiple properties to the div elements and the paragraph elements separately or together by announcing them as a selector"],
    },
    "Validator": {
        definition: "A validator can be used to validate the CSS or HTML code so that errors can be identified.",
        images: ["pics/validatorCSS.jpg", "pics/validatorHTML.jpg"],
        examples: ["In order to check your file you would have to upload your HTML or CSS file or input the code itself onto the site -Img of validator site."], 
    },
    "Algorithm": {
        definition: "An algorithm is a set of steps for a program to execute in order to solve a problem or complete a given task.",
        images: [],
        examples: ["For example if the given problem was to find the sum of two inputted values, you would have to figure out the steps the program would have to conduct in order to reach a satisfying output"],
    },
    "Function": {
        definition: "A function is a subprogram that will have a series of commands. When a function is called the steps within the function will be read and executed by the program.",
        images: ["pics/function.jpg"],
        examples: ["For example if you had multiple buttons and you wanted certain button to execute certain steps, you would assign each button to a separate function so that each  button will call it corresponding function"],
    },
    "Variable": {
      definition: "A variable is an element that will store data. This data can be of any data type. The variable can be reassigned with new information and can be used for different commands.",
      images: ["pics/variable.jpg"],
      examples: ["For instance you could assign a variable a string of text, a number value, a boolean value and many more. Some variables are: 1)Var    2)Const     3)Let "],
    },
    "Operator": {
      definition: "Operators are used to perform various operations on various elements, compare and modify their values.",
      images: ["pics/operator.jpg"],
      examples: ["For instance, you could use the addition operator to either add two number values together or to join two strings together. ", "The purpose of the operators change according to data type. "],
    },
    "String": {
      definition: "A string is a data type that involves text. ",
      images: ["pics/string.jpg"],
      examples: ["For instance, “hello” would be considered a string. If you store a number as a string, when you add two strings, they will just join together. For example, \"2\" + \"1\" = \"21\", and not 3."],
    },
    "Boolean": {
      definition: "A boolean data type involves true or false statements, it can only be one or the other. ",
      images: ["pics/boolean.jpg"],
      examples: ["For instance, you use the boolean data type to see if a statement is true or false and code a program to act according to the written program."],
    },
    "Loops": {
      definition: "A loop is an repetition of a set of steps until a condition is met.",
      images: ["pics/loops.jpg"],
      examples: ["These are some examples of loops: a) For loops img  b) While-do loop img"],
    },
    "Precondition": {
      definition: "Preconditions are conditions that must be met before a program can run.",
      images: ["pics/precondition.jpg"],
      examples: ["For example, if a program that calculates sums has to run, it would need two number inputs in order to calculate the sum of the two numbers."],
    },
    "Postcondition": {
      definition: "Postconditions are conditions that will be met if the proper preconditions are inputted into the program.",
      images: ["pics/postcondition.jpg"],
      examples: ["For example, if a program that calculates sums receives two number inputs, it should output the corresponding sum of the two numbers. "],
    },
    "Flowchart": {
      definition: "A flowchart is used to show the process and steps required to tackle the problem at the algorithm is trying to solve.",
      images: ["pics/flowchart.jpg"],
      examples: ["For instance, since there are multiple ways to approach a problem you can use flowcharts to see which solution would be the easiest to implement.", " For example, you can find the product of two numbers by adding one of the numbers for the second value's number of times or by simply using the multiply operator. "],
    },
    "Tracing": {
      definition: "Tracing is used to trace out the output of an algorithm based on inputting a number and tracing the chance in the imputed value as it passes through the steps in the algorithm.This helps programmers understand how the algorithm handles the input and generates the output.",
      images: ["pics/tracing.jpg"],
      examples: ["Tracing will allow you to trace your steps from the initial value/imputed value to the output.", "For example, if a function calculates the product of two numbers through addition you can trace to see how the product is created from the inputted values."],
    },
    "Recursive": {
      definition: "When a function is recursive it means that the function itself is called and used within the function in order to get the solution. The function will continuously call itself until it reaches a base case and a final solution is returned.",
      images: ["pics/recursive.jpg"],
      examples: ["A recursive function calls itself. For example, a function could call itself until it reaches a value which would only be given if the function reaches a base case."],
    }
    
  };
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function searchWord() {
    var searchInput = document.getElementById('search-input').value.toLowerCase();
    
    if (searchInput.trim() !== "") {
      var  match = Object.keys(Database).filter(word => word.toLowerCase().includes(searchInput));
  
      if (match.length > 0) {
        // Redirect to the Define.html page for the first matching word
        window.location.href = "Define.html?word=" + match[0];
      } else {
        alert("Word not found");
      }
    }
  }
  
  function wordDefinition(word) {
    var outputElement = document.getElementById("output");
    var titleElement = document.getElementById("title");
  
    if (Database[word]) {  
  
      titleElement.innerHTML = "<p>" + word + "</p>";
      outputElement.innerHTML = "<p>Definition: " + Database[word].definition + "</p>";
  
      // Display images
      for (let i = 0; i < Database[word].images.length; i++) {
        var imgElement = document.createElement("img");
        imgElement.src =  Database[word].images[i];
        outputElement.appendChild(imgElement);

      }
  
      // Display examples 
      var displayExamples = document.createElement("div");
      displayExamples.innerHTML = "Examples: <br>";
      for (let i = 0; i < Database[word].examples.length; i++) {
        displayExamples.innerHTML += "<p>" + (i + 1) + ") " + Database[word].examples[i] +  "</p>";
       
        outputElement.appendChild(displayExamples);

    
      }


    } else {
      titleElement.innerHTML = "<p>" + word + "</p>";
      outputElement.innerHTML = "<p>Definition not found</p>";
    }
  }
  

  
  
  // Function to populate the words list on Words.html
  function wordsList() {
    var outputElement = document.getElementById("output");
    var titleElement = document.getElementById("title");
  
    titleElement.innerHTML = "<p>Words</p>";
  
  
    for (const word in Database) {
      outputElement.innerHTML += '<li><a href="#" onclick="wordDefinition(\'' + word + '\')">' + word + '</a></li>';
    }
  
  }

  
  // Function to handle new word requests
  function request() {
    var inputWord = document.getElementById("requestWord");
    var newWord = inputWord.value;

  
  
    // Add the new word to the database
    wordRequests.push(newWord);
    displayRequests();

    alert("Word request added successfully!");
  }

  function displayRequests(){
    var requestsList = document.getElementById("requestsList");
    requestsList.innerHTML = "";


    for(var i = 0; i < wordRequests.length; i++){
      var list = document.createElement("ol");
      list.textContent = wordRequests[i];
      requestsList.appendChild(list);
    }
  }
  


  

