// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"caugW":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = true;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "106c69fefbb3188c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bDbGG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _legoBoostBrowser = require("lego-boost-browser");
var _legoBoostBrowserDefault = parcelHelpers.interopDefault(_legoBoostBrowser);
function controller() {
    this.boost = null;
    this.v = 0.0;
    this.direction = 0.0;
    this.accelerometer = new Accelerometer();
    this.drive = function(v, direction) {
        this.v = v;
        this.direction = direction;
    };
    this.move = function() {
        let a = this.v * (this.direction > 0 ? 1.0 - this.direction : 1);
        let b = this.v * (this.direction < 0 ? 1.0 + this.direction : 1);
        this.boost.motorTime("A", 0.5, a);
        this.boost.motorTime("B", 0.5, b);
    };
}
const ctx = new controller();
function showAcc() {
    let acc = document.getElementById("acc");
    acc.innerText = `${ctx.accelerometer.x} ${ctx.accelerometer.y} ${ctx.accelerometer.z}`;
}
function initAcc() {
    navigator.permissions.query({
        name: "accelerometer"
    }).then(()=>setInterval(showAcc, 300));
}
function init() {
    document.getElementById("start").onclick = start;
    document.getElementById("fw").onclick = ()=>ctx.drive(100, 0);
    document.getElementById("left").onclick = ()=>ctx.drive(100, 1);
    document.getElementById("right").onclick = ()=>ctx.drive(100, -1);
    document.getElementById("stop").onclick = ()=>ctx.drive(0, 0);
    initAcc();
}
function start() {
    let boost = new (0, _legoBoostBrowserDefault.default)();
    boost.connect().then(()=>{
        ctx.boost = boost;
        setInterval(()=>ctx.move(), 100);
    });
    console.info(boost);
}
document.addEventListener("DOMContentLoaded", init);

},{"lego-boost-browser":"55k8r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"55k8r":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var boostConnector_1 = require("8af2698001f164a2");
var hubAsync_1 = require("e15789ac0bc983bf");
var hub_control_1 = require("c7cef5ba18dd83c3");
var LegoBoost = /** @class */ function() {
    function LegoBoost() {
        this.logDebug = function(s) {};
        /**
         * Information from Lego Boost motors and sensors
         * @property LegoBoost#deviceInfo
         */ this.deviceInfo = {
            ports: {
                A: {
                    action: "",
                    angle: 0
                },
                B: {
                    action: "",
                    angle: 0
                },
                AB: {
                    action: "",
                    angle: 0
                },
                C: {
                    action: "",
                    angle: 0
                },
                D: {
                    action: "",
                    angle: 0
                },
                LED: {
                    action: "",
                    angle: 0
                }
            },
            tilt: {
                roll: 0,
                pitch: 0
            },
            distance: Number.MAX_SAFE_INTEGER,
            rssi: 0,
            color: "",
            error: "",
            connected: false
        };
        /**
         * Input data to used on manual and AI control
         * @property LegoBoost#controlData
         */ this.controlData = {
            input: null,
            speed: 0,
            turnAngle: 0,
            tilt: {
                roll: 0,
                pitch: 0
            },
            forceState: null,
            updateInputMode: null,
            controlUpdateTime: undefined,
            state: undefined
        };
    }
    /**
     * Drive forward until wall is reaced or drive backwards 100meters
     * @method LegoBoost#connect
     * @param {BoostConfiguration} [configuration={}] Lego boost motor and control configuration
     * @returns {Promise}
     */ LegoBoost.prototype.connect = function(configuration) {
        if (configuration === void 0) configuration = {};
        return __awaiter(this, void 0, void 0, function() {
            var bluetooth, e_1;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        _a.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        this.configuration = configuration;
                        return [
                            4 /*yield*/ ,
                            boostConnector_1.BoostConnector.connect(this.handleGattDisconnect.bind(this))
                        ];
                    case 1:
                        bluetooth = _a.sent();
                        this.initHub(bluetooth, this.configuration);
                        return [
                            3 /*break*/ ,
                            3
                        ];
                    case 2:
                        e_1 = _a.sent();
                        console.log("Error from connect: " + e_1);
                        return [
                            3 /*break*/ ,
                            3
                        ];
                    case 3:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    LegoBoost.prototype.initHub = function(bluetooth, configuration) {
        return __awaiter(this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        this.hub = new hubAsync_1.HubAsync(bluetooth, configuration);
                        this.hub.logDebug = this.logDebug;
                        this.hub.emitter.on("disconnect", function(evt) {
                            return __awaiter(_this, void 0, void 0, function() {
                                return __generator(this, function(_a) {
                                    return [
                                        2 /*return*/ 
                                    ];
                                });
                            });
                        });
                        this.hub.emitter.on("connect", function(evt) {
                            return __awaiter(_this, void 0, void 0, function() {
                                return __generator(this, function(_a) {
                                    switch(_a.label){
                                        case 0:
                                            this.hub.afterInitialization();
                                            return [
                                                4 /*yield*/ ,
                                                this.hub.ledAsync("white")
                                            ];
                                        case 1:
                                            _a.sent();
                                            this.logDebug("Connected");
                                            return [
                                                2 /*return*/ 
                                            ];
                                    }
                                });
                            });
                        });
                        this.hubControl = new hub_control_1.HubControl(this.deviceInfo, this.controlData, configuration);
                        return [
                            4 /*yield*/ ,
                            this.hubControl.start(this.hub)
                        ];
                    case 1:
                        _a.sent();
                        this.updateTimer = setInterval(function() {
                            _this.hubControl.update();
                        }, 100);
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    LegoBoost.prototype.handleGattDisconnect = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                this.logDebug("handleGattDisconnect");
                if (this.deviceInfo.connected === false) return [
                    2 /*return*/ 
                ];
                this.hub.setDisconnected();
                this.deviceInfo.connected = false;
                clearInterval(this.updateTimer);
                this.logDebug("Disconnected");
                return [
                    2 /*return*/ 
                ];
            });
        });
    };
    /**
     * Change the color of the led between pink and orange
     * @method LegoBoost#changeLed
     * @returns {Promise}
     */ LegoBoost.prototype.changeLed = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.hub || this.hub.connected === false) return [
                            2 /*return*/ 
                        ];
                        this.color = this.color === "pink" ? "orange" : "pink";
                        return [
                            4 /*yield*/ ,
                            this.hub.ledAsync(this.color)
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * Drive forward until wall is reaced or drive backwards 100meters
     * @method LegoBoost#driveToDirection
     * @param {number} [direction=1] Direction to drive. 1 or positive is forward, 0 or negative is backwards.
     * @returns {Promise}
     */ LegoBoost.prototype.driveToDirection = function(direction) {
        if (direction === void 0) direction = 1;
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.preCheck()) return [
                            2 /*return*/ 
                        ];
                        if (!(direction > 0)) return [
                            3 /*break*/ ,
                            2
                        ];
                        return [
                            4 /*yield*/ ,
                            this.hub.driveUntil()
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                    case 2:
                        return [
                            4 /*yield*/ ,
                            this.hub.drive(-10000)
                        ];
                    case 3:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    /**
     * Disconnect Lego Boost
     * @method LegoBoost#disconnect
     * @returns {boolean|undefined}
     */ LegoBoost.prototype.disconnect = function() {
        if (!this.hub || this.hub.connected === false) return;
        this.hub.setDisconnected();
        var success = boostConnector_1.BoostConnector.disconnect();
        return success;
    };
    /**
     * Start AI mode
     * @method LegoBoost#ai
     */ LegoBoost.prototype.ai = function() {
        if (!this.hub || this.hub.connected === false) return;
        this.hubControl.setNextState("Drive");
    };
    /**
     * Stop engines A and B
     * @method LegoBoost#stop
     * @returns {Promise}
     */ LegoBoost.prototype.stop = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.preCheck()) return [
                            2 /*return*/ 
                        ];
                        this.controlData.speed = 0;
                        this.controlData.turnAngle = 0;
                        return [
                            4 /*yield*/ ,
                            this.hub.motorTimeMultiAsync(1, 0, 0)
                        ];
                    case 1:
                        // control datas values might have always been 0, execute force stop
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    /**
     * Update Boost motor and control configuration
     * @method LegoBoost#updateConfiguration
     * @param {BoostConfiguration} configuration Boost motor and control configuration
     */ LegoBoost.prototype.updateConfiguration = function(configuration) {
        if (!this.hub) return;
        this.hub.updateConfiguration(configuration);
        this.hubControl.updateConfiguration(configuration);
    };
    // Methods from Hub
    /**
     * Control the LED on the Move Hub
     * @method LegoBoost#led
     * @param {boolean|number|string} color
     * If set to boolean `false` the LED is switched off, if set to `true` the LED will be white.
     * Possible string values: `off`, `pink`, `purple`, `blue`, `lightblue`, `cyan`, `green`, `yellow`, `orange`, `red`,
     * `white`
     */ LegoBoost.prototype.led = function(color) {
        if (!this.preCheck()) return;
        this.hub.led(color);
    };
    /**
     * Control the LED on the Move Hub
     * @method LegoBoost#ledAsync
     * @param {boolean|number|string} color
     * If set to boolean `false` the LED is switched off, if set to `true` the LED will be white.
     * Possible string values: `off`, `pink`, `purple`, `blue`, `lightblue`, `cyan`, `green`, `yellow`, `orange`, `red`,
     * `white`
     * @returns {Promise}
     */ LegoBoost.prototype.ledAsync = function(color) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.preCheck()) return [
                            2 /*return*/ 
                        ];
                        return [
                            4 /*yield*/ ,
                            this.hub.ledAsync(color)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    /**
     * Run a motor for specific time
     * @param {string|number} port possible string values: `A`, `B`, `AB`, `C`, `D`.
     * @param {number} seconds
     * @param {number} [dutyCycle=100] motor power percentage from `-100` to `100`. If a negative value is given rotation
     * is counterclockwise.
     */ LegoBoost.prototype.motorTime = function(port, seconds, dutyCycle) {
        if (dutyCycle === void 0) dutyCycle = 100;
        if (!this.preCheck()) return;
        this.hub.motorTime(port, seconds, dutyCycle);
    };
    /**
     * Run a motor for specific time
     * @method LegoBoost#motorTimeAsync
     * @param {string|number} port possible string values: `A`, `B`, `AB`, `C`, `D`.
     * @param {number} seconds
     * @param {number} [dutyCycle=100] motor power percentage from `-100` to `100`. If a negative value is given rotation
     * is counterclockwise.
     * @param {boolean} [wait=false] will promise wait unitll motorTime run time has elapsed
     * @returns {Promise}
     */ LegoBoost.prototype.motorTimeAsync = function(port, seconds, dutyCycle, wait) {
        if (dutyCycle === void 0) dutyCycle = 100;
        if (wait === void 0) wait = true;
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.preCheck()) return [
                            2 /*return*/ 
                        ];
                        return [
                            4 /*yield*/ ,
                            this.hub.motorTimeAsync(port, seconds, dutyCycle, wait)
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * Run both motors (A and B) for specific time
     * @param {number} seconds
     * @param {number} dutyCycleA motor power percentage from `-100` to `100`. If a negative value is given rotation
     * is counterclockwise.
     * @param {number} dutyCycleB motor power percentage from `-100` to `100`. If a negative value is given rotation
     * is counterclockwise.
     * @param {function} callback
     */ LegoBoost.prototype.motorTimeMulti = function(seconds, dutyCycleA, dutyCycleB) {
        if (dutyCycleA === void 0) dutyCycleA = 100;
        if (dutyCycleB === void 0) dutyCycleB = 100;
        if (!this.preCheck()) return;
        this.hub.motorTimeMulti(seconds, dutyCycleA, dutyCycleB);
    };
    /**
     * Run both motors (A and B) for specific time
     * @method LegoBoost#motorTimeMultiAsync
     * @param {number} seconds
     * @param {number} [dutyCycleA=100] motor power percentage from `-100` to `100`. If a negative value is given rotation
     * is counterclockwise.
     * @param {number} [dutyCycleB=100] motor power percentage from `-100` to `100`. If a negative value is given rotation
     * is counterclockwise.
     * @param {boolean} [wait=false] will promise wait unitll motorTime run time has elapsed
     * @returns {Promise}
     */ LegoBoost.prototype.motorTimeMultiAsync = function(seconds, dutyCycleA, dutyCycleB, wait) {
        if (dutyCycleA === void 0) dutyCycleA = 100;
        if (dutyCycleB === void 0) dutyCycleB = 100;
        if (wait === void 0) wait = true;
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.preCheck()) return [
                            2 /*return*/ 
                        ];
                        return [
                            4 /*yield*/ ,
                            this.hub.motorTimeMultiAsync(seconds, dutyCycleA, dutyCycleB, wait)
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * Turn a motor by specific angle
     * @param {string|number} port possible string values: `A`, `B`, `AB`, `C`, `D`.
     * @param {number} angle - degrees to turn from `0` to `2147483647`
     * @param {number} [dutyCycle=100] motor power percentage from `-100` to `100`. If a negative value is given
     * rotation is counterclockwise.
     */ LegoBoost.prototype.motorAngle = function(port, angle, dutyCycle) {
        if (dutyCycle === void 0) dutyCycle = 100;
        if (!this.preCheck()) return;
        this.hub.motorAngle(port, angle, dutyCycle);
    };
    /**
     * Turn a motor by specific angle
     * @method LegoBoost#motorAngleAsync
     * @param {string|number} port possible string values: `A`, `B`, `AB`, `C`, `D`.
     * @param {number} angle - degrees to turn from `0` to `2147483647`
     * @param {number} [dutyCycle=100] motor power percentage from `-100` to `100`. If a negative value is given
     * rotation is counterclockwise.
     * @param {boolean} [wait=false] will promise wait unitll motorAngle has turned
     * @returns {Promise}
     */ LegoBoost.prototype.motorAngleAsync = function(port, angle, dutyCycle, wait) {
        if (dutyCycle === void 0) dutyCycle = 100;
        if (wait === void 0) wait = true;
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.preCheck()) return [
                            2 /*return*/ 
                        ];
                        return [
                            4 /*yield*/ ,
                            this.hub.motorAngleAsync(port, angle, dutyCycle, wait)
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * Turn both motors (A and B) by specific angle
     * @method LegoBoost#motorAngleMulti
     * @param {number} angle degrees to turn from `0` to `2147483647`
     * @param {number} dutyCycleA motor power percentage from `-100` to `100`. If a negative value is given
     * rotation is counterclockwise.
     * @param {number} dutyCycleB motor power percentage from `-100` to `100`. If a negative value is given
     * rotation is counterclockwise.
     */ LegoBoost.prototype.motorAngleMulti = function(angle, dutyCycleA, dutyCycleB) {
        if (dutyCycleA === void 0) dutyCycleA = 100;
        if (dutyCycleB === void 0) dutyCycleB = 100;
        if (!this.preCheck()) return;
        this.hub.motorAngleMulti(angle, dutyCycleA, dutyCycleB);
    };
    /**
     * Turn both motors (A and B) by specific angle
     * @method LegoBoost#motorAngleMultiAsync
     * @param {number} angle degrees to turn from `0` to `2147483647`
     * @param {number} [dutyCycleA=100] motor power percentage from `-100` to `100`. If a negative value is given
     * rotation is counterclockwise.
     * @param {number} [dutyCycleB=100] motor power percentage from `-100` to `100`. If a negative value is given
     * rotation is counterclockwise.
     * @param {boolean} [wait=false] will promise wait unitll motorAngle has turned
     * @returns {Promise}
     */ LegoBoost.prototype.motorAngleMultiAsync = function(angle, dutyCycleA, dutyCycleB, wait) {
        if (dutyCycleA === void 0) dutyCycleA = 100;
        if (dutyCycleB === void 0) dutyCycleB = 100;
        if (wait === void 0) wait = true;
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.preCheck()) return [
                            2 /*return*/ 
                        ];
                        return [
                            4 /*yield*/ ,
                            this.hub.motorAngleMultiAsync(angle, dutyCycleA, dutyCycleB, wait)
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * Drive specified distance
     * @method LegoBoost#drive
     * @param {number} distance distance in centimeters (default) or inches. Positive is forward and negative is backward.
     * @param {boolean} [wait=true] will promise wait untill the drive has completed.
     * @returns {Promise}
     */ LegoBoost.prototype.drive = function(distance, wait) {
        if (wait === void 0) wait = true;
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.preCheck()) return [
                            2 /*return*/ 
                        ];
                        return [
                            4 /*yield*/ ,
                            this.hub.drive(distance, wait)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    /**
     * Turn robot specified degrees
     * @method LegoBoost#turn
     * @param {number} degrees degrees to turn. Negative is to the left and positive to the right.
     * @param {boolean} [wait=true] will promise wait untill the turn has completed.
     * @returns {Promise}
     */ LegoBoost.prototype.turn = function(degrees, wait) {
        if (wait === void 0) wait = true;
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.preCheck()) return [
                            2 /*return*/ 
                        ];
                        return [
                            4 /*yield*/ ,
                            this.hub.turn(degrees, wait)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    /**
     * Drive untill sensor shows object in defined distance
     * @method LegoBoost#driveUntil
     * @param {number} [distance=0] distance in centimeters (default) or inches when to stop. Distance sensor is not very sensitive or accurate.
     * By default will stop when sensor notices wall for the first time. Sensor distance values are usualy between 110-50.
     * @param {boolean} [wait=true] will promise wait untill the bot will stop.
     * @returns {Promise}
     */ LegoBoost.prototype.driveUntil = function(distance, wait) {
        if (distance === void 0) distance = 0;
        if (wait === void 0) wait = true;
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.preCheck()) return [
                            2 /*return*/ 
                        ];
                        return [
                            4 /*yield*/ ,
                            this.hub.driveUntil(distance, wait)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    /**
     * Turn until there is no object in sensors sight
     * @method LegoBoost#turnUntil
     * @param {number} [direction=1] direction to turn to. 1 (or any positive) is to the right and 0 (or any negative) is to the left.
     * @param {boolean} [wait=true] will promise wait untill the bot will stop.
     * @returns {Promise}
     */ LegoBoost.prototype.turnUntil = function(direction, wait) {
        if (direction === void 0) direction = 1;
        if (wait === void 0) wait = true;
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.preCheck()) return [
                            2 /*return*/ 
                        ];
                        return [
                            4 /*yield*/ ,
                            this.hub.turnUntil(direction, wait)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    /**
     * Send raw data
     * @param {object} raw raw data
     */ LegoBoost.prototype.rawCommand = function(raw) {
        if (!this.preCheck()) return;
        return this.hub.rawCommand(raw);
    };
    LegoBoost.prototype.preCheck = function() {
        if (!this.hub || this.hub.connected === false) return false;
        this.hubControl.setNextState("Manual");
        return true;
    };
    return LegoBoost;
}();
exports.default = LegoBoost;

},{"8af2698001f164a2":"bjE7T","e15789ac0bc983bf":"a85GL","c7cef5ba18dd83c3":"coIgU"}],"bjE7T":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BoostConnector = void 0;
var BOOST_HUB_SERVICE_UUID = "00001623-1212-efde-1623-785feabcd123";
var BOOST_CHARACTERISTIC_UUID = "00001624-1212-efde-1623-785feabcd123";
var BoostConnector = /** @class */ function() {
    function BoostConnector() {}
    BoostConnector.connect = function(disconnectCallback) {
        return __awaiter(this, void 0, void 0, function() {
            var options, _a;
            var _this = this;
            return __generator(this, function(_b) {
                switch(_b.label){
                    case 0:
                        options = {
                            acceptAllDevices: false,
                            filters: [
                                {
                                    services: [
                                        BOOST_HUB_SERVICE_UUID
                                    ]
                                }
                            ],
                            optionalServices: [
                                BOOST_HUB_SERVICE_UUID
                            ]
                        };
                        _a = this;
                        return [
                            4 /*yield*/ ,
                            navigator.bluetooth.requestDevice(options)
                        ];
                    case 1:
                        _a.device = _b.sent();
                        this.device.addEventListener("gattserverdisconnected", function(event) {
                            return __awaiter(_this, void 0, void 0, function() {
                                return __generator(this, function(_a) {
                                    switch(_a.label){
                                        case 0:
                                            return [
                                                4 /*yield*/ ,
                                                disconnectCallback()
                                            ];
                                        case 1:
                                            _a.sent();
                                            return [
                                                2 /*return*/ 
                                            ];
                                    }
                                });
                            });
                        });
                        // await this.device.watchAdvertisements();
                        // this.device.addEventListener('advertisementreceived', event => {
                        //   // @ts-ignore
                        //   console.log(event.rssi);
                        // });
                        return [
                            2 /*return*/ ,
                            BoostConnector.getCharacteristic(this.device)
                        ];
                }
            });
        });
    };
    BoostConnector.getCharacteristic = function(device) {
        return __awaiter(this, void 0, void 0, function() {
            var server, service;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            device.gatt.connect()
                        ];
                    case 1:
                        server = _a.sent();
                        return [
                            4 /*yield*/ ,
                            server.getPrimaryService(BOOST_HUB_SERVICE_UUID)
                        ];
                    case 2:
                        service = _a.sent();
                        return [
                            4 /*yield*/ ,
                            service.getCharacteristic(BOOST_CHARACTERISTIC_UUID)
                        ];
                    case 3:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    BoostConnector.reconnect = function() {
        return __awaiter(this, void 0, void 0, function() {
            var bluetooth;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.device) return [
                            3 /*break*/ ,
                            2
                        ];
                        return [
                            4 /*yield*/ ,
                            BoostConnector.getCharacteristic(this.device)
                        ];
                    case 1:
                        bluetooth = _a.sent();
                        return [
                            2 /*return*/ ,
                            [
                                true,
                                bluetooth
                            ]
                        ];
                    case 2:
                        return [
                            2 /*return*/ ,
                            [
                                false,
                                null
                            ]
                        ];
                }
            });
        });
    };
    BoostConnector.disconnect = function() {
        if (this.device) {
            this.device.gatt.disconnect();
            return true;
        }
        return false;
    };
    BoostConnector.isWebBluetoothSupported = navigator.bluetooth ? true : false;
    return BoostConnector;
}();
exports.BoostConnector = BoostConnector;

},{}],"a85GL":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HubAsync = exports.DEFAULT_CONFIG = void 0;
var hub_1 = require("7ceb2ed30621334d");
var CALLBACK_TIMEOUT_MS = 1000 / 3;
exports.DEFAULT_CONFIG = {
    METRIC_MODIFIER: 28.5,
    TURN_MODIFIER: 2.56,
    DRIVE_SPEED: 25,
    TURN_SPEED: 20,
    DEFAULT_STOP_DISTANCE: 105,
    DEFAULT_CLEAR_DISTANCE: 120,
    LEFT_MOTOR: "A",
    RIGHT_MOTOR: "B",
    VALID_MOTORS: [
        "A",
        "B"
    ]
};
var validateConfiguration = function(configuration) {
    configuration.leftMotor = configuration.leftMotor || exports.DEFAULT_CONFIG.LEFT_MOTOR;
    configuration.rightMotor = configuration.rightMotor || exports.DEFAULT_CONFIG.RIGHT_MOTOR;
    // @ts-ignore
    if (!exports.DEFAULT_CONFIG.VALID_MOTORS.includes(configuration.leftMotor)) throw Error("Define left port port correctly");
    // @ts-ignore
    if (!exports.DEFAULT_CONFIG.VALID_MOTORS.includes(configuration.rightMotor)) throw Error("Define right port port correctly");
    if (configuration.leftMotor === configuration.rightMotor) throw Error("Left and right motor can not be same");
    configuration.distanceModifier = configuration.distanceModifier || exports.DEFAULT_CONFIG.METRIC_MODIFIER;
    configuration.turnModifier = configuration.turnModifier || exports.DEFAULT_CONFIG.TURN_MODIFIER;
    configuration.driveSpeed = configuration.driveSpeed || exports.DEFAULT_CONFIG.DRIVE_SPEED;
    configuration.turnSpeed = configuration.turnSpeed || exports.DEFAULT_CONFIG.TURN_SPEED;
    configuration.defaultStopDistance = configuration.defaultStopDistance || exports.DEFAULT_CONFIG.DEFAULT_STOP_DISTANCE;
    configuration.defaultClearDistance = configuration.defaultClearDistance || exports.DEFAULT_CONFIG.DEFAULT_CLEAR_DISTANCE;
};
var waitForValueToSet = function(valueName, compareFunc, timeoutMs) {
    var _this = this;
    if (compareFunc === void 0) compareFunc = function(valueNameToCompare) {
        return _this[valueNameToCompare];
    };
    if (timeoutMs === void 0) timeoutMs = 0;
    if (compareFunc.bind(this)(valueName)) return Promise.resolve(this[valueName]);
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            return __awaiter(_this, void 0, void 0, function() {
                var _a;
                return __generator(this, function(_b) {
                    switch(_b.label){
                        case 0:
                            _a = resolve;
                            return [
                                4 /*yield*/ ,
                                waitForValueToSet.bind(this)(valueName, compareFunc, timeoutMs)
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.apply(void 0, [
                                    _b.sent()
                                ])
                            ];
                    }
                });
            });
        }, timeoutMs + 100);
    });
};
var HubAsync = /** @class */ function(_super) {
    __extends(HubAsync, _super);
    function HubAsync(bluetooth, configuration) {
        var _this = _super.call(this, bluetooth) || this;
        validateConfiguration(configuration);
        _this.configuration = configuration;
        return _this;
    }
    /**
     * Disconnect Hub
     * @method Hub#disconnectAsync
     * @returns {Promise<boolean>} disconnection successful
     */ HubAsync.prototype.disconnectAsync = function() {
        this.setDisconnected();
        return waitForValueToSet.bind(this)("hubDisconnected");
    };
    /**
     * Execute this method after new instance of Hub is created
     * @method Hub#afterInitialization
     */ HubAsync.prototype.afterInitialization = function() {
        var _this = this;
        this.hubDisconnected = null;
        this.portData = {
            A: {
                angle: 0
            },
            B: {
                angle: 0
            },
            AB: {
                angle: 0
            },
            C: {
                angle: 0
            },
            D: {
                angle: 0
            },
            LED: {
                angle: 0
            }
        };
        this.useMetric = true;
        this.modifier = 1;
        this.emitter.on("rotation", function(rotation) {
            return _this.portData[rotation.port].angle = rotation.angle;
        });
        this.emitter.on("disconnect", function() {
            return _this.hubDisconnected = true;
        });
        this.emitter.on("distance", function(distance) {
            return _this.distance = distance;
        });
    };
    /**
     * Control the LED on the Move Hub
     * @method Hub#ledAsync
     * @param {boolean|number|string} color
     * If set to boolean `false` the LED is switched off, if set to `true` the LED will be white.
     * Possible string values: `off`, `pink`, `purple`, `blue`, `lightblue`, `cyan`, `green`, `yellow`, `orange`, `red`,
     * `white`
     * @returns {Promise}
     */ HubAsync.prototype.ledAsync = function(color) {
        var _this = this;
        return new Promise(function(resolve, reject) {
            _this.led(color, function() {
                // Callback is executed when command is sent and it will take some time before MoveHub executes the command
                setTimeout(resolve, CALLBACK_TIMEOUT_MS);
            });
        });
    };
    /**
     * Run a motor for specific time
     * @method Hub#motorTimeAsync
     * @param {string|number} port possible string values: `A`, `B`, `AB`, `C`, `D`.
     * @param {number} seconds
     * @param {number} [dutyCycle=100] motor power percentsage from `-100` to `100`. If a negative value is given rotation
     * is counterclockwise.
     * @param {boolean} [wait=false] will promise wait unitll motorTime run time has elapsed
     * @returns {Promise}
     */ HubAsync.prototype.motorTimeAsync = function(port, seconds, dutyCycle, wait) {
        var _this = this;
        if (dutyCycle === void 0) dutyCycle = 100;
        if (wait === void 0) wait = false;
        return new Promise(function(resolve, _) {
            _this.motorTime(port, seconds, dutyCycle, function() {
                setTimeout(resolve, wait ? CALLBACK_TIMEOUT_MS + seconds * 1000 : CALLBACK_TIMEOUT_MS);
            });
        });
    };
    /**
     * Run both motors (A and B) for specific time
     * @method Hub#motorTimeMultiAsync
     * @param {number} seconds
     * @param {number} [dutyCycleA=100] motor power percentage from `-100` to `100`. If a negative value is given rotation
     * is counterclockwise.
     * @param {number} [dutyCycleB=100] motor power percentage from `-100` to `100`. If a negative value is given rotation
     * is counterclockwise.
     * @param {boolean} [wait=false] will promise wait unitll motorTime run time has elapsed
     * @returns {Promise}
     */ HubAsync.prototype.motorTimeMultiAsync = function(seconds, dutyCycleA, dutyCycleB, wait) {
        var _this = this;
        if (dutyCycleA === void 0) dutyCycleA = 100;
        if (dutyCycleB === void 0) dutyCycleB = 100;
        if (wait === void 0) wait = false;
        return new Promise(function(resolve, _) {
            _this.motorTimeMulti(seconds, dutyCycleA, dutyCycleB, function() {
                setTimeout(resolve, wait ? CALLBACK_TIMEOUT_MS + seconds * 1000 : CALLBACK_TIMEOUT_MS);
            });
        });
    };
    /**
     * Turn a motor by specific angle
     * @method Hub#motorAngleAsync
     * @param {string|number} port possible string values: `A`, `B`, `AB`, `C`, `D`.
     * @param {number} angle - degrees to turn from `0` to `2147483647`
     * @param {number} [dutyCycle=100] motor power percentage from `-100` to `100`. If a negative value is given
     * rotation is counterclockwise.
     * @param {boolean} [wait=false] will promise wait unitll motorAngle has turned
     * @returns {Promise}
     */ HubAsync.prototype.motorAngleAsync = function(port, angle, dutyCycle, wait) {
        var _this = this;
        if (dutyCycle === void 0) dutyCycle = 100;
        if (wait === void 0) wait = false;
        return new Promise(function(resolve, _) {
            _this.motorAngle(port, angle, dutyCycle, function() {
                return __awaiter(_this, void 0, void 0, function() {
                    var beforeTurn;
                    return __generator(this, function(_a) {
                        switch(_a.label){
                            case 0:
                                if (!wait) return [
                                    3 /*break*/ ,
                                    5
                                ];
                                beforeTurn = void 0;
                                _a.label = 1;
                            case 1:
                                beforeTurn = this.portData[port].angle;
                                return [
                                    4 /*yield*/ ,
                                    new Promise(function(res) {
                                        return setTimeout(res, CALLBACK_TIMEOUT_MS);
                                    })
                                ];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3:
                                if (this.portData[port].angle !== beforeTurn) return [
                                    3 /*break*/ ,
                                    1
                                ];
                                _a.label = 4;
                            case 4:
                                resolve();
                                return [
                                    3 /*break*/ ,
                                    6
                                ];
                            case 5:
                                setTimeout(resolve, CALLBACK_TIMEOUT_MS);
                                _a.label = 6;
                            case 6:
                                return [
                                    2 /*return*/ 
                                ];
                        }
                    });
                });
            });
        });
    };
    /**
     * Turn both motors (A and B) by specific angle
     * @method Hub#motorAngleMultiAsync
     * @param {number} angle degrees to turn from `0` to `2147483647`
     * @param {number} [dutyCycleA=100] motor power percentage from `-100` to `100`. If a negative value is given
     * rotation is counterclockwise.
     * @param {number} [dutyCycleB=100] motor power percentage from `-100` to `100`. If a negative value is given
     * rotation is counterclockwise.
     * @param {boolean} [wait=false] will promise wait unitll motorAngle has turned
     * @returns {Promise}
     */ HubAsync.prototype.motorAngleMultiAsync = function(angle, dutyCycleA, dutyCycleB, wait) {
        var _this = this;
        if (dutyCycleA === void 0) dutyCycleA = 100;
        if (dutyCycleB === void 0) dutyCycleB = 100;
        if (wait === void 0) wait = false;
        return new Promise(function(resolve, _) {
            _this.motorAngleMulti(angle, dutyCycleA, dutyCycleB, function() {
                return __awaiter(_this, void 0, void 0, function() {
                    var beforeTurn;
                    return __generator(this, function(_a) {
                        switch(_a.label){
                            case 0:
                                if (!wait) return [
                                    3 /*break*/ ,
                                    5
                                ];
                                beforeTurn = void 0;
                                _a.label = 1;
                            case 1:
                                beforeTurn = this.portData["AB"].angle;
                                return [
                                    4 /*yield*/ ,
                                    new Promise(function(res) {
                                        return setTimeout(res, CALLBACK_TIMEOUT_MS);
                                    })
                                ];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3:
                                if (this.portData["AB"].angle !== beforeTurn) return [
                                    3 /*break*/ ,
                                    1
                                ];
                                _a.label = 4;
                            case 4:
                                resolve();
                                return [
                                    3 /*break*/ ,
                                    6
                                ];
                            case 5:
                                setTimeout(resolve, CALLBACK_TIMEOUT_MS);
                                _a.label = 6;
                            case 6:
                                return [
                                    2 /*return*/ 
                                ];
                        }
                    });
                });
            });
        });
    };
    /**
     * Use metric units (default)
     * @method Hub#useMetricUnits
     */ HubAsync.prototype.useMetricUnits = function() {
        this.useMetric = true;
    };
    /**
     * Use imperial units
     * @method Hub#useImperialUnits
     */ HubAsync.prototype.useImperialUnits = function() {
        this.useMetric = false;
    };
    /**
     * Set friction modifier
     * @method Hub#setFrictionModifier
     * @param {number} modifier friction modifier
     */ HubAsync.prototype.setFrictionModifier = function(modifier) {
        this.modifier = modifier;
    };
    /**
     * Drive specified distance
     * @method Hub#drive
     * @param {number} distance distance in centimeters (default) or inches. Positive is forward and negative is backward.
     * @param {boolean} [wait=true] will promise wait untill the drive has completed.
     * @returns {Promise}
     */ HubAsync.prototype.drive = function(distance, wait) {
        if (wait === void 0) wait = true;
        var angle = Math.abs(distance) * ((this.useMetric ? this.configuration.distanceModifier : this.configuration.distanceModifier / 4) * this.modifier);
        var dutyCycleA = this.configuration.driveSpeed * (distance > 0 ? 1 : -1) * (this.configuration.leftMotor === "A" ? 1 : -1);
        var dutyCycleB = this.configuration.driveSpeed * (distance > 0 ? 1 : -1) * (this.configuration.leftMotor === "A" ? 1 : -1);
        return this.motorAngleMultiAsync(angle, dutyCycleA, dutyCycleB, wait);
    };
    /**
     * Turn robot specified degrees
     * @method Hub#turn
     * @param {number} degrees degrees to turn. Negative is to the left and positive to the right.
     * @param {boolean} [wait=true] will promise wait untill the turn has completed.
     * @returns {Promise}
     */ HubAsync.prototype.turn = function(degrees, wait) {
        if (wait === void 0) wait = true;
        var angle = Math.abs(degrees) * this.configuration.turnModifier;
        var turnMotorModifier = this.configuration.leftMotor === "A" ? 1 : -1;
        var leftTurn = this.configuration.turnSpeed * (degrees > 0 ? 1 : -1) * turnMotorModifier;
        var rightTurn = this.configuration.turnSpeed * (degrees > 0 ? -1 : 1) * turnMotorModifier;
        var dutyCycleA = this.configuration.leftMotor === "A" ? leftTurn : rightTurn;
        var dutyCycleB = this.configuration.leftMotor === "A" ? rightTurn : leftTurn;
        return this.motorAngleMultiAsync(angle, dutyCycleA, dutyCycleB, wait);
    };
    /**
     * Drive untill sensor shows object in defined distance
     * @method Hub#driveUntil
     * @param {number} [distance=0] distance in centimeters (default) or inches when to stop. Distance sensor is not very sensitive or accurate.
     * By default will stop when sensor notices wall for the first time. Sensor distance values are usualy between 110-50.
     * @param {boolean} [wait=true] will promise wait untill the bot will stop.
     * @returns {Promise}
     */ HubAsync.prototype.driveUntil = function(distance, wait) {
        if (distance === void 0) distance = 0;
        if (wait === void 0) wait = true;
        return __awaiter(this, void 0, void 0, function() {
            var distanceCheck, direction, compareFunc;
            var _this = this;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        distanceCheck = distance !== 0 ? this.useMetric ? distance : distance * 2.54 : this.configuration.defaultStopDistance;
                        direction = this.configuration.leftMotor === "A" ? 1 : -1;
                        compareFunc = direction === 1 ? function() {
                            return distanceCheck >= _this.distance;
                        } : function() {
                            return distanceCheck <= _this.distance;
                        };
                        this.motorTimeMulti(60, this.configuration.driveSpeed * direction, this.configuration.driveSpeed * direction);
                        if (!wait) return [
                            3 /*break*/ ,
                            3
                        ];
                        return [
                            4 /*yield*/ ,
                            waitForValueToSet.bind(this)("distance", compareFunc)
                        ];
                    case 1:
                        _a.sent();
                        return [
                            4 /*yield*/ ,
                            this.motorAngleMultiAsync(0)
                        ];
                    case 2:
                        _a.sent();
                        return [
                            3 /*break*/ ,
                            4
                        ];
                    case 3:
                        return [
                            2 /*return*/ ,
                            waitForValueToSet.bind(this)("distance", compareFunc).then(function(_) {
                                return _this.motorAngleMulti(0, 0, 0);
                            })
                        ];
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * Turn until there is no object in sensors sight
     * @method Hub#turnUntil
     * @param {number} [direction=1] direction to turn to. 1 (or any positive) is to the right and 0 (or any negative) is to the left.
     * @param {boolean} [wait=true] will promise wait untill the bot will stop.
     * @returns {Promise}
     */ HubAsync.prototype.turnUntil = function(direction, wait) {
        if (direction === void 0) direction = 1;
        if (wait === void 0) wait = true;
        return __awaiter(this, void 0, void 0, function() {
            var directionModifier;
            var _this = this;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        directionModifier = direction > 0 ? 1 : -1;
                        this.turn(360 * directionModifier, false);
                        if (!wait) return [
                            3 /*break*/ ,
                            3
                        ];
                        return [
                            4 /*yield*/ ,
                            waitForValueToSet.bind(this)("distance", function() {
                                return _this.distance >= _this.configuration.defaultClearDistance;
                            })
                        ];
                    case 1:
                        _a.sent();
                        return [
                            4 /*yield*/ ,
                            this.turn(0, false)
                        ];
                    case 2:
                        _a.sent();
                        return [
                            3 /*break*/ ,
                            4
                        ];
                    case 3:
                        return [
                            2 /*return*/ ,
                            waitForValueToSet.bind(this)("distance", function() {
                                return _this.distance >= _this.configuration.defaultClearDistance;
                            }).then(function(_) {
                                return _this.turn(0, false);
                            })
                        ];
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    HubAsync.prototype.updateConfiguration = function(configuration) {
        validateConfiguration(configuration);
        this.configuration = configuration;
    };
    return HubAsync;
}(hub_1.Hub);
exports.HubAsync = HubAsync;

},{"7ceb2ed30621334d":"lVvk1"}],"lVvk1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Hub = void 0;
var eventEmitter_1 = require("f41a96a8eaccc1d9");
var buffer_1 = require("f37cf7eb41a4acd");
var Hub = /** @class */ function() {
    function Hub(bluetooth) {
        this.emitter = new eventEmitter_1.EventEmitter();
        this.autoSubscribe = true;
        this.writeCue = [];
        this.isWriting = false;
        this.bluetooth = bluetooth;
        this.log = console.log;
        this.autoSubscribe = true;
        this.ports = {};
        this.num2type = {
            23: "LED",
            37: "DISTANCE",
            38: "IMOTOR",
            39: "MOTOR",
            40: "TILT"
        };
        this.port2num = {
            A: 0x00,
            B: 0x01,
            C: 0x02,
            D: 0x03,
            AB: 0x10,
            LED: 0x32,
            TILT: 0x3a
        };
        this.num2port = Object.entries(this.port2num).reduce(function(acc, _a) {
            var port = _a[0], portNum = _a[1];
            acc[portNum] = port;
            return acc;
        }, {});
        this.num2action = {
            1: "start",
            5: "conflict",
            10: "stop"
        };
        this.num2color = {
            0: "black",
            3: "blue",
            5: "green",
            7: "yellow",
            9: "red",
            10: "white"
        };
        this.ledColors = [
            "off",
            "pink",
            "purple",
            "blue",
            "lightblue",
            "cyan",
            "green",
            "yellow",
            "orange",
            "red",
            "white"
        ];
        this.addListeners();
    }
    Hub.prototype.emit = function(type, data) {
        if (data === void 0) data = null;
        this.emitter.emit(type, data);
    };
    Hub.prototype.addListeners = function() {
        var _this = this;
        this.bluetooth.addEventListener("characteristicvaluechanged", function(event) {
            // https://googlechrome.github.io/samples/web-bluetooth/read-characteristic-value-changed.html
            // @ts-ignore
            var data = buffer_1.Buffer.from(event.target.value.buffer);
            _this.parseMessage(data);
        });
        setTimeout(function() {
            // Without timout missed first characteristicvaluechanged events
            _this.bluetooth.startNotifications();
        }, 1000);
    };
    Hub.prototype.parseMessage = function(data) {
        var _this = this;
        switch(data[2]){
            case 0x04:
                clearTimeout(this.portInfoTimeout);
                this.portInfoTimeout = setTimeout(function() {
                    /**
                     * Fires when a connection to the Move Hub is established
                     * @event Hub#connect
                     */ if (_this.autoSubscribe) _this.subscribeAll();
                    if (!_this.connected) {
                        _this.connected = true;
                        _this.emit("connect");
                    }
                }, 1000);
                this.log("Found: " + this.num2type[data[5]]);
                this.logDebug("Found", data);
                if (data[4] === 0x01) this.ports[data[3]] = {
                    type: "port",
                    deviceType: this.num2type[data[5]],
                    deviceTypeNum: data[5]
                };
                else if (data[4] === 0x02) this.ports[data[3]] = {
                    type: "group",
                    deviceType: this.num2type[data[5]],
                    deviceTypeNum: data[5],
                    members: [
                        data[7],
                        data[8]
                    ]
                };
                break;
            case 0x05:
                this.log("Malformed message");
                this.log("<", data);
                break;
            case 0x45:
                this.parseSensor(data);
                break;
            case 0x47:
                break;
            case 0x82:
                /**
                 * Fires on port changes
                 * @event Hub#port
                 * @param port {object}
                 * @param port.port {string}
                 * @param port.action {string}
                 */ this.emit("port", {
                    port: this.num2port[data[3]],
                    action: this.num2action[data[4]]
                });
                break;
            default:
                this.log("unknown message type 0x" + data[2].toString(16));
                this.log("<", data);
        }
    };
    Hub.prototype.parseSensor = function(data) {
        if (!this.ports[data[3]]) {
            this.log("parseSensor unknown port 0x" + data[3].toString(16));
            return;
        }
        switch(this.ports[data[3]].deviceType){
            case "DISTANCE":
                /**
                 * @event Hub#color
                 * @param color {string}
                 */ this.emit("color", this.num2color[data[4]]);
                // TODO: improve distance calculation!
                var distance = void 0;
                if (data[7] > 0 && data[5] < 2) distance = Math.floor(20 - data[7] * 2.85);
                else if (data[5] > 9) distance = Infinity;
                else distance = Math.floor(20 + data[5] * 18);
                /**
                 * @event Hub#distance
                 * @param distance {number} distance in millimeters
                 */ this.emit("distance", distance);
                break;
            case "TILT":
                var roll = data.readInt8(4);
                var pitch = data.readInt8(5);
                /**
                 * @event Hub#tilt
                 * @param tilt {object}
                 * @param tilt.roll {number}
                 * @param tilt.pitch {number}
                 */ this.emit("tilt", {
                    roll: roll,
                    pitch: pitch
                });
                break;
            case "MOTOR":
            case "IMOTOR":
                var angle = data.readInt32LE(4);
                /**
                 * @event Hub#rotation
                 * @param rotation {object}
                 * @param rotation.port {string}
                 * @param rotation.angle
                 */ this.emit("rotation", {
                    port: this.num2port[data[3]],
                    angle: angle
                });
                break;
            default:
                this.log("unknown sensor type 0x" + data[3].toString(16), data[3], this.ports[data[3]].deviceType);
        }
    };
    /**
     * Set Move Hub as disconnected
     * @method Hub#setDisconnected
     */ Hub.prototype.setDisconnected = function() {
        // TODO: Should get this from some notification?
        this.connected = false;
        this.noReconnect = true;
        this.writeCue = [];
    };
    /**
     * Run a motor for specific time
     * @param {string|number} port possible string values: `A`, `B`, `AB`, `C`, `D`.
     * @param {number} seconds
     * @param {number} [dutyCycle=100] motor power percentage from `-100` to `100`. If a negative value is given rotation
     * is counterclockwise.
     * @param {function} [callback]
     */ Hub.prototype.motorTime = function(port, seconds, dutyCycle, callback) {
        if (typeof dutyCycle === "function") {
            callback = dutyCycle;
            dutyCycle = 100;
        }
        var portNum = typeof port === "string" ? this.port2num[port] : port;
        this.write(this.encodeMotorTime(portNum, seconds, dutyCycle), callback);
    };
    /**
     * Run both motors (A and B) for specific time
     * @param {number} seconds
     * @param {number} dutyCycleA motor power percentage from `-100` to `100`. If a negative value is given rotation
     * is counterclockwise.
     * @param {number} dutyCycleB motor power percentage from `-100` to `100`. If a negative value is given rotation
     * is counterclockwise.
     * @param {function} callback
     */ Hub.prototype.motorTimeMulti = function(seconds, dutyCycleA, dutyCycleB, callback) {
        this.write(this.encodeMotorTimeMulti(this.port2num["AB"], seconds, dutyCycleA, dutyCycleB), callback);
    };
    /**
     * Turn a motor by specific angle
     * @param {string|number} port possible string values: `A`, `B`, `AB`, `C`, `D`.
     * @param {number} angle - degrees to turn from `0` to `2147483647`
     * @param {number} [dutyCycle=100] motor power percentage from `-100` to `100`. If a negative value is given
     * rotation is counterclockwise.
     * @param {function} [callback]
     */ Hub.prototype.motorAngle = function(port, angle, dutyCycle, callback) {
        if (typeof dutyCycle === "function") {
            callback = dutyCycle;
            dutyCycle = 100;
        }
        var portNum = typeof port === "string" ? this.port2num[port] : port;
        this.write(this.encodeMotorAngle(portNum, angle, dutyCycle), callback);
    };
    /**
     * Turn both motors (A and B) by specific angle
     * @param {number} angle degrees to turn from `0` to `2147483647`
     * @param {number} dutyCycleA motor power percentage from `-100` to `100`. If a negative value is given
     * rotation is counterclockwise.
     * @param {number} dutyCycleB motor power percentage from `-100` to `100`. If a negative value is given
     * rotation is counterclockwise.
     * @param {function} callback
     */ Hub.prototype.motorAngleMulti = function(angle, dutyCycleA, dutyCycleB, callback) {
        this.write(this.encodeMotorAngleMulti(this.port2num["AB"], angle, dutyCycleA, dutyCycleB), callback);
    };
    /**
     * Send raw data
     * @param {object} raw raw data
     * @param {function} callback
     */ Hub.prototype.rawCommand = function(raw, callback) {
        // @ts-ignore
        var buf = buffer_1.Buffer.from([
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00
        ]);
        for(var idx in raw)buf.writeIntLE(raw[idx], idx);
        this.write(buf, callback);
    };
    Hub.prototype.motorPowerCommand = function(port, power) {
        this.write(this.encodeMotorPower(port, power));
    };
    //[0x09, 0x00, 0x81, 0x39, 0x11, 0x07, 0x00, 0x64, 0x03]
    Hub.prototype.encodeMotorPower = function(port, dutyCycle) {
        if (dutyCycle === void 0) dutyCycle = 100;
        var portNum = typeof port === "string" ? this.port2num[port] : port;
        // @ts-ignore
        var buf = buffer_1.Buffer.from([
            0x09,
            0x00,
            0x81,
            portNum,
            0x11,
            0x07,
            0x00,
            0x64,
            0x03
        ]);
        //buf.writeUInt16LE(seconds * 1000, 6);
        buf.writeInt8(dutyCycle, 6);
        return buf;
    };
    //0x0C, 0x00, 0x81, port, 0x11, 0x09, 0x00, 0x00, 0x00, 0x64, 0x7F, 0x03
    /**
     * Control the LED on the Move Hub
     * @method Hub#led
     * @param {boolean|number|string} color
     * If set to boolean `false` the LED is switched off, if set to `true` the LED will be white.
     * Possible string values: `off`, `pink`, `purple`, `blue`, `lightblue`, `cyan`, `green`, `yellow`, `orange`, `red`,
     * `white`
     * @param {function} [callback]
     */ Hub.prototype.led = function(color, callback) {
        this.write(this.encodeLed(color), callback);
    };
    /**
     * Subscribe for sensor notifications
     * @param {string|number} port - e.g. call `.subscribe('C')` if you have your distance/color sensor on port C.
     * @param {number} [option=0] Unknown meaning. Needs to be 0 for distance/color, 2 for motors, 8 for tilt
     * @param {function} [callback]
     */ Hub.prototype.subscribe = function(port, option, callback) {
        if (option === void 0) option = 0;
        if (typeof option === "function") {
            // TODO: Why we have function check here?
            callback = option;
            option = 0x00;
        }
        var portNum = typeof port === "string" ? this.port2num[port] : port;
        this.write(// @ts-ignore
        buffer_1.Buffer.from([
            0x0a,
            0x00,
            0x41,
            portNum,
            option,
            0x01,
            0x00,
            0x00,
            0x00,
            0x01
        ]), callback);
    };
    /**
     * Unsubscribe from sensor notifications
     * @param {string|number} port
     * @param {number} [option=0] Unknown meaning. Needs to be 0 for distance/color, 2 for motors, 8 for tilt
     * @param {function} [callback]
     */ Hub.prototype.unsubscribe = function(port, option, callback) {
        if (option === void 0) option = 0;
        if (typeof option === "function") {
            callback = option;
            option = 0x00;
        }
        var portNum = typeof port === "string" ? this.port2num[port] : port;
        this.write(// @ts-ignore
        buffer_1.Buffer.from([
            0x0a,
            0x00,
            0x41,
            portNum,
            option,
            0x01,
            0x00,
            0x00,
            0x00,
            0x00
        ]), callback);
    };
    Hub.prototype.subscribeAll = function() {
        var _this = this;
        Object.entries(this.ports).forEach(function(_a) {
            var port = _a[0], data = _a[1];
            if (data.deviceType === "DISTANCE") _this.subscribe(parseInt(port, 10), 8);
            else if (data.deviceType === "TILT") _this.subscribe(parseInt(port, 10), 0);
            else if (data.deviceType === "IMOTOR") _this.subscribe(parseInt(port, 10), 2);
            else if (data.deviceType === "MOTOR") _this.subscribe(parseInt(port, 10), 2);
            else _this.logDebug("Port subscribtion not sent: " + port);
        });
    };
    /**
     * Send data over BLE
     * @method Hub#write
     * @param {string|Buffer} data If a string is given it has to have hex bytes separated by spaces, e.g. `0a 01 c3 b2`
     * @param {function} callback
     */ Hub.prototype.write = function(data, callback) {
        if (typeof data === "string") {
            var arr_1 = [];
            data.split(" ").forEach(function(c) {
                arr_1.push(parseInt(c, 16));
            });
            // @ts-ignore
            data = buffer_1.Buffer.from(arr_1);
        }
        // Original implementation passed secondArg to define if response is waited
        this.writeCue.push({
            data: data,
            secondArg: true,
            callback: callback
        });
        this.writeFromCue();
    };
    Hub.prototype.writeFromCue = function() {
        var _this = this;
        if (this.writeCue.length === 0 || this.isWriting) return;
        var el = this.writeCue.shift();
        this.logDebug("Writing to device", el);
        this.isWriting = true;
        this.bluetooth.writeValue(el.data).then(function() {
            _this.isWriting = false;
            if (typeof el.callback === "function") el.callback();
        }).catch(function(err) {
            _this.isWriting = false;
            _this.log("Error while writing: " + el.data + " - Error " + err.toString());
        // TODO: Notify of failure
        }).finally(function() {
            _this.writeFromCue();
        });
    };
    Hub.prototype.encodeMotorTimeMulti = function(port, seconds, dutyCycleA, dutyCycleB) {
        if (dutyCycleA === void 0) dutyCycleA = 100;
        if (dutyCycleB === void 0) dutyCycleB = -100;
        // @ts-ignore
        var buf = buffer_1.Buffer.from([
            0x0d,
            0x00,
            0x81,
            port,
            0x11,
            0x0a,
            0x00,
            0x00,
            0x00,
            0x00,
            0x64,
            0x7f,
            0x03
        ]);
        buf.writeUInt16LE(seconds * 1000, 6);
        buf.writeInt8(dutyCycleA, 8);
        buf.writeInt8(dutyCycleB, 9);
        return buf;
    };
    Hub.prototype.encodeMotorTime = function(port, seconds, dutyCycle) {
        if (dutyCycle === void 0) dutyCycle = 100;
        // @ts-ignore
        var buf = buffer_1.Buffer.from([
            0x0c,
            0x00,
            0x81,
            port,
            0x11,
            0x09,
            0x00,
            0x00,
            0x00,
            0x64,
            0x7f,
            0x03
        ]);
        buf.writeUInt16LE(seconds * 1000, 6);
        buf.writeInt8(dutyCycle, 8);
        return buf;
    };
    Hub.prototype.encodeMotorAngleMulti = function(port, angle, dutyCycleA, dutyCycleB) {
        if (dutyCycleA === void 0) dutyCycleA = 100;
        if (dutyCycleB === void 0) dutyCycleB = -100;
        // @ts-ignore
        var buf = buffer_1.Buffer.from([
            0x0f,
            0x00,
            0x81,
            port,
            0x11,
            0x0c,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x64,
            0x7f,
            0x03
        ]);
        buf.writeUInt32LE(angle, 6);
        buf.writeInt8(dutyCycleA, 10);
        buf.writeInt8(dutyCycleB, 11);
        return buf;
    };
    Hub.prototype.encodeMotorAngle = function(port, angle, dutyCycle) {
        if (dutyCycle === void 0) dutyCycle = 100;
        // @ts-ignore
        var buf = buffer_1.Buffer.from([
            0x0e,
            0x00,
            0x81,
            port,
            0x11,
            0x0b,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x64,
            0x7f,
            0x03
        ]);
        buf.writeUInt32LE(angle, 6);
        buf.writeInt8(dutyCycle, 10);
        return buf;
    };
    Hub.prototype.encodeLed = function(color) {
        if (typeof color === "boolean") color = color ? "white" : "off";
        var colorNum = typeof color === "string" ? this.ledColors.indexOf(color) : color;
        // @ts-ignore
        return buffer_1.Buffer.from([
            0x08,
            0x00,
            0x81,
            0x32,
            0x11,
            0x51,
            0x00,
            colorNum
        ]);
    };
    return Hub;
}();
exports.Hub = Hub;

},{"f41a96a8eaccc1d9":"k8K2H","f37cf7eb41a4acd":"hycu3"}],"k8K2H":[function(require,module,exports) {
"use strict";
// https://gist.github.com/mudge/5830382#gistcomment-2658721
var __spreadArrays = this && this.__spreadArrays || function() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventEmitter = void 0;
var EventEmitter = /** @class */ function() {
    function EventEmitter() {
        this.events = {};
    }
    EventEmitter.prototype.on = function(event, listener) {
        var _this = this;
        if (typeof this.events[event] !== "object") this.events[event] = [];
        this.events[event].push(listener);
        return function() {
            return _this.removeListener(event, listener);
        };
    };
    EventEmitter.prototype.removeListener = function(event, listener) {
        if (typeof this.events[event] !== "object") return;
        var idx = this.events[event].indexOf(listener);
        if (idx > -1) this.events[event].splice(idx, 1);
    };
    EventEmitter.prototype.removeAllListeners = function() {
        var _this = this;
        Object.keys(this.events).forEach(function(event) {
            return _this.events[event].splice(0, _this.events[event].length);
        });
    };
    EventEmitter.prototype.emit = function(event) {
        var _this = this;
        var args = [];
        for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
        if (typeof this.events[event] !== "object") return;
        __spreadArrays(this.events[event]).forEach(function(listener) {
            return listener.apply(_this, args);
        });
    };
    EventEmitter.prototype.once = function(event, listener) {
        var _this = this;
        var remove = this.on(event, function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            remove();
            listener.apply(_this, args);
        });
        return remove;
    };
    return EventEmitter;
}();
exports.EventEmitter = EventEmitter;

},{}],"hycu3":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.kMaxLength = exports.INSPECT_MAX_BYTES = exports.SlowBuffer = exports.Buffer = void 0;
var base64 = Promise.resolve().then(function() {
    return require("df46a14dbd7f4d75");
});
var ieee754 = Promise.resolve().then(function() {
    return require("e055553c1bdb0dfc");
});
var INSPECT_MAX_BYTES = 50;
exports.INSPECT_MAX_BYTES = INSPECT_MAX_BYTES;
var K_MAX_LENGTH = 0x7fffffff;
var kMaxLength = K_MAX_LENGTH;
exports.kMaxLength = kMaxLength;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        // @ts-ignore
        arr.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function() {
                return 42;
            }
        };
        // @ts-ignore
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    // @ts-ignore
    buf.__proto__ = Buffer.prototype;
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
exports.Buffer = Buffer;
// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== "undefined" && Symbol.species != null && Buffer[Symbol.species] === Buffer) Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
});
Buffer.poolSize = 8192; // not used by this implementation
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayLike(value);
    if (value == null) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype;
