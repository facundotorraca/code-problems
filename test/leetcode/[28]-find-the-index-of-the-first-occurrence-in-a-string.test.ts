import { strStr } from "../../src/leetcode/[28]-find-the-index-of-the-first-occurrence-in-a-string";

test("Example 1", () => expect(strStr("sadbutsad", "sad")).toBe(0));
test("Example 2", () => expect(strStr("leetcode", "leeto")).toBe(-1));
