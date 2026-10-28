import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import YAML from "yaml";

type Row = Record<string, any>;
const root = "content/nodes";
const rows: Row[] = [];
const issues: string[] = [];

for (const dir of readdirSync(root).sort()) {
  for (const f of readdirSync(join(root, dir)).sort()) {
    const path = join(root, dir, f);
    const raw = readFileSync(path, "utf8").replace(/\r\n/g, "\n");
    const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!m) { issues.push(`${path}: no front matter`); continue; }
    const fm = YAML.parse(m[1]);
    const blocks: { type: string; data: any }[] = [];
    const re = /^::: (\S+)\n([\s\S]*?)\n:::$/gm;
    let b;
    while ((b = re.exec(m[2]))) {
      let data: any = {};
      try { data = YAML.parse(b[2]) ?? {}; } catch { issues.push(`${path}: bad YAML in ${b[1]}`); }
      blocks.push({ type: b[1], data });
    }
    const ex = blocks.filter((x) => x.type === "exercise").map((x) => x.data);
    const noVer = ex.filter((e) => !e.verification).map((e) => e.id);
    const unchecked = ex.filter((e) => e.verification?.checkable === false).map((e) => e.id);
    const noProv = ex.filter((e) => !e.provenance).map((e) => e.id);
    const cnt = (t: string) => blocks.filter((x) => x.type === t).length;
    rows.push({
      id: fm.id, L: fm.lecture, status: fm.status, hidden: fm.hidden ? "H" : "", KB: +(statSync(path).size / 1024).toFixed(1),
      src: (fm.sources ?? []).length, stmt: cnt("formal-statement"), ex: ex.length,
      basic: ex.filter((e) => e.tier === "basic").length, exam: ex.filter((e) => e.tier === "exam").length,
      prov: ["official-key", "handout-answer", "written-for-site"].map((p) => ex.filter((e) => e.provenance === p).length).join("/"),
      trap: cnt("trap"), gd: cnt("going-deeper"), vis: cnt("visual"), cq: cnt("concept-question"),
      noVer: noVer.length, unchk: unchecked.length, noProv: noProv.length,
      _noVer: noVer, _noProv: noProv,
      flags: [
        fm.hidden ? "" : null,
        noVer.length ? "NO-VER" : "", noProv.length ? "NO-PROV" : "",
        cnt("trap") + cnt("concept-question") < 3 ? "TRAPS+CQ<3" : "",
        fm.status === "draft" ? "DRAFT" : "", (fm.sources ?? []).length === 0 ? "NO-SRC" : "",
        statSync(path).size < 3072 ? "STUB<3KB" : "",
      ].filter(Boolean).join(","),
    });
  }
}
const cols = ["id", "status", "hidden", "KB", "src", "stmt", "ex", "basic", "exam", "prov", "unchk", "trap", "gd", "vis", "cq", "flags"];
console.log(cols.join("\t"));
for (const r of rows) console.log(cols.map((c) => r[c]).join("\t"));
console.log(`\nnodes: ${rows.length}, flagged: ${rows.filter((r) => r.flags).length}`);
for (const r of rows) {
  if (r._noVer.length) console.log(`NO-VER ${r.id}: ${r._noVer.join(", ")}`);
  if (r._noProv.length) console.log(`NO-PROV ${r.id}: ${r._noProv.join(", ")}`);
}
for (const i of issues) console.log("ISSUE", i);