Buffer.__proto__ = Uint8Array;
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    // @ts-ignore
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    buf.__proto__ = Buffer.prototype;
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    // @ts-ignore
    return Buffer.alloc(+length);
}
exports.SlowBuffer = SlowBuffer;
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype; // so Buffer.isBuffer(Buffer.prototype) will be false
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) // @ts-ignore
    return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) // @ts-ignore
        buf = Buffer.from(buf);
        if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            // @ts-ignore
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) // @ts-ignore
            return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = "";
    var max = INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset; // Coerce to Number.
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") // @ts-ignore
    val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF; // Search for a byte value [0-255]
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i;
    if (dir) {
        var foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function latin1Write(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    var loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
            return asciiWrite(this, string, offset, length);
        case "latin1":
        case "binary":
            return latin1Write(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) // @ts-ignore
    return base64.fromByteArray(buf);
    else // @ts-ignore
    return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
    // Decode in chunks to avoid "call stack size exceeded".
    var res = "";
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = "";
    for(var i = start; i < end; ++i)out += toHex(buf[i]);
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = "";
    for(var i = 0; i < bytes.length; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    newBuf.__proto__ = Buffer.prototype;
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset + --byteLength];
    var mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    // @ts-ignore
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    // @ts-ignore
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    // @ts-ignore
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    // @ts-ignore
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    // @ts-ignore
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    // @ts-ignore
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else if (this === target && start < targetStart && targetStart < end) // descending copy from end
    for(var i = len - 1; i >= 0; --i)target[i + targetStart] = this[i + start];
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function toHex(n) {
    if (n < 16) return "0" + n.toString(16);
    return n.toString(16);
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    // @ts-ignore
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj; // eslint-disable-line no-self-compare
}

},{"df46a14dbd7f4d75":"FClRQ","e055553c1bdb0dfc":"4jEZP"}],"FClRQ":[function(require,module,exports) {
module.exports = require("cc2e0575a87c7613")(require("17b675581819db8").getBundleURL("1pq9E") + "base64-js.cae08bdb.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("eIiSV"));

},{"cc2e0575a87c7613":"61B45","17b675581819db8":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("27c5b8a661289f7");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"27c5b8a661289f7":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"4jEZP":[function(require,module,exports) {
module.exports = require("a62f47fe966680bc")(require("4c5267f05456a6da").getBundleURL("1pq9E") + "ieee754.1d023b1b.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("cO95r"));

},{"a62f47fe966680bc":"61B45","4c5267f05456a6da":"lgJ39"}],"coIgU":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HubControl = void 0;
var manual_1 = require("a414968a77d0b518");
var ai_1 = require("f1e670655c7d347a");
var HubControl = /** @class */ function() {
    function HubControl(deviceInfo, controlData, configuration) {
        this.hub = null;
        this.device = deviceInfo;
        this.control = controlData;
        this.configuration = configuration;
        this.prevControl = __assign({}, this.control);
        this.states = {
            Turn: ai_1.turn,
            Drive: ai_1.drive,
            Stop: ai_1.stop,
            Back: ai_1.back,
            Manual: manual_1.manual,
            Seek: ai_1.seek
        };
        this.currentState = this.states["Manual"];
    }
    HubControl.prototype.updateConfiguration = function(configuration) {
        this.configuration = configuration;
    };
    HubControl.prototype.start = function(hub) {
        return __awaiter(this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        this.hub = hub;
                        this.device.connected = true;
                        this.hub.emitter.on("error", function(err) {
                            _this.device.err = err;
                        });
                        this.hub.emitter.on("disconnect", function() {
                            _this.device.connected = false;
                        });
                        this.hub.emitter.on("distance", function(distance) {
                            _this.device.distance = distance;
                        });
                        this.hub.emitter.on("rssi", function(rssi) {
                            _this.device.rssi = rssi;
                        });
                        this.hub.emitter.on("port", function(portObject) {
                            var port = portObject.port, action = portObject.action;
                            _this.device.ports[port].action = action;
                        });
                        this.hub.emitter.on("color", function(color) {
                            _this.device.color = color;
                        });
                        this.hub.emitter.on("tilt", function(tilt) {
                            var roll = tilt.roll, pitch = tilt.pitch;
                            _this.device.tilt.roll = roll;
                            _this.device.tilt.pitch = pitch;
                        });
                        this.hub.emitter.on("rotation", function(rotation) {
                            var port = rotation.port, angle = rotation.angle;
                            _this.device.ports[port].angle = angle;
                        });
                        return [
                            4 /*yield*/ ,
                            this.hub.ledAsync("red")
                        ];
                    case 1:
                        _a.sent();
                        return [
                            4 /*yield*/ ,
                            this.hub.ledAsync("yellow")
                        ];
                    case 2:
                        _a.sent();
                        return [
                            4 /*yield*/ ,
                            this.hub.ledAsync("green")
                        ];
                    case 3:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    HubControl.prototype.disconnect = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.device.connected) return [
                            3 /*break*/ ,
                            2
                        ];
                        return [
                            4 /*yield*/ ,
                            this.hub.disconnectAsync()
                        ];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    HubControl.prototype.setNextState = function(state) {
        this.control.controlUpdateTime = undefined;
        this.control.state = state;
        this.currentState = this.states[state];
    };
    HubControl.prototype.update = function() {
        // TODO: After removing bind, this requires some more refactoring
        this.currentState(this);
        // TODO: Deep clone
        this.prevControl = __assign({}, this.control);
        this.prevControl.tilt = __assign({}, this.control.tilt);
        this.prevDevice = __assign({}, this.device);
    };
    return HubControl;
}();
exports.HubControl = HubControl;

},{"a414968a77d0b518":"1p7gz","f1e670655c7d347a":"lu5Nr"}],"1p7gz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.manual = void 0;
function manual(hubControl) {
    if (hubControl.control.speed !== hubControl.prevControl.speed || hubControl.control.turnAngle !== hubControl.prevControl.turnAngle) {
        var motorA = hubControl.control.speed + (hubControl.control.turnAngle > 0 ? Math.abs(hubControl.control.turnAngle) : 0);
        var motorB = hubControl.control.speed + (hubControl.control.turnAngle < 0 ? Math.abs(hubControl.control.turnAngle) : 0);
        if (motorA > 100) {
            motorB -= motorA - 100;
            motorA = 100;
        }
        if (motorB > 100) {
            motorA -= motorB - 100;
            motorB = 100;
        }
        hubControl.control.motorA = motorA;
        hubControl.control.motorB = motorB;
        hubControl.hub.motorTimeMulti(60, motorA, motorB);
    }
    if (hubControl.control.tilt.pitch !== hubControl.prevControl.tilt.pitch) hubControl.hub.motorTime("C", 60, hubControl.control.tilt.pitch);
    if (hubControl.control.tilt.roll !== hubControl.prevControl.tilt.roll) hubControl.hub.motorTime("D", 60, hubControl.control.tilt.roll);
}
exports.manual = manual;

},{}],"lu5Nr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.seek = exports.turn = exports.drive = exports.back = exports.stop = void 0;
var MIN_DISTANCE = 75;
var OK_DISTANCE = 100;
var EXECUTE_TIME_SEC = 60;
var CHECK_TIME_MS = 59000;
// Speeds must be between -100 and 100
var TURN_SPEED = 30;
var TURN_SPEED_OPPOSITE = -10;
var DRIVE_SPEED = 30;
var REVERSE_SPEED = -15;
var seek = function(hubControl) {
    if (!hubControl.control.controlUpdateTime || Date.now() - hubControl.control.controlUpdateTime > CHECK_TIME_MS) {
        hubControl.control.controlUpdateTime = Date.now();
        hubControl.hub.motorTimeMulti(EXECUTE_TIME_SEC, TURN_SPEED, TURN_SPEED_OPPOSITE);
    }
    if (Date.now() - hubControl.control.controlUpdateTime < 250) return;
    if (hubControl.device.distance > hubControl.prevDevice.distance) {
        hubControl.control.turnDirection = "right";
        hubControl.setNextState("Turn");
    } else {
        hubControl.control.turnDirection = "left";
        hubControl.setNextState("Turn");
    }
};
exports.seek = seek;
var turn = function(hubControl) {
    if (hubControl.device.distance < MIN_DISTANCE) {
        hubControl.control.turnDirection = null;
        hubControl.setNextState("Back");
        return;
    } else if (hubControl.device.distance > OK_DISTANCE) {
        hubControl.control.turnDirection = null;
        hubControl.setNextState("Drive");
        return;
    }
    if (!hubControl.control.controlUpdateTime || Date.now() - hubControl.control.controlUpdateTime > CHECK_TIME_MS) {
        var motorA = hubControl.control.turnDirection === "right" ? TURN_SPEED : TURN_SPEED_OPPOSITE;
        var motorB = hubControl.control.turnDirection === "right" ? TURN_SPEED_OPPOSITE : TURN_SPEED;
        hubControl.control.controlUpdateTime = Date.now();
        hubControl.hub.motorTimeMulti(EXECUTE_TIME_SEC, motorA, motorB);
    }
};
exports.turn = turn;
var drive = function(hubControl) {
    if (hubControl.device.distance < MIN_DISTANCE) {
        hubControl.setNextState("Back");
        return;
    } else if (hubControl.device.distance < OK_DISTANCE) {
        hubControl.setNextState("Seek");
        return;
    }
    if (!hubControl.control.controlUpdateTime || Date.now() - hubControl.control.controlUpdateTime > CHECK_TIME_MS) {
        hubControl.control.controlUpdateTime = Date.now();
        var speed = hubControl.configuration.leftMotor === "A" ? DRIVE_SPEED : DRIVE_SPEED * -1;
        hubControl.hub.motorTimeMulti(EXECUTE_TIME_SEC, speed, speed);
    }
};
exports.drive = drive;
var back = function(hubControl) {
    if (hubControl.device.distance > OK_DISTANCE) {
        hubControl.setNextState("Seek");
        return;
    }
    if (!hubControl.control.controlUpdateTime || Date.now() - hubControl.control.controlUpdateTime > CHECK_TIME_MS) {
        hubControl.control.controlUpdateTime = Date.now();
        var speed = hubControl.configuration.leftMotor === "A" ? REVERSE_SPEED : REVERSE_SPEED * -1;
        hubControl.hub.motorTimeMulti(EXECUTE_TIME_SEC, speed, speed);
    }
};
exports.back = back;
var stop = function(hubControl) {
    hubControl.control.speed = 0;
    hubControl.control.turnAngle = 0;
    if (!hubControl.control.controlUpdateTime || Date.now() - hubControl.control.controlUpdateTime > CHECK_TIME_MS) {
        hubControl.control.controlUpdateTime = Date.now();
        hubControl.hub.motorTimeMulti(EXECUTE_TIME_SEC, 0, 0);
    }
};
exports.stop = stop;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["caugW","bDbGG"], "bDbGG", "parcelRequireb7cf")

//# sourceMappingURL=index.fbb3188c.js.map
