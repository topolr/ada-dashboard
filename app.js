let app = {
    name: "test",
    siteURL: "/",
    sourcePath: "./src/",
    distPath: "./dist/",
    indexPath: "./dist/index.html",
    entryPath: "./src/test/",
    main: "./src/root.js",
    staticPath: "./src/static",
    baseInfo: {
        name: "test",
        description: "test",
        icons: [],
        charset: "UTF-8",
        meta: [
            { name: 'viewport', content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no" },
            { name: 'format_detection', content: "telephone=no" },
            { name: 'apple_mobile_web_app_status_bar_style', content: "white" },
            { name: 'apple_mobile_web_app_capable', content: "yes" }
        ]
    },
    indexPaths() {
        let urls = [];
        let set = (data) => {
            data.forEach(a => {
                urls.push(a.path);
                set(a.sub || []);
            });
        }
        set(require("./src/static/menu.json").data);
        return urls;
    },
    ssr: {
        urls: ["/"],
        output: "./dist2/"
    }
};
module.exports = app;