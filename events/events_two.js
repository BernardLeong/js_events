var util = require('util');
var EventEmitter = require('events').EventEmitter;

function EmitResponse () {    
    var self = this;
    
    process.nextTick(function() {
        var count = 0;
        self.emit('end');
    });
    
};

util.inherits(EmitResponse, EventEmitter);
console.log(EmitResponse())
module.exports = EmitResponse;
