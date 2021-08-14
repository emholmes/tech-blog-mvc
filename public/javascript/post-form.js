function viewPostForm() {
  const newPostForm = document.querySelector(".new-post-section");
  const postSection = document.querySelector(".post-section");

  newPostForm.style.display = "block";
  postSection.style.display = "none";
}

document.querySelector(".new-post-btn").addEventListener("click", viewPostForm);
