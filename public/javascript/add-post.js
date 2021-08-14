function viewPostForm() {
  const newPostForm = document.querySelector(".new-post-section");
  const postSection = document.querySelector(".dashboard-articles");

  newPostForm.style.display = "block";
  postSection.style.display = "none";
}

document.querySelector(".new-post-btn").addEventListener("click", viewPostForm);

async function createNewPost() {
  const title = document.querySelector("#post-title").value;
  const content = document.querySelector("#post-content").value;

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
