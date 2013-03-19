self.port.on("processSource", function() {
  var body = document.body,
  pre1 = body.children[0],
  pre2 = document.createElement('pre'),
  code = document.createElement('code'),
  lineHeight, lineCount, lineNumberWrapper;

  body.style.margin = 0;
  code.style.wordWrap = 'normal';

  code.setAttribute('data-language', 'javascript');
  code.textContent = js_beautify(pre1.textContent, {
    'unescape_strings': true,
    'jslint_happy': true,
    'brace_style': 'collapse',
    'break_chained_methods': false,
    'indent_scripts': 'normal',
    'indent_size': 4,
    'keep_array_indentation': false,
    'preserve_newlines': true,
    'space_after_anon_function': true,
    'space_before_conditional': true
  });

  pre2.appendChild(code);

  body.replaceChild(pre2, pre1);
  Rainbow.color();

  lineHeight = parseInt(window.getComputedStyle(code, null).lineHeight, 10);
  lineCount = Math.ceil(code.offsetHeight / lineHeight);

  lineNumberWrapper = document.createElement('ol');
  lineNumberWrapper.setAttribute('class', 'line-number');

  for (var i = 0; i < lineCount; i++) {
    var lineNumber = document.createElement('li');
    lineNumber.textContent = i + 1;
    lineNumberWrapper.appendChild(lineNumber);
  }
  pre2.insertBefore(lineNumberWrapper, pre2.firstChild);

  var lineNumberWidth = lineNumberWrapper.lastChild.offsetWidth;
  pre2.style.paddingLeft = (lineNumberWidth + 20) + 'px';
});
