self.port.on("processSource", function() {
  var body = document.body;
  var pre1 = body.children[0];
  var pre2 = document.createElement('pre');
  var code = document.createElement('code');

  body.setAttribute('style', 'margin: 0;');
  code.setAttribute('style', 'word-wrap: normal;');

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
  // code.innerHTML = pre1.innerHTML;

  pre2.appendChild(code);

  body.replaceChild(pre2, pre1);
  Rainbow.color();
});
