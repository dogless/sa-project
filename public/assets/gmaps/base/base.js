(function(){var e,t=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};e=["extended","included"],this.Gmaps.Base=function(){function n(){}return n.extend=function(n){var r,i,o;for(r in n)i=n[r],t.call(e,r)<0&&(this[r]=i);return null!=(o=n.extended)&&o.apply(this),this},n.include=function(n){var r,i,o;for(r in n)i=n[r],t.call(e,r)<0&&(this.prototype[r]=i);return null!=(o=n.included)&&o.apply(this),this},n}()}).call(this);