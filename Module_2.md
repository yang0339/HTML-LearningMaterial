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
《time datetime="2015-12-13T08:30:00-05:00"》<br/>
    December 12th at 《strong》08:30 AM《/strong》<br/>
《/time》<br/>

## Figure Elements

example:<br/>
《figure》<br/>
    《img src="https://www.marketingmag.com.au/wp-content/uploads/2012/08/Microsoft-logo-slider.jpg" alt="Result" /》<br/>
    《figcaption》<br/>
        This is the grade we all want.<br/>
    《/figcaption》<br/>
《/figure》<br/>


## Scalable Vector Graphics (SVG)

example:<br/>
《svg height="200" width="400"》<br/>
    《rect x="100" y="50" rx="20" ry="20" width="250" height="100" fill="#1B043C" /》<br/>
    《rect x="100" y="50" width="200" height="100" fill="#1B043C" /》<br/>
    《circle cx="100" cy="100" r="50" fill="#472772" /》<br/>
    《text fill="#D7BFF3" font-size="28" font-family="Segoe UI Light" x="160" y="108"》CompanyName《/text》<br/>
《/svg>

![alt text](https://github.com/yang0339/HTML-LearningMaterial/blob/master/SVG%20syntax.jpg)


## Multimedia

example:<br/>

《video width="900" loop="loop" autoplay="autoplay" controls="controls" poster="starting_page_display.png"》<br/>
    《source src="advertisement.webm" type="audio/webm" /》<br/>
    《source src="advertisement.ogg" type="audio/ogg" /》<br/>
    《source src="advertisement.mp4" type="audio/mp4" /》<br/>
《/video》<br/>

Or to embed an YouTube Video Clip:<br/>

《iframe width="560" height="315" <br/>
  src="https://www.youtube.com/embed/1-UdWS4RAA4" frameborder="0" allowfullscreen》<br/>
《/iframe》<br/>

<hr/>
#### [HTML for Module 2](https://github.com/yang0339/HTML-LearningMaterial/blob/master/Module_2.html)
#### [CSS file (Semantic) for Module 2](https://github.com/yang0339/HTML-LearningMaterial/blob/master/Module_2_semantic.css)
#### [CSS file (figure) for Module 2](https://github.com/yang0339/HTML-LearningMaterial/blob/master/Module_2_figure.css)
#### Go to [this website](http://htmlpreview.github.io/?) to view the HTML.
