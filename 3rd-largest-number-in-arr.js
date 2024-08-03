const ip = [9, 9, 8, 6, 2, 9, 0, 2, 9, 1];
const eliminateDuplicate = Array.from(new Set(ip));
const newNumber = eliminateDuplicate.sort((a, b) => b - a);
if (newNumber.length >= 3) {
  console.log(newNumber[2]);
}
