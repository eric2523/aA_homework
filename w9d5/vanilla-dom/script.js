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
  document.getElementsByClassName("favorite-submit").forEach((submitBtn) => {
    submitBtn.addEventListener("click", submitCb)
  })

  const submitCb = (e) => {
    e.preventDefault();
    const inputText = document.querySelector(".favorite-input")
    inputTexts.value = ""; 

  }
  // --- your code here!




  // adding new photos

  // --- your code here!



});
