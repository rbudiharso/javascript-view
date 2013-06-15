self.port.on("processSource", function () {
    var body = document.body,
    pre1 = body.children[0],
    pre = document.createElement('pre'),
    code = document.createElement('code'),
    content = document.contentType,
    contentIsAcceptable = function(content) {
        return (content === 'application/javascript') ||
        (content === 'application/x-javascript') ||
        (content === 'text/plain') ||
        (content === 'application/json')
    };

    if (contentIsAcceptable(content)) {
        pre.setAttribute('class', 'line-numbers');
        code.setAttribute('class', 'language-javascript');
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

        pre.appendChild(code);
        body.replaceChild(pre, pre1);

        Prism.highlightAll();

        bgColor = window.getComputedStyle(document.getElementsByTagName('pre')[0]).backgroundColor;
        document.getElementsByTagName('html')[0].style.backgroundColor = bgColor;
    };
});
