export default function cleanSet(set, startString) {
    let result = [];
    for (const item of set) {
        if (item.includes(startString)) {
            result.push(item);
        }
    }
    return result;
}