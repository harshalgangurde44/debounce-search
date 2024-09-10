const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("resultsList");
let debounceTimeout;

const data = [
  "apple",
  "apricot",
  "banana",
  "grape",
  "grapefruit",
  "orange",
  "application",
  "pineapple",
  "peach",
  "pear",
  "plum",
  "pomegranate",
  "papaya",
  "persimmon",
  "mango",
  "mandarin",
  "melon",
  "nectarine",
  "kiwi",
  "kumquat",
  "lemon",
  "lime",
  "blueberry",
  "blackberry",
  "cranberry",
  "strawberry",
  "raspberry",
  "cherry",
  "watermelon",
  "cantaloupe",
  "honeydew",
  "dragonfruit",
  "fig",
  "guava",
  "jackfruit",
  "lychee",
  "mulberry",
  "olive",
  "passionfruit",
  "quince",
  "starfruit",
  "tangerine",
  "coconut",
  "date",
  "durian",
  "elderberry",
  "gooseberry",
  "paprika",
  "currant",
];

function fetchResults(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      resolve(results);
    }, 1000);
  });
}

function handleInputChange(event) {
  const query = event.target.value;

  clearTimeout(debounceTimeout);

  debounceTimeout = setTimeout(() => {
    if (query) {
      fetchResults(query).then((results) => {
        displayResults(results);
      });
    } else {
      displayResults([]);
    }
  }, 500);
}

function displayResults(results) {
  resultsList.innerHTML = "";

  results.forEach((result) => {
    const li = document.createElement("li");
    li.textContent = result;
    resultsList.appendChild(li);
  });
}

searchInput.addEventListener("input", handleInputChange);
