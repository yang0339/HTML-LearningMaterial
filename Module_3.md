# Cascading Style Sheet (CSS)

Cascading Style Sheets (CSS) is a language that controls and allows one to define the look of an HTML document. It permits the separation between the content of the HTML document from the style of the HTML file. With CSS, it is much easier to manage the appearance of multiple web pages since it separates the HTML element from display information. CSS also enables faster downloading of web pages, which works best with older computers and modems. It provides a method for retaining a common style.

The coding of CSS style rules can be done in three places, namely:

* **Inline** - done in the HTML tag.
* **Internal Style Sheet** - coded at the beginning of a HTML document i.e. inside the <head></head> tags, and closed by the 《style type=“text/css”》 《/style》 tags.
* **External Style Sheet** - this is a separate file with a .css extension which serves as a reference for multiple HTML pages to use. A link is defined in the header of the HTML pages pointing browsers to where to look for the styles.

### CSS Syntax

* **CSS selectors** - this is the core foundation of CSS since it defines the HTML element being manipulated with the CSS code.
* **The declaration** - consists of one or more **property-value** pairs where the property is the CSS element or style being manipulated and the value represents the value of the specified property. Each property-value pair usually ends in a semi-colon and the declaration is enclosed in curly brackets. 

For example, <em><strong>h1 {color: red;}</strong></em>.

There could be anyway, some variations on the naming/targeting, the followings are all valid syntax:

* **body** { font-weight: bold; } 
* **header, footer** { background-color: black; color: white; } //this one change the style of both header and footer
* **section > nav** { background-color: darkgray; }  // this one select only the **direct** *nav* child in *section*
* **section article** { background-color: lightgray; } // this one could select **every** *article* component under *section*

