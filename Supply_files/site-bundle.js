!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){var o=n(2),i=n(3);Y.use(["node","squarespace-gallery-ng","squarespace-util"],function(){Y.namespace("Supply"),Y.Supply.Site=Singleton.create({ready:function(){Y.on("domready",this.initialize,this)},initialize:function(){Function("/*@cc_on return document.documentMode===10@*/")()&&(document.documentElement.className+=" ie10"),this._emptyNav(),this._userAccountLinks=Y.all(".user-account-link"),Y.one(".collection-type-products")&&this._initProducts(),Y.one("#main .masonry-item")&&this._initMasonry({width:Y.one(".collection-type-index")?parseInt(Y.Squarespace.Template.getTweakValue("indexColumnWidth"),10):parseInt(Y.Squarespace.Template.getTweakValue("productColumnWidth"),10),gutter:Y.one(".collection-type-index")?parseInt(Y.Squarespace.Template.getTweakValue("indexGutter"),10):parseInt(Y.Squarespace.Template.getTweakValue("productGutter"),10)}),this.bindUI(),this.syncUI(),Y.one(".products-collection")&&Y.all(".products-collection").removeClass("loading"),Y.one("#flowContent .flow-back")&&Y.one(".flow-back").removeClass("loading"),Y.one("#flowContent")&&Y.one("#flowContent").removeClass("loading"),Y.one(".masonry-container")&&Y.one(".masonry-container").removeClass("loading"),Y.one("#header .lower-header").removeClass("loading"),Y.one("#header > .wrapper").removeClass("loading")},bindUI:function(){var e=new Y.Squarespace.ResizeEmitter({timeout:100});e.on("resize:end",this.syncUI,this),Y.one("#navOpen").on("click",function(e){e.halt(),Y.one("body").addClass("nav-opened")}),Y.one("#navClose").on("click",function(e){e.halt(),Y.one("body").removeClass("nav-opened")}),Y.one("#canvasOverlay").on("click",function(e){e.halt(),Y.one("body").removeClass("nav-opened")}),Y.one("#header").delegate("click",function(e){Y.one(".folder-links-collapsible")&&(e.preventDefault(),this._toggleFolder(e.currentTarget.get("parentNode")))},".folder-collection > a",this),Y.one(".collection-type-products")&&this._bindProducts(),Y.one(".collection-type-gallery")&&this._bindGallery()},syncUI:function(){if(this._syncUserAccounts(),Y.one(".site-vertical-alignment-middle")&&Y.config.win.innerWidth>1024){var e=Y.one("#header > .wrapper");e.toggleClass("middle",Y.config.win.innerHeight>e.get("offsetHeight"))}this._positionLowerHeader(),Y.one(".sqs-announcement-bar")&&this._setMobileAnnouncementPosition(),Y.one(".masonry-item")&&this._syncMasonry(),Y.one(".collection-type-products")&&this._syncProducts(),Y.one(".collection-type-index")&&this._syncIndex(),Y.one("#flowItems .flow-item")&&this._syncFlow(),this.masonry&&this.masonry.refresh(),this._imgLoad()},_initProducts:function(){Y.all(".products-child .active-link").each(function(e){e.ancestor(".products-collection").removeClass("active-link")});var e=Y.config.win.location;if(Y.one(".view-item")){var t=Y.one(".flow-back");t.setAttribute("href",t.getAttribute("href")+e.search),e.search.length>0&&t.setHTML(decodeURI(e.search.substr(e.search.indexOf("=")+1)))}},_initMasonry:function(e){this.masonry=new Y.Squarespace.Gallery2({container:Y.one(".masonry-container"),element:Y.all(".masonry-item"),design:Y.one(".collection-type-index.index-aspect-ratio-auto")||Y.one(".collection-type-products.product-aspect-ratio-auto")?"autocolumns":"autogrid",designOptions:{columnWidth:e.width,columnWidthBehavior:"min",gutter:e.gutter,aspectRatio:!1,mixedContent:!0},loaderOptions:{load:!1},lazyLoad:!1,refreshOnResize:!0})},_bindProducts:function(){Y.one("#flowBody")&&(Y.one("#flowBodyOpen").on("click",function(e){e.preventDefault(),Y.one("body").addClass("flow-body-active")}),Y.one("#flowBodyClose").on("click",function(e){e.preventDefault(),Y.one("body").removeClass("flow-body-active")}))},_bindGallery:function(){Y.one("#flowItems .flow-item-info")&&Y.one("#flowItems").delegate("click",function(e){e.preventDefault(),this.ancestor(".flow-item").toggleClass("active").siblings().removeClass("active")},".flow-item.has-info .button-expand")},_syncUserAccounts:function(){var e=i.getValue("user-account-link-location");this._userAccountLinks.each(function(t){var n=!t.ancestor(".navigation-secondary");if(n&&"Secondary Navigation"===e||!n&&"Primary Navigation"===e)return void t.hide();t.show();var i=o.isUserAuthenticated()?".unauth":".auth",a=t.one(i);a&&a.remove(),t.on("click",function(e){e.preventDefault(),o.openAccountScreen()})})},_syncMasonry:function(){this._setContentHeight();var e="product";Y.one(".collection-type-index")&&(e="index"),Y.one("."+e+"-aspect-ratio-auto")?this.masonry.refreshContentMode(null):this.masonry.refreshContentMode("fill")},_syncIndex:function(){this._setGutter(parseInt(Y.Squarespace.Template.getTweakValue("indexGutter"),10))},_syncProducts:function(){Y.one(".view-list")&&this._setGutter(parseInt(Y.Squarespace.Template.getTweakValue("productGutter"),10))},_syncFlow:function(){var e=Y.one("#flowItems"),t=Y.one("#flowContent"),n=this._predictFlowItemsHeight();Y.config.win.innerWidth>640?t.get("offsetHeight")>Y.config.win.innerHeight?(t.setAttribute("style",""),Y.one("body").addClass("force-vertical-alignment-top"),n?e.setAttribute("style",""):e.setStyle("position","fixed")):(Y.one("body").removeClass("force-vertical-alignment-top"),n&&(t.setStyle("position","fixed"),e.setAttribute("style",""))):(Y.one("body").removeClass("force-vertical-alignment-top"),e.setAttribute("style",""),t.setAttribute("style","")),Y.one(".site-vertical-alignment-middle")&&Y.config.win.innerWidth>1024?(Y.one(".collection-type-gallery")&&!Y.one(".gallery-single-image-fill")||Y.one(".collection-type-products")&&!Y.one(".product-item-single-image-fill")||Y.one(".flow-item:nth-child(2)"))&&e.toggleClass("middle",!n):e.removeClass("middle"),(Y.one(".collection-type-gallery")&&Y.one(".gallery-single-image-fill")||Y.one(".collection-type-products")&&Y.one(".product-item-single-image-fill"))&&1===Y.all(".flow-item").size()&&(Y.config.win.innerWidth>640?(Y.one("body").addClass("flow-items-fill"),Y.one(".flow-item").addClass("content-fill")):(Y.one("body").removeClass("flow-items-fill"),Y.one(".flow-item").removeClass("content-fill"),Y.one(".flow-item img").setAttribute("style","")))},_setMobileAnnouncementPosition:function(){if(Y.config.win.innerWidth<=1024){var e=Y.one(".sqs-announcement-bar").get("offsetHeight");Y.one("#under").setStyle("top",e)}else Y.one("#under").setAttribute("style","")},_predictFlowItemsHeight:function(){for(var e=0,t=Y.all(".flow-item img"),n=0;n<t.size();n++){var o=t.item(n),i=o.getAttribute("data-image-dimensions"),a=parseFloat(i.split("x")[1]/i.split("x")[0]);if(e+=a*parseFloat(o.getComputedStyle("width"))+parseFloat(o.get("parentNode").getStyle("marginBottom")),e>Y.config.win.innerHeight)return!0}return!1},_setGutter:function(e){this.masonry&&(e<10?this.masonry.set("gutter",e):e<25?Y.config.win.innerWidth<=640?this.masonry.set("gutter",10):this.masonry.set("gutter",e):Y.config.win.innerWidth<=640?this.masonry.set("gutter",10):Y.config.win.innerWidth<=1024?this.masonry.set("gutter",25):this.masonry.set("gutter",e))},_setContentHeight:function(){if(Y.one(".product-list-style-catalog.collection-type-products")&&!Y.one(".product-aspect-ratio-auto")||Y.one(".index-list-title-style-under.collection-type-index")&&!Y.one(".index-aspect-ratio-auto"))if(Y.config.win.innerWidth>640){var e=0;Y.all(".masonry-content").each(function(t){t.get("clientHeight")>e&&(e=t.get("clientHeight"))}),Y.all(".masonry-content").setStyle("height",e)}else Y.one(".masonry-content").getAttribute("style")&&Y.all(".masonry-content").each(function(e){e.setAttribute("style","")});else Y.one(".masonry-content").getAttribute("style")&&Y.all(".masonry-content").each(function(e){e.setAttribute("style","")})},_toggleFolder:function(e){e.hasClass("folder-closed")?(e.addClass("folder-opened"),e.removeClass("folder-closed")):e.hasClass("folder-opened")?(e.removeClass("folder-opened"),e.addClass("folder-closed")):e.hasClass("active-folder")?e.addClass("folder-closed"):e.addClass("folder-opened"),this._positionLowerHeader()},_positionLowerHeader:function(){if(Y.config.win.innerWidth>1024&&Y.one(".site-vertical-alignment-top")){var e=Y.one("#header > .wrapper"),t=Y.one("#header .lower-header"),n=t.hasClass("bottom")?t.get("offsetHeight")+e.get("offsetHeight"):e.get("offsetHeight");t.toggleClass("bottom",Y.config.win.innerHeight>n)}},_emptyNav:function(){!Y.one("#navOpen")||Y.one(".navigation li")||Y.one(".navigation-secondary li")||Y.one("#navOpen").addClass("empty")},_imgLoad:function(e,t){e=e||"body",t=t||null,Y.all(e+' img[data-src]:not([data-load="false"])').each(function(e){ImageLoader.load(e,{mode:t})})}})})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});/**
	 * @license
	 * Copyright 2016 Squarespace, INC.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *    http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
var n="UserAccounts API not available",o=window.UserAccountApi,i=function(){console.warn(n)},a=o?o.isUserAuthenticated:i,l=o?o.openAccountScreen:i;t.default={isUserAuthenticated:a,openAccountScreen:l},e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});/**
	 * @license
	 * Copyright 2016 Squarespace, INC.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *    http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
var n=Static.SQUARESPACE_CONTEXT.authenticatedAccount,o={all:{callbacks:[]}},i={getValue:function(e){return e&&"string"==typeof e?window.Static.SQUARESPACE_CONTEXT.tweakJSON[e]||window.Static.SQUARESPACE_CONTEXT.tweakJSON[e.replace("@","").replace(".","")]:(console.error("squarespace-core: Invalid tweak name "+e),null)},watch:function(){var e=arguments;if(n){if(0===arguments.length)return void console.error("squarespace-core: Tweak.watch must be called with at least one parameter");if(1===arguments.length)return void("function"==typeof arguments[0]&&o.all.callbacks.push(arguments[0]));if("string"==typeof arguments[0]&&"function"==typeof arguments[1]){var t=arguments[0];o[t]||(o[t]={callbacks:[]}),o[t].callbacks.push(arguments[1])}else arguments[0].constructor===Array&&"function"==typeof arguments[1]&&arguments[0].forEach(function(t){o[t]||(o[t]={callbacks:[]}),o[t].callbacks.push(e[1])})}}};n&&window.Y&&window.Y.Global&&window.Y.Global.on("tweak:change",function(e){var t=e.getName(),n={name:t,value:e.config&&e.config.value||e.value};o[t]&&o[t].callbacks.forEach(function(e){try{e(n)}catch(e){console.error(e)}}),o.all.callbacks.length>0&&o.all.callbacks.forEach(function(e){try{e(n)}catch(e){console.error(e)}})}),t.default=i,e.exports=t.default}]);