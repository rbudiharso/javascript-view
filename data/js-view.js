self.port.on("processSource", function() {
  var body = document.body;
  var pre1 = body.children[0];
  var pre2 = document.createElement('pre');
  var code = document.createElement('code');

  body.setAttribute('style', 'margin: 0;');
  code.setAttribute('style', 'word-wrap: normal;');

  code.setAttribute('data-language', 'javascript');
  code.setAttribute('data-disable-lines', 'true');
  code.innerHTML = js_beautify(pre1.innerHTML);

  pre2.appendChild(code);

  body.replaceChild(pre2, pre1);
  Rainbow.color();
});
