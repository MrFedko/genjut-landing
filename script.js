const prompt = document.getElementById("prompt").textContent.trim();
const copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(prompt);
    copyBtn.textContent = "Copied ✓";
    setTimeout(() => copyBtn.textContent = "Copy", 1600);
  } catch {
    const area = document.createElement("textarea");
    area.value = prompt;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    copyBtn.textContent = "Copied ✓";
    setTimeout(() => copyBtn.textContent = "Copy", 1600);
  }
});

document.getElementById("downloadRef").addEventListener("click", () => {
  // Replace this with the real MP4 URL when you have the reference video.
  const url = "assets/reference-video.mp4";
  const a = document.createElement("a");
  a.href = url;
  a.download = "reference-video.mp4";
  document.body.appendChild(a);
  a.click();
  a.remove();
});

document.getElementById("moreBtn").addEventListener("click", e => {
  e.preventDefault();
  alert("Add your affiliate URL to the #moreBtn link in index.html.");
});
