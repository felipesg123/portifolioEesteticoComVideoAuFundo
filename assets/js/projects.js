/* =========================
   TABS DE PROJETOS
========================= */

const tabs = document.querySelectorAll(".tab");
const groups = document.querySelectorAll(".projects-group");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove estado ativo
    tabs.forEach(t => t.classList.remove("active"));
    groups.forEach(g => g.classList.remove("active"));

    // Ativa tab atual
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
