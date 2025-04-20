const idkMap = {
  // Lowercase letters
  "Idk Idk": "a", "Idk iDk": "b", "Idk IDk": "c", "Idk idK": "d",
  "Idk IdK": "e", "Idk iDK": "f", "iDk Idk": "g", "iDk iDk": "h",
  "iDk IDk": "i", "iDk idK": "j", "iDk IdK": "k", "iDk iDK": "l",
  "IDk Idk": "m", "IDk iDk": "n", "IDk IDk": "o", "IDk idK": "p",
  "IDk IdK": "q", "IDk iDK": "r", "idK Idk": "s", "idK iDk": "t",
  "idK IDk": "u", "idK idK": "v", "idK IdK": "w", "idK iDK": "x",
  "IdK Idk": "y", "IdK iDk": "z",

  // Capital letters
  "IdK IDk": "A", "IdK idK": "B", "IdK IdK": "C", "IdK iDK": "D",
  "iDK Idk": "E", "iDK iDk": "F", "iDK IDk": "G", "iDK idK": "H",
  "iDK IdK": "I", "iDK iDK": "J", "IDK Idk": "K", "IDK iDk": "L",
  "IDK IDk": "M", "IDK idK": "N", "IDK IdK": "O", "IDK iDK": "P",
  "Idk IDK": "Q", "iDk IDK": "R", "IDk IDK": "S", "idK IDK": "T",
  "IdK IDK": "U", "iDK IDK": "V", "IDK IDK": "W"
};

const reverseMap = Object.entries(idkMap).reduce((acc, [key, val]) => {
  acc[val] = key;
  return acc;
}, {});

function toIDKian() {
  const text = document.getElementById("textInput").value;
  let result = [];

  for (let char of text) {
    if (char === " ") {
      result.push("IDK");
    } else if (reverseMap[char]) {
      result.push(reverseMap[char]);
    }
  }

  document.getElementById("output").innerText = result.join(" ");
}

function toText() {
  const idkian = document.getElementById("idkInput").value.trim();
  const parts = idkian.split(/\s+/);
  let result = [];
  let i = 0;
  let easterEggFound = false;

  while (i < parts.length) {
    if (parts[i] === "IDK") {
      result.push(" ");
      i++;
    } else {
      const pair = parts[i] + " " + parts[i + 1];
      const letter = idkMap[pair];
      if (letter) {
        result.push(letter);

        // Easter egg trigger: if last 3 chars spell "idk"
        const lastThree = result.slice(-3).join("").toLowerCase();
        if (lastThree === "idk" && !easterEggFound) {
          document.getElementById("easterEgg").style.display = "block";
          easterEggFound = true;
        }
      }
      i += 2;
    }
  }

  document.getElementById("output").innerText = result.join("");
}
