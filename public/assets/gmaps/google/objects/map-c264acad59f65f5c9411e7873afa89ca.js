(function(){var t={}.hasOwnProperty,e=function(e,i){function n(){this.constructor=e}for(var s in i)t.call(i,s)&&(e[s]=i[s]);return n.prototype=i.prototype,e.prototype=new n,e.__super__=i.prototype,e};this.Gmaps.Google.Objects.Map=function(t){function i(t){this.serviceObject=t}return e(i,t),i.prototype.getServiceObject=function(){return this.serviceObject},i.prototype.centerOn=function(t){return this.getServiceObject().setCenter(this.primitives().latLngFromPosition(t))},i.prototype.fitToBounds=function(t){return t.isEmpty()?void 0:this.getServiceObject().fitBounds(t)},i.prototype.primitives=function(){return this.constructor.PRIMITIVES},i}(Gmaps.Base)}).call(this);