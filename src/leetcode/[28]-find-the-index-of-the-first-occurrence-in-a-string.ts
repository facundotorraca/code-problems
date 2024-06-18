/**************************************************************
 * Given two strings needle and haystack, return the index
 * of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 *
 * Constraints:
 * # 1 <= haystack.length, needle.length <= 104
 * # haystack and needle consist of only lowercase English characters.
 **************************************************************/
export function strStr(haystack: string, needle: string): number {
  let i = 0;

  while (i < haystack.length) {
    let j = 0;
    let start = i;

    while (j < needle.length && haystack[i] === needle[j]) {
      j++;
      i++;
    }

    // if we reach end of word, it will be ready
    if (j === needle.length) return start;
    else i = start + 1;
  }

  return -1;
}
