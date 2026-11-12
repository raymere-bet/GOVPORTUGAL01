(function () {
  var chave = "aviso-espelho-fechado";
  function init() {
    if (!/Espelho não oficial/.test(document.title)) {
      document.title = "Espelho não oficial · " + document.title;
    }
    if (localStorage.getItem(chave)) return;
    var b = document.createElement("div");
    b.id = "aviso-espelho";
    b.setAttribute("style", [
      "position:fixed","left:16px","bottom:16px","z-index:999999","max-width:360px",
      "background:#021c51","color:#fff","font:14px/1.4 'Noto Sans',sans-serif",
      "padding:14px 40px 14px 16px","border-radius:8px","box-shadow:0 8px 24px rgba(0,0,0,.35)",
      "border:1px solid #5f93fc"
    ].join(";"));
    b.innerHTML = '<strong>Espelho não oficial.</strong> Cópia estática de estudo do ' +
      '<a href="https://www.gov.pt/" target="_blank" rel="noopener" style="color:#a0d8fe">gov.pt</a>. ' +
      'O site oficial é <strong>gov.pt</strong>.';
    var x = document.createElement("button");
    x.textContent = "×";
    x.setAttribute("aria-label", "Fechar aviso");
    x.setAttribute("style", "position:absolute;top:6px;right:8px;background:none;border:0;color:#fff;font-size:20px;line-height:1;cursor:pointer");
    x.onclick = function () { b.remove(); localStorage.setItem(chave, "1"); };
    b.appendChild(x);
    document.body.appendChild(b);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();
