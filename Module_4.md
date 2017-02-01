# JavaScript

### INTRODUCING JAVASCRIPT

JavaScript can be used to:
* Add multimedia elements such as showing, hiding, changing, creating image role overs, scrolling text across the status bar, etc.

* JavaScript makes it possible to create tailored dynamic page contents, date and time, or other external data.

* Form processing such as user input validation during the form submission, modify the contents of the form.

JavaScript executes only on the web page that is in the window of the browser at any set time. This means that the scripts running on a page are immediately stopped the moment the user stops viewing the page. The only exemption to this is various client-side storage APIs and cookies which can be utilized by multiple pages to accumulate and pass information between them. This can happen even after the closure of the pages.

JavaScript statements are written with a script tag <em>《SCRIPT》<em>.<br/>

#### BASICS

##### Expressions

var firstNumber = 1;<br/>
firstNumber == 2;<br/>
var thirdNumber = firstNumber + secondNumber;<br/>
thirdNumber += 1;<br/>
**window.alert**('Hello');<br/>
**document.write**('《h1》Header《/h1》《p>Test Text to the body《/p》《footer》《small》Footer《/small》《/footer》');<br/>

##### Operators(some special ones)

* === Comparison: equal value and equal type
* ? Comparison: ternary operator E.g.: var IfGIsTrueReturnBOtherwiseReturnA = g ? t : f;<br/>

##### Control Statements

* IF-ELSE
* FOR 
* SWITCH
* **Foreach**: invokes a function (named or anonymous) for each item in the array. This can be used to easily iterate over the items in an array.<br/>
E.g.: <br/>
var sum = 0;<br/>
var numbers = [4, 9, 16, 25];<br/>
function increment(item, index) {<br/>
    sum += item;<br/>
}<br/>
numbers.forEach(increment);<br/>
alert(sum);<br/>

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
《p id="dateTarget"》《/p》<br/>
《button onclick='getElementById("dateTarget").innerHTML = Date()'》Get Current Time《/button》<br/>

**Method 2**: <br/>
function handleClick() {<br/>
    document.getElementById("dateTarget").innerHTML = Date();<br/>
}<br/>
+<br/>
《p id="dateTarget"》《/p》<br/>
《button onclick='handleClick()'》Get Current Time《/button》<br/>

**Method 3**: <br/>
document.getElementById('dateButton').onclick = handleClick;<br/>
function handleClick() {<br/>
    document.getElementById('dateTarget').innerHTML = Date();<br/>
}<br/>
+<br/>
《p id="dateTarget"》《/p》<br/>
《button id="dateButton"》Get Current Time《/button》<br/>

**Method 4**: <br/>
document.getElementById('dateButton').addEventListener('click', handleClick);<br/>
function handleClick() {<br/>
    document.getElementById('dateTarget').innerHTML = Date();<br/>
}<br/>
+<br/>
《p id="dateTarget"》《/p》<br/>
《button id="dateButton"》Get Current Time《/button》<br/>

Or **simpler**:<br/>
document.getElementById('dateButton').addEventListener('click', function handleClick() {<br/>
    document.getElementById('dateTarget').innerHTML = Date();<br/>
});<br/>

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

try {<br/>
  callExternalFunction();<br/>
}<br/>
catch(error) {<br/>
    console.log(error.message);<br/>
}<br/>

The ***finally*** statement is useful if you would like to ensure that a block of code is executed, if possible, after your exception is handled safely. If you are opening connections to external services, this can be a good place to ensure that the connection is closed. The finally statement is ran regardless of the result.

var connection = getExternalConnection();<br/>
try {<br/>
  connection.open();<br/>
  connection.callExternalFunction();<br/>
}<br/>
catch(error) {<br/>
    console.log(error.message);<br/>
}<br/>
finally {<br/>
  connection.close();<br/>
}<br/>

You can also create your own custom errors using the ***throw*** statement.

try {<br/>
  callExternalFunction();<br/>
  if (result.isNotValid) {<br/>
    throw "issue with external service";<br/>
  }<br/>
}<br/>
catch(error) {<br/>
    console.log(error.message);<br/>
}<br/>


#### XMLHTTPREQUEST

Modern browsers have an object that is built-in to JavaScript to handle the act of requesting data from a server. This object is referenced using the XMLHttpRequest identifier. Most browsers have a built-in facility to handle accessing, parsing and manipulating XML.

var xhttp = new XMLHttpRequest();<br/>
xhttp.onreadystatechange = function() {<br/>
    if (xhttp.readyState == 4 && xhttp.status == 200) {<br/>
       // Action to be performed when the document is read;<br/>
    }<br/>
};<br/>
xhttp.open("GET", "filename", true);<br/>
xhttp.send();<br/>

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

sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;<br/>
var getClickCount = 'Click Count: ' + sessionStorage.clickcount;<br/>

#### Geolocation

##### Get Current Position
First, use the getCurrentPosition() function to get the user's current position. The data returned is the latitude and longitude of the user. The function takes a callback parameter and will invoke this function once it has determined the location:

function getPositionResult(position) {<br/>
    console.log(position.coords.latitude + ' ' position.coords.longitude);<br/>
}<br/>
navigator.geolocation.getCurrentPosition(getPositionResult);<br/>

##### Watch Position
The watchPosition() function invokes the callback function as the user moves so that you can track their position over time. To stop watching the user's position, invoke the clearWatch() function.

function refreshPosition(position) {<br/>
    var list = document.getElementById('positionList');<br/>
    list.innerHtml += ('<li>' + position.coords.latitude + ' ' position.coords.longitude + '</li>');<br/>
}<br/>
navigator.geolocation.watchPosition(refreshPosition);<br/>

#### Canvas

See the example in the code.

#### Web Workers
A web worker is a JavaScript file with logic written to run in the background, without affecting the performance of the page or making the page unresponsive.

var worker = new Worker("WorkerFile.js");<br/>

#### Web Sockets


<hr/>

### [Module 4 HTML](https://github.com/yang0339/HTML-LearningMaterial/blob/master/Module_4.html)
### [Module 4 JAVASCRIPT](https://github.com/yang0339/HTML-LearningMaterial/blob/master/Module_4.js)
### [Module 4 CANVAS CSS](https://github.com/yang0339/HTML-LearningMaterial/blob/master/Module_4_canvas.css), [Module 4 CANVAS JS](https://github.com/yang0339/HTML-LearningMaterial/blob/master/Module_4_canvas.js)
