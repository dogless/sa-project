(function(){this.Gmaps.Google.Objects.Clusterer=function(){function t(t){this.serviceObject=t}return t.prototype.addMarkers=function(t){return _.each(t,function(t){return function(e){return t.addMarker(e)}}(this))},t.prototype.addMarker=function(t){return this.getServiceObject().addMarker(t.getServiceObject())},t.prototype.clear=function(){return this.getServiceObject().clearMarkers()},t.prototype.removeMarker=function(t){return this.getServiceObject().removeMarker(t.getServiceObject())},t.prototype.getServiceObject=function(){return this.serviceObject},t}()}).call(this);