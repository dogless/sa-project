(function(){var t={}.hasOwnProperty,e=function(e,i){function n(){this.constructor=e}for(var s in i)t.call(i,s)&&(e[s]=i[s]);return n.prototype=i.prototype,e.prototype=new n,e.__super__=i.prototype,e};this.Gmaps.Google.Objects.Bound=function(t){function i(t){this.serviceObject=t}return e(i,t),i.include(Gmaps.Google.Objects.Common),i.prototype.extendWith=function(t){var e;return e=_.isArray(t)?t:[t],_.each(e,function(t){return function(e){return e.updateBounds(t)}}(this))},i.prototype.extend=function(t){return this.getServiceObject().extend(this.primitives().latLngFromPosition(t))},i}(Gmaps.Base)}).call(this);