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
    const hiddenDivClassList = document.querySelector(".photo-form-container").classList
    if (hiddenDivClassList.contains("hidden")){
      hiddenDivClassList.remove("hidden");
    } else {
      hiddenDivClassList.add("hidden")
    }
  }

  photoShowBtn.addEventListener("click", revealFormFunc )

  const addPhotoBtn = document.querySelector(".photo-url-submit")

  const appendDogPhoto = (event) => {
    event.preventDefault();
    const photo = document.querySelector(".photo-url-input")

    const dogPhotosList = document.querySelector(".dog-photos")

    const newImg = document.createElement("img")
    newImg.src = photo.value
    photo.value = "";
    const newPhotoLi = document.createElement("li")
    newPhotoLi.append(newImg)

    dogPhotosList.appendChild(newPhotoLi)
  }

  addPhotoBtn.addEventListener("click", appendDogPhoto)
});
