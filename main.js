function pilihJalur(jalur, dari = null) {
  if (dari) {
    localStorage.setItem("asalMasuk", dari);
  }

  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = jalur + ".html";
  }, 1000);
}



// Debug helper
console.log("Jalur terakhir:",
  localStorage.getItem("jalurTerakhir"));

  window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

const delay = Math.random() * 1000 + 800;
