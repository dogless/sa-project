/* ========================================================================
 * Bootstrap: scrollspy.js v3.1.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(i,n){var s,o=t.proxy(this.process,this);this.$element=t(t(i).is("body")?window:i),this.$body=t("body"),this.$scrollElement=this.$element.on("scroll.bs.scrollspy",o),this.options=t.extend({},e.DEFAULTS,n),this.selector=(this.options.target||(s=t(i).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=t([]),this.targets=t([]),this.activeTarget=null,this.refresh(),this.process()}e.DEFAULTS={offset:10},e.prototype.refresh=function(){var e=this.$element[0]==window?"offset":"position";this.offsets=t([]),this.targets=t([]);var i=this;this.$body.find(this.selector).map(function(){var n=t(this),s=n.data("target")||n.attr("href"),o=/^#./.test(s)&&t(s);return o&&o.length&&o.is(":visible")&&[[o[e]().top+(!t.isWindow(i.$scrollElement.get(0))&&i.$scrollElement.scrollTop()),s]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight),n=i-this.$scrollElement.height(),s=this.offsets,o=this.targets,r=this.activeTarget;if(e>=n)return r!=(t=o.last()[0])&&this.activate(t);if(r&&e<=s[0])return r!=(t=o[0])&&this.activate(t);for(t=s.length;t--;)r!=o[t]&&e>=s[t]&&(!s[t+1]||e<=s[t+1])&&this.activate(o[t])},e.prototype.activate=function(e){this.activeTarget=e,t(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',n=t(i).parents("li").addClass("active");n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate.bs.scrollspy")};var i=t.fn.scrollspy;t.fn.scrollspy=function(i){return this.each(function(){var n=t(this),s=n.data("bs.scrollspy"),o="object"==typeof i&&i;s||n.data("bs.scrollspy",s=new e(this,o)),"string"==typeof i&&s[i]()})},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);e.scrollspy(e.data())})})}(jQuery);