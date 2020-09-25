document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });

  // adding SF places as list items
  // --- your code here!
  const submitCb = (e) => {
    e.preventDefault();

    const inputText = document.querySelector(".favorite-input");
    let oldText = inputText.value;
    inputText.value = "";

    const resList = document.getElementById("restaurants");
    const li = document.createElement("li");

    li.textContent = oldText;

    resList.appendChild(li);
  };

  document.querySelectorAll(".favorite-submit").forEach((submitBtn) => {
    submitBtn.addEventListener("click", submitCb);
  });

  

  // adding new photos

  // --- your code here!
  const photoShowBtn = document.querySelector(".photo-show-button")

  const revealFormFunc = (e) => {
    e.preventDefault();
    const hiddenDiv = document.querySelector(".photo-form-container")
    hiddenDiv.classList.remove("hidden")
  }

  photoShowBtn.addEventListener("click", revealFormFunc )
});
