function viewPostForm() {
  const newPostForm = document.querySelector(".new-post-section");
  const postSection = document.querySelector(".dashboard-articles");
  const addPostBtn = document.querySelector(".new-post-btn");
  
  addPostBtn.style.display = "none";
  postSection.style.display = "none";
  newPostForm.style.display = "block";
}

document.querySelector(".new-post-btn").addEventListener("click", viewPostForm);

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
