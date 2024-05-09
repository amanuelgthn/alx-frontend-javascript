#!/usr/bin/env node 
/// promise

let nestedPromise = new Promise((resolveOuter) => {
    resolveOuter(
        new Promise((resolveInner) => {
            setTimeout(() => {
                resolveInner("Inner promise resolved!");
            }, 1000)}
        )
    )
});

nestedPromise.then((res) => {
    res.then((message) => {
        console.log(message); // This will log "Inner promise resolved!" after 1 second
    });
});
