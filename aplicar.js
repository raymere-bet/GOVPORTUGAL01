const fs = require("fs");
const path = require("path");
const raiz = __dirname;
function andar(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (![".git", "node_modules", "_next"].includes(e.name)) andar(p);
      continue;
    }
    if (!e.name.endsWith(".html")) continue;
    const rel = path.relative(raiz, dir);
    const prefixo = rel ? "../".repeat(rel.split(path.sep).length) : "";
    let h = fs.readFileSync(p, "utf8");
    if (h.includes("aviso.js")) continue;
    h = h.replace("</head>", '<script src="' + prefixo + 'aviso.js" defer></script></head>');
    fs.writeFileSync(p, h);
    console.log("ok:", path.relative(raiz, p));
  }
}
andar(raiz);
console.log("Pronto.");
