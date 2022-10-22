function countMatches(regex, str) {
    const matchResult = str.match(regex);
    return (matchResult ?? []).length;
}

console.assert(countMatches(/a/g, 'ababa'), 3);
