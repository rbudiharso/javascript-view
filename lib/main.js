var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: /.*\.js.*/,
  contentScriptFile: [data.url("rainbow.min.js"), data.url("javascript.js"), data.url("beautify.js"), data.url("js-view.js")],
  contentStyleFile: [data.url("solarized.light.css"), data.url("line-number.css")],
  onAttach: function(worker) {
    worker.port.emit("processSource");
  }
});
