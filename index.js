function receivesAFunction(cb){
    return cb();
}

function returnsANamedFunction(){
    let name = function(){};

    return name;
}

function returnsAnAnonymousFunction(){
    return function(){};
}