var { url } = require("sdk/self").data;

require("sdk/page-mod").PageMod({
    include: /.*\.js.*/,
    contentScriptFile: [
      url("beautify.js"),
      url("prism.js"),
      url("js-view.js")
    ],
    contentStyleFile: [
      url("prism.css"),
      url("js-view.css")
    ],
    attachTo: ["existing", "top"]
});
