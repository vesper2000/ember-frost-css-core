"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,r){var d=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),(0,n["default"])(d,r["default"].modulePrefix),e["default"]=d}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,a){var n=a["default"].APP.name,r=a["default"].APP.version;e["default"]=t["default"].extend({version:r,name:n})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,a){e["default"]={name:"App Version",initialize:(0,t["default"])(a["default"].APP.name,a["default"].APP.version)}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var n,r=a["default"].exportApplicationGlobal;n="string"==typeof r?r:t["default"].String.classify(a["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:1,column:0},end:{line:28,column:4}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2"),n=e.createTextNode("frost-css-core");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h3"),n=e.createTextNode("typography");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","xxxl");var n=e.createTextNode("\n  XXXL (extra extra extra large)\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","xxl");var n=e.createTextNode("\n  XXL (extra extra large)\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","xl");var n=e.createTextNode("\n  XL (extra large)\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","l");var n=e.createTextNode("\n  L (large)\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","m");var n=e.createTextNode("\n  M (medium)\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","s");var n=e.createTextNode("\n  S (small)\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","xs");var n=e.createTextNode("\n  XS (extra small)\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h3"),n=e.createTextNode("flex");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\nTODO");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-frost-css-core",version:"v0.3.0"});