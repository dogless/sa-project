(function(){var t={}.hasOwnProperty,e=function(e,i){function n(){this.constructor=e}for(var s in i)t.call(i,s)&&(e[s]=i[s]);return n.prototype=i.prototype,e.prototype=new n,e.__super__=i.prototype,e};this.Gmaps.Google.Builders.Circle=function(t){function i(t,e){this.args=t,this.provider_options=null!=e?e:{},this.before_init(),this.serviceObject=this.create_circle(),this.after_init()}return e(i,t),i.prototype.create_circle=function(){return new(this.primitives().circle)(this.circle_options())},i.prototype.circle_options=function(){var t;return t={center:new(this.primitives().latLng)(this.args.lat,this.args.lng),radius:this.args.radius},_.defaults(t,this.provider_options)},i}(Gmaps.Objects.BaseBuilder)}).call(this);