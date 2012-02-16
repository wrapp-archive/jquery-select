jquery-select.js
================
This plugin allows you to select (highlight) the text from any element, not just input elements.

There are two methods that are added:

* `selectText()` - Selects the text of the first element.
* `deselectText()` - A global function that deselects the current highlight.

Example usage
=============

    // Selects the text inside #some-element
    $('#some-element').selectText()

    // Selects the text of the first a-tag on the page
    $('a').selectText()

    // Deselects the currently selected text
    $.deselectText()

Requirements
============
* jQuery 1.0+

Compatability
=============
This plugin supports all major browsers including IE5.5+

Contact
=======
To report any problems or suggestions please use the [GitHub issue tracker](https://github.com/wrapp/jquery-select/issues).

License
=======
This plugin is licensed under the [MIT License](http://en.wikipedia.org/wiki/MIT_License).
