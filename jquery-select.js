(function($, doc, win) {
  $.fn.selectText = function() {
    if(this.length > 0) {
      var element = this.get(0);

      if(typeof element.select === 'function') { // For textareas and inputs
        element.select();
      }
      else if(typeof doc.body.createTextRange === 'function') { // ms
          var range = doc.body.createTextRange();
          range.moveToElementText(element);
          range.select();
      } else if(typeof win.getSelection === 'function') { // webkit, presto, gecko
          var selection = win.getSelection();
          var range = doc.createRange();
          range.selectNodeContents(element);
          selection.removeAllRanges();
          selection.addRange(range);
      }
    }

    return this;
  }

  $.deselectText = function() {
    if(doc.selection)
      doc.selection.empty();
    else if(win.getSelection)
      win.getSelection().removeAllRanges();

    return this;
  }

})(jQuery, document, window);
