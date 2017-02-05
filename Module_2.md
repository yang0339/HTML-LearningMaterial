# Module 2

## Semantic Elements

HTML5 introduced a new series of semantic elements that function identically to other block-level containers such as the **div** element. These elements have meaning that others can infer when managing and modifying your web application.

![alt text](https://github.com/yang0339/HTML-LearningMaterial/blob/master/semantic%20elements.PNG)

Detail Layout, and more on CSS/BootStrap template can be found [**here**](http://www.w3schools.com/html/html_layout.asp)
<hr/>

## Create a form

The form element has two primary attributes: - action: This is the URL of the web server or web service where you want you form data saved. - method: This is the HTTP method you are using to save your form data. Only GET and POST are valid in this context.

example:<br/>
```html
<form action="http://www.example.com/formsubmission" method="GET">
    <fieldset>
        <legend>User Information</legend>
        First Name: 《input type="text" name="fname" />
        Last Name: 《input type="text" name="lname" />
        </fieldset>
    <fieldset>
        <legend>Location</legend>
        Hometown: <input type="text" name="home" />
    </fieldset>
    <input type="submit" value="Submit Information" />
</form>
```

### Other Interactive Elements

```html
* <textarea>
* <select>
    <optgroup label="Data Platform">
       <option value="DAT202x"> Processing Big Data with Azure HDInsight</option>
       <option value="DAT204x">Introduction to R Programming</option>
    </optgroup>
  </select>
  
* <button type="button">
    <img src="http://..." alt="Microsoft" />
    <br />
    Apply to Microsoft!
  </button>
  
*  <fieldset>
      <legend>Require Admin Approval</legend>
         Yes: 《input type="**radio**" name="approval" value="true" checked="checked" />
         <br/>
         No: 《input type="radio" name="approval" value="false" />
    </fieldset>
    
*  <input type="**range**" name="age" min="0" max="100" value="25" />
```


## Time Elements

example:<br/>
```html
<time datetime="2015-12-13T08:30:00-05:00">
    December 12th at <strong>08:30 AM</strong>
</time>
```

## Figure Elements

example:<br/>
```html
<figure>
    <img src="https://www.marketingmag.com.au/wp-content/uploads/2012/08/Microsoft-logo-slider.jpg" alt="Result" />
    <figcaption>
        This is the grade we all want.
    </figcaption>
</figure>
```


## Scalable Vector Graphics (SVG)

example:<br/>
```html
<svg height="200" width="400">
    <rect x="100" y="50" rx="20" ry="20" width="250" height="100" fill="#1B043C" />
    <rect x="100" y="50" width="200" height="100" fill="#1B043C" />
    <circle cx="100" cy="100" r="50" fill="#472772" />
    <text fill="#D7BFF3" font-size="28" font-family="Segoe UI Light" x="160" y="108">CompanyName</text>>
</svg>
```

![alt text](https://github.com/yang0339/HTML-LearningMaterial/blob/master/SVG%20syntax.jpg)


## Multimedia

example:<br/>

```html
<video width="900" loop="loop" autoplay="autoplay" controls="controls" poster="starting_page_display.png">
    <source src="advertisement.webm" type="audio/webm" />
    <source src="advertisement.ogg" type="audio/ogg" />
    <source src="advertisement.mp4" type="audio/mp4" />
</video>
```

Or to embed an YouTube Video Clip:<br/>

```html
<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/1-UdWS4RAA4" frameborder="0" allowfullscreen>
</iframe>
```

<hr/>
#### [HTML for Module 2](https://github.com/yang0339/HTML-LearningMaterial/blob/master/Module_2.html)
#### [CSS file (Semantic) for Module 2](https://github.com/yang0339/HTML-LearningMaterial/blob/master/Module_2_semantic.css)
#### [CSS file (figure) for Module 2](https://github.com/yang0339/HTML-LearningMaterial/blob/master/Module_2_figure.css)
#### Go to [this website](http://htmlpreview.github.io/?) to view the HTML.
