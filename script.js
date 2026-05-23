function calculateMinCost(arr) {
  if (arr.length <= 1) return 0;

  arr.sort((a, b) => a - b);
  let cost = 0;

  while (arr.length > 1) {
    const first = arr.shift();
    const second = arr.shift();
    const sum = first + second;

    cost += sum;

    // insert sum in sorted position
    let i = 0;
    while (i < arr.length && arr[i] < sum) i++;
    arr.splice(i, 0, sum);
  }

  return cost;
}

// DOM Elements
const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');
const result = document.getElementById("result");

// Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const ropes = input.value
    .split(",")
    .map((x) => parseInt(x.trim()))
    .filter((x) => !isNaN(x));

  const cost = calculateMinCost(ropes);

  result.textContent = "Minimum Cost: " + cost;
});