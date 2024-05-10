#!/usr/bin/env node
// weakMap

const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = function () {};
const o3 = {"window": 4};


wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm1.set(o3, "45");
wm1.get(o3);
console.log(wm1.get(o3));
export const weakMap = new WeakMap();
const endpoint = {

    protocol: 'http',
    name: 'getUsers',
}
weakMap.set(endpoint, 1);

console.log(weakMap.get(endpoint));