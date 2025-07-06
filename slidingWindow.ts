function maxLengthSubStr(s: string) {
  let maxLen = 0;
  let start = 0;
  const seen = new Map<string, number>();

  for (let index = 0; index < s.length; index++) {
    const char = s[index];

    if (seen.has(char) && seen.get(char)! >= start) {
      start = seen.get(char)! + 1;
    }

    seen.set(char, index);
    maxLen = Math.max(maxLen, index - start + 1);
  }

  return maxLen;
}

console.log(maxLengthSubStr("abccbaaa")); // Expected result: 3
