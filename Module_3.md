# Cascading Style Sheet (CSS)

Cascading Style Sheets (CSS) is a language that controls and allows one to define the look of an HTML document. It permits the separation between the content of the HTML document from the style of the HTML file. With CSS, it is much easier to manage the appearance of multiple web pages since it separates the HTML element from display information. CSS also enables faster downloading of web pages, which works best with older computers and modems. It provides a method for retaining a common style.

The coding of CSS style rules can be done in three places, namely:

* **Inline** - done in the HTML tag.
* **Internal Style Sheet** - coded at the beginning of a HTML document i.e. inside the ```<head></head> ``` tags, and closed by the ```<style type=“text/css”></style>``` tags.
* **External Style Sheet** - this is a separate file with a .css extension which serves as a reference for multiple HTML pages to use. A link is defined in the header of the HTML pages pointing browsers to where to look for the styles.

### CSS Syntax

* **CSS selectors** - this is the core foundation of CSS since it defines the HTML element being manipulated with the CSS code.
* **The declaration** - consists of one or more **property-value** pairs where the property is the CSS element or style being manipulated and the value represents the value of the specified property. Each property-value pair usually ends in a semi-colon and the declaration is enclosed in curly brackets. 

For example, ```h1 {color: red;}```.

There could be anyway, some variations on the naming/targeting, the followings are all valid syntax:

* **body** { font-weight: bold; } 
* **header, footer** { background-color: black; color: white; } //this one change the style of both header and footer
* **section > nav** { background-color: darkgray; }  // this one select only the **direct** *nav* child in *section*
* **section article** { background-color: lightgray; } // this one could select **every** *article* component under *section*
* **section > article nav** {background-color: lightblue;} // this one combines the previous two syntax

### CSS IDs

A CSS ID is a unique identifier for an element which can only be declared once within the same HTML file and is normally very specific.They are used to style the layout elements of an HTML page and is usually preceded by a hash sign **(“#”)**. CSS can be instructed to grab onto the ID attribute, so as to style an element with particular ID in a certain way.

The ID attribute can be used as the target of an internal link, replacing anchor tags with name attributes. Clear and logical IDs can also serve as a sort of “self-documentation” within the document. For example, one does not necessarily need to add a comment before a block stating that a block of code will contain the main content if the opening tag of the block has an ID of "main" or "header".

IDs are used as fragment identifiers (an href that ends in #anchor directs one to id="anchor"), and for JavaScript’s **getElementById**.


### INHERITING CSS STYLES

Inheriting CSS Styles is the process by which styling rules of a parent element are applied (inherited) by multiple elements thus making the children of the parent element inherit the characteristics of its parent as far as these properties are concerned. However, some CSS properties are automatically inherited, while some like margins and borders, cannot be inherited since they may conflict with the elements that are already set to the child elements.

The inheritance mechanism is separate from the cascade in that inheritance only applies to the Document Object Model (DOM) tree, while the cascade is concerned with the style sheet rules. However, CSS properties attached to an element via cascade can be inherited by the child elements of the parent.

#### Inheritance Order:
When you apply CSS styles to a HTML page, these styles join an ascending order of inheritance It is important to understand where your content exists in this order of inheritance. Items at the bottom of this table are considered "more important" and will override items that proceed them: **Author CSS > User settings > Browser stylesheet**.

#### The !important keyword
In CSS you can use the keyword **!important** to override existing CSS declarations (styles) and skip to the front of the order of inheritance.
example:<br/>
```css
body {
    color: red !important;
}
```


### Box Model

#### Margin and Padding

-- The margin property in CSS defines the space between an HTML element and the surrounding element. Margin attributes can be defined using actual values, and can be defined with the use of **percentages** as well. 

-- CSS margin: 4 values If all the four values are declared i.e. margin: 10px 10px 10px 10px;, corresponding order will be as follows; ***top, right, bottom, left***.

-- When only employing **two values**, the first will define the margin on the top and bottom whereas the second value will define the margin on the left and right.

-- CSS margin: margin- (direction): The individual margins can be defined by adding a direction suffix to the margin attribute. This means that when one direction is defined other three margins are left intact.

-- The Padding property in CSS defines the amount of space that should appear between the content of an element and the element border.

### CSS Media Queries

CSS Media Queries allow us to conditionally apply CSS in specific scenarios based on properties of our current browser. Using these Media Queries, we can provide a custom experience that is responsive and that reacts to changes in our user's browser environment such as resizing, print preview or switching to a screen reader.

Example:
This media query is applied only if the user is looking at the browser through a screen (desktop, tablet, phone, laptop, etc.). This is the most common scenario. In this example, we have a lively background color of red for our web application.
```css
@media screen {
    body {
        background-color: red;
    }
}
```


### CSS Font Properties

If we are unsure which fonts are installed on the user browser, we can specify multiple fonts. The browser will attempt to load the fonts from left to right until it finds a font that exists:

```css
article {
    font-family: "Palatino Linotype", "Book Antiqua", Palatino ;
}
header {
    font-family: "Lucida Sans Unicode", "Lucida Grande", Arial ;
}
```
User-Define Font Families:
Example:
```css
@font-face {
    font-family: "Simple Font";
    font-style: italic;
    src: url(simplefont_italic.ttf);
}

body {
    font-family: "Simple Font"; 
}
```


#### [HTML for Module 3](https://github.com/yang0339/HTML-LearningMaterial/blob/master/Module_3.html)
#### [CSS file for Module 3](https://github.com/yang0339/HTML-LearningMaterial/blob/master/Module_3.css)
#### Go to [this website](http://htmlpreview.github.io/?) to view the HTML.
