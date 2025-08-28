// Minimal demo behavior for buttons & modal
document.addEventListener("click", (e)=>{
  const t = e.target;

  // "Check" buttons open a details modal with row data
  if(t.matches("[data-check]")){
    const row = t.closest("tr");
    const cells = [...row.querySelectorAll("td")].map(td=>td.innerText.trim());
    const modalTitle = document.getElementById("detailModalLabel");
    const modalBody  = document.getElementById("detailModalBody");

    modalTitle.textContent = "Details";
    modalBody.innerHTML = `
      <div class="table-responsive">
        <table class="table table-sm">
          ${cells.map((v,i)=>`<tr><th scope="row">Field ${i+1}</th><td>${v}</td></tr>`).join("")}
        </table>
      </div>
    `;

    const modal = new bootstrap.Modal(document.getElementById('detailModal'));
    modal.show();
  }

  // Accept / Reject demo
  if(t.matches("[data-accept]")){
    t.classList.remove("btn-outline-success");
    t.classList.add("btn-success");
    t.textContent = "Accepted";
  }
  if(t.matches("[data-reject]")){
    t.classList.remove("btn-outline-danger");
    t.classList.add("btn-danger");
    t.textContent = "Rejected";
  }
});
