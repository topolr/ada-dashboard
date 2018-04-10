let app = {
    name: "ada-template-web",
    source_path: "./src/",
    dist_path: "./dist/",
    description: "A simply web template of ada.",
    main: "./src/root.js",
    entry_path: "./src/pages",
    ada_autobundle:false,
    icons: [
        {"src": "logos/48@2x.png", "sizes": "48x48", "type": "image/png"},
        {"src": "logos/72@2x.png", "sizes": "72x72", "type": "image/png"},
        {"src": "logos/96@2x.png", "sizes": "96x96", "type": "image/png"},
        {"src": "logos/144@2x.png", "sizes": "144x144", "type": "image/png"},
        {"src": "logos/168@2x.png", "sizes": "168x168", "type": "image/png"},
        {"src": "logos/192@2x.png", "sizes": "192x192", "type": "image/png"}
    ],
    compiler: {
        babel: {
            presets: [
                "@babel/typescript", ["@babel/env", {"targets": {"chrome": "60"}}]
            ]
        }
    }
};
export default app;