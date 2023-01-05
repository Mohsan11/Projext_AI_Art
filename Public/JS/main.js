function onSubmit(e) {
  e.preventDefault();
  document.querySelector(".msg").textContent = "";
  document.querySelector("#image").src = "";
  const prompt = document.querySelector("#prompt").value;
  const size = document.querySelector("#size").value;
  if (prompt === "") {
    alert("Please add some text");
    return;
  }
  generateImageRequest(prompt, size);
}
async function generateImageRequest(prompt, size) {
  try {
    showSpinner();
    const res = await fetch("/openai/generateimage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt, size }),
    });
    if (!res) {
      removeSpinner();
      throw new Error("That image can not be generated");
    }
    const data = await res.json();
    const imageUrl = data.data;
    document.querySelector("#image").src = imageUrl;
    console.log(data.data);
    removeSpinner();
  } catch (error) {
    document.querySelector(".msg").textContent = error;
  }
}
function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}
function removeSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}
document.querySelector("#image-form").addEventListener("submit", onSubmit);
