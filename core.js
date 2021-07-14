'use strict';
const walk = require("fs-walk");
const parse = require("parse-es-import");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const watch = require("node-watch");
const express = require("express");
const compiler = require("vue-template-compiler");
const ejs = require('ejs');
const HTMLParser = require('node-html-parser');
const isAbsoluteUrl = require('is-absolute-url');
const CSSOM = require('cssom');
const MarkdownIt = require('markdown-it')
const dev_mode = true;

function setup(public_html) {
    const md = new MarkdownIt();
    async function scanJavaScript_includes (params) {
        try {
            let inports = []
            const results = parse.default(params);
            for (const iterator of results) {
                
                inports.push({"remote":iterator.moduleName,"public_path":path.join(__dirname, "public_html",iterator.moduleName)})
                
            }
            console.log(inports);
            return inports;
            
        } catch (error) {
            console.log(error);
            
        }
    }
    function scanCSS_includes(params) {
        let url = []
        let out = CSSOM.parse(params)
          for (const iterator of out.cssRules) {
              if (iterator.href !== undefined) {
                url.push(iterator.href)
                inports.push({"remote":iterator.href,"public_path":path.join(__dirname, "public_html",iterator.href)})
              }
              
          }
          return url;
    }
    function scanSVG_includes(params) {
    }
    function scanHTML_includes(params) {
        console.log(css_loader);

        let url = []
        const root = HTMLParser.parse(params);
        let script_node = root.querySelectorAll("script");
        for (let index = 0; index < script_node.length ; index++) {
            const src =script_node[index].getAttribute("src");

           
            if (!isAbsoluteUrl(src) &  src !== undefined ) {
                url.push({"remote":src,"public_path":path.join(__dirname, "public_html",src)})
               
            }
        }
        let link_node = root.querySelectorAll("link");
        for (let index = 0; index < link_node.length ; index++) {
            const src =link_node[index].getAttribute("href");
           
            if (!isAbsoluteUrl(src) &  src !== undefined ) {
                url.push({"remote":src,"public_path":path.join(__dirname, "public_html", src)})
               
            }
        }
        let iframe_node = root.querySelectorAll("iframe");
        for (let index = 0; index < iframe_node.length ; index++) {
            const src = iframe_node[index].getAttribute("href");
           
            if (!isAbsoluteUrl(src) &  src !== undefined ) {
                url.push({"remote":src,"public_path":path.join(__dirname, "public_html", src)})
               
            }
        }
        let img_node = root.querySelectorAll("img");
        for (let index = 0; index < img_node.length ; index++) {
            const src = img_node[index].getAttribute("src");
            if (src !== undefined && !isAbsoluteUrl(src) ) {
                url.push({"remote":src,"public_path":path.join(__dirname, "public_html", src)})
               
            }
        }
        let object_node = root.querySelectorAll("object");
        for (let index = 0; index < object_node.length ; index++) {
            const src = object_node[index].getAttribute("src");
            if (src !== undefined && !isAbsoluteUrl(src) ) {
                url.push({"remote":src,"public_path":path.join(__dirname, "public_html", src)})
               
            }
        }
        let style_node = root.querySelectorAll("style");
        for (let index = 0; index < style_node.length ; index++) {
            const src = style_node[index].getAttribute("href");
           
            if (src !== undefined && !isAbsoluteUrl(src) ) {
                url.push({"remote":src,"public_path":path.join(__dirname, "public_html", src)})
               
            }
        }
        let source_node = root.querySelectorAll("source");
        for (let index = 0; index < style_node.length ; index++) {
            const src = source_node[index].getAttribute("src");
           
            if (src !== undefined && !isAbsoluteUrl(src) ) {
                url.push({"remote":src,"public_path":path.join(__dirname, "public_html", src)})
               
            }
        }
        let track_node = root.querySelectorAll("track");
        for (let index = 0; index < style_node.length ; index++) {
            const src = track_node[index].getAttribute("src");
           
            if (src !== undefined && !isAbsoluteUrl(src) ) {
                url.push({"remote":src,"public_path":path.join(__dirname, "public_html", src)})
               
            }
        }
        let portal_node = root.querySelectorAll("portal");
        for (let index = 0; index < style_node.length ; index++) {
            const src = portal_node[index].getAttribute("src");
           
            if (src !== undefined && !isAbsoluteUrl(src) ) {
                url.push({"remote":src,"public_path":path.join(__dirname, "public_html", src)})
               
            }
        }
        let src_embed = root.querySelectorAll("embed");
        for (let index = 0; index < style_node.length ; index++) {
            const src = src_embed[index].getAttribute("src");
            if (src !== undefined && !isAbsoluteUrl(src) ) {
                url.push({"remote":src,"public_path":path.join(__dirname, "public_html", src)})
               
            }
        }
        let src_audio = root.querySelectorAll("audio");
        for (let index = 0; index < src_audio.length ; index++) {
            const src = src_audio[index].getAttribute("src");
            if (src !== undefined && !isAbsoluteUrl(src) ) {
                url.push({"remote":src,"public_path":path.join(__dirname, "public_html", src)})
               
            }
        }
    }


    var router = express.Router();
    function vue(content) {
        const parsed = compiler.parseComponent(content);
        const template = parsed.template ? parsed.template.content : "";
        const script = parsed.script ? parsed.script.content : "";

        const templateEscaped = template.trim().replace(/`/g, "\\`");
        const scriptWithTemplate = script.match(/export default ?\{/)
            ? script.replace(
                /export default ?\{/,
                `$&\n\ttemplate: \`\n${templateEscaped}\`,`
            )
            : `${script}\n export default {\n\ttemplate: \`\n${templateEscaped}\`};`;
        return scriptWithTemplate;
    }
    let cache = {};

    async function file_get(file_path) {
        try {
        let ext = path.extname(file_path); 
        if ((ext === ".html") | (ext === ".htm")) {
            const data = fs.readFileSync(file_path, "utf8");
            let matterdata = matter(data);
            matterdata["mime_old"] = "text/html";
            matterdata["mime_new"] = "text/html";
            scanHTML_includes(matterdata.content);
            return matterdata;
        } else if (ext === ".md") {
            const data = fs.readFileSync(file_path, "utf8");
            let matterdata = matter(data);
            matterdata["mime_old"] = "text/md";
            matterdata["mime_new"] = "text/html";
            return matterdata;
        } else if (ext === ".vue") {
            const data = fs.readFileSync(file_path, "utf8");
            let matterdata = matter(data);
            matterdata["mime_old"] = "text/md";
            matterdata["mime_new"] = "text/html";
            matterdata.content = md.render(matterdata.content);
            return matterdata;
        }else if (ext === ".ejs") {
            const data = fs.readFileSync(file_path, "utf8");
            let matterdata = matter(data);
            matterdata["mime_old"] = "text/ejs";
            matterdata["mime_new"] = "text/javascript";
            matterdata.content = ejs.render(matterdata.content,matterdata.data);
            return matterdata;
        }else if (ext === ".js") {
            const data = fs.readFileSync(file_path, "utf8");
            let matterdata = matter(data);
            await scanJavaScript_includes(matterdata.content);
            return matterdata;
        }else if (ext === ".css") {
            const data = fs.readFileSync(file_path, "utf8");
            let matterdata = matter(data);
            await scanCSS_includes(matterdata.content);
            if(!dev_mode){
                matterdata.content = csspack(matterdata.content);
            }
            return matterdata;
        }
    } catch (error) {
        return null;
        
    }
        return null;
    }
     async function add_cache(file_path) {
        let ext = path.extname(file_path);
        if ((ext === ".html") | (ext === ".htm")) {
            cache[file_path] = await file_get(file_path);
        } else if (ext === ".md") {
              cache[file_path] = await file_get(file_path);
        } else if (ext === ".vue") {
             cache[file_path] = await file_get(file_path);
        } else if (ext === ".js") {
              cache[file_path] = await file_get(file_path);
        } else if (ext === ".css") {
            cache[file_path] = await file_get(file_path);
      }
        return null;
    }
    function remove_cache(file_path) {
        delete cache[file_path];
    }
      function setup_scan(path_fs) {
        walk.walkSync(path_fs, function (basedir, filename, stat) {
            const file_path = path.join(__dirname, basedir, filename);
            if (fs.existsSync(file_path)) {
                 add_cache(file_path);
            }
        });
    }
    function setup_watch(path_fs) {
        watch(path_fs, { recursive: true }, function (evt, name) {
            const file_path = path.join(__dirname, path_fs, name);
            switch (evt) {
                case "update":
                    add_cache(file_path);
                    break;
                case "remove":
                    remove_cache(file_path);
                    break;
            }
        });
    }
    router.use(function (req, res, next) {
        const file_path = path.join(__dirname, "public_html", req.path);
        if (!fs.existsSync(file_path) |(path.extname(file_path) == "") |(req.query.actualfile == "true")) {
             next();
             return;
        }
        if (cache[file_path]) {
            res.set('Content-Type', cache[file_path].mime_new);
             let data = res.send(cache[file_path].content)
            return;
        }
        const dataFs = fs.readFileSync(file_path, "utf8");
        const data = file_get(dataFs);
        if (data === null) {
            next();
            return;
        }
        else{
            res.set('Content-Type', data.mime_new);
            res.send(data.content)
            return;
        }
    });
    function cache_get() {
        return cache;
        
    }
    setup_scan(public_html);
    setup_watch(public_html);
    return {
        router: router,
        cache_get: cache_get
    };
}

module.exports = {
    setup: setup
};

