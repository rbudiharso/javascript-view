var data = require("sdk/self").data,
    pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: /.*\.js.*/,
    contentScriptFile: [data.url("beautify.js"), data.url("prism.js"), data.url("js-view.js")],
    contentStyleFile: [data.url("prism.css")],
    attachTo: ["existing", "top"],
    onAttach: function (worker) {
        worker.port.emit("processSource");
    }
});
