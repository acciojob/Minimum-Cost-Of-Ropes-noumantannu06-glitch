function calculateMinCost(arr) {
  if (arr.length <= 1) return 0;

  arr.sort((a, b) => a - b);
  let cost = 0;

  while (arr.length > 1) {
    let first = arr.shift();
    let second = arr.shift();

    let sum = first + second;
    cost += sum;

    // insert sum back in sorted order
    let i = 0;
    while (i < arr.length && arr[i] < sum) i++;
    arr.splice(i, 0, sum);
  }

  return cost;
}

// DOM
const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');
const result = document.getElementById("result");

// ✅ FIXED EVENT LISTENER
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const ropes = input.value
    .split(",")
    .map(x => parseInt(x.trim()))
    .filter(x => !isNaN(x));

  const cost = calculateMinCost(ropes);

  result.textContent = cost;
});  // ✅ VERY IMPORTANT (this was missing)