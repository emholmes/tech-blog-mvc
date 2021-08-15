const addPostBtn = document.querySelector(".new-post-btn");

function viewPostForm() {
  const newPostForm = document.querySelector(".new-post-section");
  const postSection = document.querySelector(".dashboard-articles");

  newPostForm.style.display = "block";
  postSection.style.display = "none";
  addPostBtn.style.display = "none";
}

addPostBtn.addEventListener("click", viewPostForm);

async function createNewPost() {
  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector('textarea[name="post-content"]').value.trim();

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title, 
      content
    }),
    headers: { "Content-Type": "application/json" }
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#add-post-btn").addEventListener("click", createNewPost);
