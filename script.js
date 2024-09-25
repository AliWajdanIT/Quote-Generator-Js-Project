let button = document.querySelector(".card button");
let quote = document.querySelector(".quote");
let qname = document.querySelector(".qname");
let sbtn = document.querySelector(".speech");
let cbtn = document.querySelector(".copy");
let tbtn = document.querySelector(".twitter");

function btnclick() {
  button.classList.add("active");
  button.innerText = "loading ...";
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quote.innerHTML = result.content;
      qname.innerHTML = result.author;
      button.classList.remove("active");
      button.innerText = "New Quote";
    });
}

sbtn.addEventListener("click", () => {
  let uter = new SpeechSynthesisUtterance(
    `Quote of the day is ${quote.innerHTML} by ${qname.innerHTML}`
  );
  speechSynthesis.speak(uter);
});
cbtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quote.innerText);
});
function tclick() {
  let url = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
  window.open(url, "_blank");
}

tbtn.addEventListener("click", tclick);

button.addEventListener("click", btnclick);
