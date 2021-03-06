# JavaScript

### INTRODUCING JAVASCRIPT

JavaScript can be used to:
* Add multimedia elements such as showing, hiding, changing, creating image role overs, scrolling text across the status bar, etc.

* JavaScript makes it possible to create tailored dynamic page contents, date and time, or other external data.

* Form processing such as user input validation during the form submission, modify the contents of the form.

JavaScript executes only on the web page that is in the window of the browser at any set time. This means that the scripts running on a page are immediately stopped the moment the user stops viewing the page. The only exemption to this is various client-side storage APIs and cookies which can be utilized by multiple pages to accumulate and pass information between them. This can happen even after the closure of the pages.

JavaScript statements are written with a script tag ```<SCRIPT>```.

#### BASICS

##### Expressions

```javascript
var firstNumber = 1;
firstNumber == 2;
var thirdNumber = firstNumber + secondNumber;
thirdNumber += 1;

window.alert('Hello');
document.write('<h1>Header</h1><p>Test Text to the body</p><footer><small>Footer></small></footer>');
```

##### Operators(some special ones)

* === Comparison: equal value and equal type
* ? Comparison: ternary operator E.g.: var IfGIsTrueReturnBOtherwiseReturnA = g ? t : f;<br/>

##### Control Statements

* IF-ELSE
* FOR 
* SWITCH
* **Foreach**: invokes a function (named or anonymous) for each item in the array. This can be used to easily iterate over the items in an array.<br/>
E.g.: 
```javascript
var sum = 0;
var numbers = [4, 9, 16, 25];
function increment(item, index) {
    sum += item;
}
numbers.forEach(increment);
alert(sum);
```

#### JAVASCRIPT TYPES

* Primitive: Boolean Data Type, Number Data Type, String Data Type
* Composite Data Types: JAVASCRIPT OBJECTS
* Collections: JavaScript *Arrays* are special objects that can contain values of various types
* Undefined and Null

<hr/>
### IMPLEMENTING PROGRAM FLOW

#### JAVASCRIPT CALLBACKS AND EVENT HANDLING

CASE STUDY:
Four ways of handling the "click" event

**Method 1**:<br/>
```html
<p id="dateTarget"></p>
<button onclick='getElementById("dateTarget").innerHTML = Date()'>Get Current Time</button>
```

**Method 2**: <br/>
```javascript
function handleClick() {
    document.getElementById("dateTarget").innerHTML = Date();
}
```
+
```html
<p id="dateTarget"></p>
<button onclick='handleClick()'>Get Current Time</button>
```

**Method 3**: <br/>
```javascript
document.getElementById('dateButton').onclick = handleClick;
function handleClick() {
    document.getElementById('dateTarget').innerHTML = Date();
}
```
+
```html
<p id="dateTarget"></p>
<button id="dateButton">Get Current Time</button>
```

**Method 4**: <br/>
```javascript
document.getElementById('dateButton').addEventListener('click', handleClick);
function handleClick() {
    document.getElementById('dateTarget').innerHTML = Date();
}
```
+
```html
<p id="dateTarget"></p>
<button id="dateButton">Get Current Time</button>
```

Or **simpler**:<br/>
```javascript
document.getElementById('dateButton').addEventListener('click', function handleClick() {
    document.getElementById('dateTarget').innerHTML = Date();
});
```

**Common HTML Element Events**
Here's the most common HTML element events that you may use in your web pages.

Event |	Details
--- | ---
onload | The browser has finished loading the page
onmouseover | The user moves the mouse over an HTML element
onmouseout | The user moves the mouse away from an HTML element
onclick |	The user clicks an HTML element
onkeydown |	The user pushes a keyboard key

#### Bubbled Events
<hr/>

### DOCUMENT OBJECT MODEL (DOM)

The HTML DOM model is constructed as a tree of Objects:

![ALT TEXT](http://www.w3schools.com/js/pic_htmltree.gif)

The HTML DOM is a standard object model and programming interface for HTML. The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

[This link provides DOM Document](http://www.w3schools.com/js/js_htmldom_document.asp) that allows finding and revising elements.

#### Exception Handling

JavaScript allows you to specify error handling blocks that can run code in errant scenarios. The ***try*** statement allows you to execute code within a "sandbox" that test the code for errors. If an error occurs, the code within the ***catch*** statement is executed and gives you an opportunity to safely handle the error.

```javascript
try {
  callExternalFunction();
}
catch(error) {
    console.log(error.message);
}
```

The ***finally*** statement is useful if you would like to ensure that a block of code is executed, if possible, after your exception is handled safely. If you are opening connections to external services, this can be a good place to ensure that the connection is closed. The finally statement is ran regardless of the result.

```javascript
var connection = getExternalConnection();
try {
  connection.open();
  connection.callExternalFunction();
}
catch(error) {
    console.log(error.message);
}
finally {
  connection.close();
}
```

You can also create your own custom errors using the ***throw*** statement.

```javascript
try {
  callExternalFunction();
  if (result.isNotValid) {
    throw "issue with external service";
  }
}
catch(error) {
    console.log(error.message);
}
```

#### XMLHTTPREQUEST

Modern browsers have an object that is built-in to JavaScript to handle the act of requesting data from a server. This object is referenced using the XMLHttpRequest identifier. Most browsers have a built-in facility to handle accessing, parsing and manipulating XML.

```javascript
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       // Action to be performed when the document is read;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();
```

<hr/>
### HTML5 APIs

#### Storage
HTML5 introduced local storage. Local storage allows web applications to store data directly in the user's browser. 

##### localStorage Object
The localStorage object stores data that does not expire. This data is available even after the user has closed the browser or shut down the computer.

localStorage.setItem("lastname", "Smith");<br/>
localStorage.getItem("lastname");<br/>

##### sessionStorage Object
The sessionStorage object stores data for a single session. If you close a browser window or tab, the data is lost.

```javascript
sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
var getClickCount = 'Click Count: ' + sessionStorage.clickcount;
```

#### Geolocation

##### Get Current Position
First, use the getCurrentPosition() function to get the user's current position. The data returned is the latitude and longitude of the user. The function takes a callback parameter and will invoke this function once it has determined the location:

```javascript
function getPositionResult(position) {
    console.log(position.coords.latitude + ' ' position.coords.longitude);
}
navigator.geolocation.getCurrentPosition(getPositionResult);
```

##### Watch Position
The watchPosition() function invokes the callback function as the user moves so that you can track their position over time. To stop watching the user's position, invoke the clearWatch() function.

```javascript
function refreshPosition(position) {
    var list = document.getElementById('positionList');
    list.innerHtml += ('<li>' + position.coords.latitude + ' ' position.coords.longitude + '</li>');
}
navigator.geolocation.watchPosition(refreshPosition);
```

#### Canvas

See the example in the code.

#### Web Workers
A web worker is a JavaScript file with logic written to run in the background, without affecting the performance of the page or making the page unresponsive.

```javascript
var worker = new Worker("WorkerFile.js");
```

#### Web Sockets


<hr/>

### [Module 4 HTML](https://github.com/yang0339/HTML-LearningMaterial/blob/master/Module_4.html)
### [Module 4 JAVASCRIPT](https://github.com/yang0339/HTML-LearningMaterial/blob/master/Module_4.js)
### [Module 4 CANVAS CSS](https://github.com/yang0339/HTML-LearningMaterial/blob/master/Module_4_canvas.css), [Module 4 CANVAS JS](https://github.com/yang0339/HTML-LearningMaterial/blob/master/Module_4_canvas.js)
