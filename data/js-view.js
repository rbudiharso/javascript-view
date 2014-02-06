setTimeout(function() {
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
        var dontBeautify = false;
        
        if(window["JSViewAPI_jid1-u9RbFp9JcoEGGw"]) {
            if(window["JSViewAPI_jid1-u9RbFp9JcoEGGw"].dontBeautify)
                dontBeautify = true;
        }
        
        pre.setAttribute('class', 'line-numbers');
        code.setAttribute('class', 'language-javascript');
        
        if(!dontBeautify) {
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
        } else {
            code.textContent = pre1.textContent;        
        }
        
        pre.appendChild(code);
        body.replaceChild(pre, pre1);

        Prism.highlightAll();
    }
}, 0);
