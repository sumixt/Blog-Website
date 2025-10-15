// Function to add comments dynamically
function addComment(postNumber) {
  const name = document.getElementById(`name${postNumber}`).value.trim();
  const comment = document.getElementById(`comment${postNumber}`).value.trim();

  if (name && comment) {
    const commentList = document.getElementById(`commentList${postNumber}`);
    const li = document.createElement("li");
    li.textContent = `${name}: ${comment}`;
    commentList.appendChild(li);

    // Clear input fields
    document.getElementById(`name${postNumber}`).value = "";
    document.getElementById(`comment${postNumber}`).value = "";
  } else {
    alert("Please enter both name and comment!");
  }
}
