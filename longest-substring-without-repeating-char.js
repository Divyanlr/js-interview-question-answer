function lengthOfLongestSubstring(s) {
    let map = new Map();
    let maxLen = 0, start = 0;
    for (let end = 0; end < s.length; end++) {
        if (map.has(s[end])) {
            start = Math.max(map.get(s[end]) + 1, start);
        }
        map.set(s[end], end);
        maxLen = Math.max(maxLen, end - start + 1);
    }
    return maxLen;
}
