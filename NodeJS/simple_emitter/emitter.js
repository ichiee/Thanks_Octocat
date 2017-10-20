function Emitter (){
    this.events = {};
}
// listener is normally function

Emitter.prototype.on = function (type, listener){
    this.events[type] = this.events[type] || []; //make sure it is empty array unless exinsted
    this.events[type].push(listener);
}
 /* what it is doing is that
  whatever event : [function(){}, function(){}...]
 */
Emitter.prototype.emit = function (type){
    if (this.events[type]){
        this.events[type].forEach(function(listener){
            listener();        
        });
    }
}

module.exports = Emitter;