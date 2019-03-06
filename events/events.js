var EventEmitter = require('events').EventEmitter;

var getResource = function(c) {
    var e = new EventEmitter();
    process.nextTick(() => {
        var count = 0;
        e.emit('start');
        // var t = setInterval(function () {
        //     e.emit('data', ++count);
        //     if (count === c) {
        //         e.emit('end', count);
        //         clearInterval(t);
        //     }
        // }, 10);
    });
    return(e);
};
var emitDifferently = function(bool){
    var e = new EventEmitter();
    if (bool){
        process.nextTick(()=>{
            this.emit('hi')
        });
        return(e);
    }else{
        process.nextTick(()=>{
            e.emit('bad')
        });
        return(e);
    }
    return(e);
};

function boolean(x,y){
    var bool = x === y
    return bool
}

function emitter(x,y){
    var bool = boolean(x,y)
    var emitter = emitDifferently(bool)
    emitter.on('hi',()=>{
        console.log('Hi to everyone')
    })
    emitter.on('bad',()=>{
        console.log('This is bad')
    })
}

var emit = emitter(5,6)
console.log(emit)

var r = getResource(5);

r.on('start', () => {
    console.log("I've started!");
});

// r.on('data', function(d) {
//     console.log("   I received data -> " + d);
// });

// r.on('end', function(t) {
//     console.log("I'm done, with " + t + " data events.");
// });


