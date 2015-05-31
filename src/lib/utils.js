
export function println(msg) {
    console.log(msg);
}

export function printMap(map) {
    map.forEach(function(pair) {
        console.log(pair);
    });
}