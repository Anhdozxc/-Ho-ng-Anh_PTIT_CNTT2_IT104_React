function groupAnagrams(words) {
  const map = new Map();

  for (const word of words) {
    // Sắp xếp ký tự trong từ để làm key chung cho các từ giống nhau
    const sorted = word.split("").sort().join("");

    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(word);
  }
  // Trả về danh sách các nhóm
  return Array.from(map.values());
}
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);
console.log(result);
