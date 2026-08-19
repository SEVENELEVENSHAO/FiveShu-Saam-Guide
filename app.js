const MERIDIANS = [
  { id: "lu", name: "肺经", code: "LU", yinYang: "yin", element: "metal", elementZh: "金", mother: "太渊 LU9", child: "尺泽 LU5", jeong: { plus: ["太白 SP3", "太渊 LU9"], minus: ["少府 HT8", "鱼际 LU10"] }, seung: { plus: ["少府 HT8", "鱼际 LU10"], minus: ["阴谷 KI10", "尺泽 LU5"] } },
  { id: "li", name: "大肠经", code: "LI", yinYang: "yang", element: "metal", elementZh: "金", mother: "曲池 LI11", child: "二间 LI2", jeong: { plus: ["足三里 ST36", "曲池 LI11"], minus: ["阳谷 SI5", "阳溪 LI5"] }, seung: { plus: ["阳谷 SI5", "阳溪 LI5"], minus: ["足通谷 BL66", "二间 LI2"] } },
  { id: "st", name: "胃经", code: "ST", yinYang: "yang", element: "earth", elementZh: "土", mother: "解溪 ST41", child: "厉兑 ST45", jeong: { plus: ["阳谷 SI5", "解溪 ST41"], minus: ["足临泣 GB41", "陷谷 ST43"] }, seung: { plus: ["足临泣 GB41", "陷谷 ST43"], minus: ["商阳 LI1", "厉兑 ST45"] } },
  { id: "sp", name: "脾经", code: "SP", yinYang: "yin", element: "earth", elementZh: "土", mother: "大都 SP2", child: "商丘 SP5", jeong: { plus: ["少府 HT8", "大都 SP2"], minus: ["大敦 LR1", "隐白 SP1"] }, seung: { plus: ["大敦 LR1", "隐白 SP1"], minus: ["经渠 LU8", "商丘 SP5"] } },
  { id: "ht", name: "心经", code: "HT", yinYang: "yin", element: "fire", elementZh: "火", mother: "少冲 HT9", child: "神门 HT7", jeong: { plus: ["大敦 LR1", "少冲 HT9"], minus: ["阴谷 KI10", "少海 HT3"] }, seung: { plus: ["阴谷 KI10", "少海 HT3"], minus: ["太白 SP3", "神门 HT7"] } },
  { id: "si", name: "小肠经", code: "SI", yinYang: "yang", element: "fire", elementZh: "火", mother: "后溪 SI3", child: "小海 SI8", jeong: { plus: ["足临泣 GB41", "后溪 SI3"], minus: ["足通谷 BL66", "前谷 SI2"] }, seung: { plus: ["足通谷 BL66", "前谷 SI2"], minus: ["足三里 ST36", "小海 SI8"] } },
  { id: "bl", name: "膀胱经", code: "BL", yinYang: "yang", element: "water", elementZh: "水", mother: "至阴 BL67", child: "束骨 BL65", jeong: { plus: ["商阳 LI1", "至阴 BL67"], minus: ["足三里 ST36", "委中 BL40"] }, seung: { plus: ["足三里 ST36", "委中 BL40"], minus: ["足临泣 GB41", "束骨 BL65"] } },
  { id: "ki", name: "肾经", code: "KI", yinYang: "yin", element: "water", elementZh: "水", mother: "复溜 KI7", child: "涌泉 KI1", jeong: { plus: ["经渠 LU8", "复溜 KI7"], minus: ["太白 SP3", "太溪 KI3"] }, seung: { plus: ["太白 SP3", "太溪 KI3"], minus: ["大敦 LR1", "涌泉 KI1"] } },
  { id: "pc", name: "心包经", code: "PC", yinYang: "yin", element: "fire", elementZh: "火", mother: "中冲 PC9", child: "大陵 PC7", jeong: { plus: ["大敦 LR1", "中冲 PC9"], minus: ["阴谷 KI10", "曲泽 PC3"] }, seung: { plus: ["阴谷 KI10", "曲泽 PC3"], minus: ["太白 SP3", "大陵 PC7"] } },
  { id: "te", name: "三焦经", code: "TE", yinYang: "yang", element: "fire", elementZh: "火", mother: "中渚 TE3", child: "天井 TE10", jeong: { plus: ["足临泣 GB41", "中渚 TE3"], minus: ["足通谷 BL66", "液门 TE2"] }, seung: { plus: ["足通谷 BL66", "液门 TE2"], minus: ["足三里 ST36", "天井 TE10"] } },
  { id: "gb", name: "胆经", code: "GB", yinYang: "yang", element: "wood", elementZh: "木", mother: "侠溪 GB43", child: "阳辅 GB38", jeong: { plus: ["足通谷 BL66", "侠溪 GB43"], minus: ["商阳 LI1", "足窍阴 GB44"] }, seung: { plus: ["商阳 LI1", "足窍阴 GB44"], minus: ["阳谷 SI5", "阳辅 GB38"] } },
  { id: "lr", name: "肝经", code: "LR", yinYang: "yin", element: "wood", elementZh: "木", mother: "曲泉 LR8", child: "行间 LR2", jeong: { plus: ["阴谷 KI10", "曲泉 LR8"], minus: ["经渠 LU8", "中封 LR4"] }, seung: { plus: ["经渠 LU8", "中封 LR4"], minus: ["少府 HT8", "行间 LR2"] } }
];

const POINT_ELEMENTS = {
  LU5: ["water", "水"], LU8: ["metal", "金"], LU9: ["earth", "土"], LU10: ["fire", "火"],
  LI1: ["metal", "金"], LI2: ["water", "水"], LI5: ["fire", "火"], LI11: ["earth", "土"],
  ST36: ["earth", "土"], ST41: ["fire", "火"], ST43: ["wood", "木"], ST45: ["metal", "金"],
  SP1: ["wood", "木"], SP2: ["fire", "火"], SP3: ["earth", "土"], SP5: ["metal", "金"],
  HT3: ["water", "水"], HT7: ["earth", "土"], HT8: ["fire", "火"], HT9: ["wood", "木"],
  SI2: ["water", "水"], SI3: ["wood", "木"], SI5: ["fire", "火"], SI8: ["earth", "土"],
  BL40: ["earth", "土"], BL65: ["wood", "木"], BL66: ["water", "水"], BL67: ["metal", "金"],
  KI1: ["wood", "木"], KI3: ["earth", "土"], KI7: ["metal", "金"], KI10: ["water", "水"],
  PC3: ["water", "水"], PC7: ["earth", "土"], PC9: ["wood", "木"],
  TE2: ["water", "水"], TE3: ["wood", "木"], TE10: ["earth", "土"],
  GB38: ["fire", "火"], GB41: ["wood", "木"], GB43: ["water", "水"], GB44: ["metal", "金"],
  LR1: ["wood", "木"], LR2: ["fire", "火"], LR4: ["metal", "金"], LR8: ["water", "水"]
};

const grid = document.querySelector("#meridianGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#meridianSearch");
const select = document.querySelector("#meridianSelect");
const result = document.querySelector("#calculationResult");
const logicText = document.querySelector("#logicText");
let activeFilter = "all";

function formulaMarkup(formula) {
  return `<span class="tonify">补 ${formula.plus.map(pointMarkup).join(" · ")}</span><br><span class="sedate">泻 ${formula.minus.map(pointMarkup).join(" · ")}</span>`;
}

function pointMarkup(point) {
  const match = point.match(/^(.*?)\s+([A-Z]+\d+)$/);
  if (!match) return point;
  const [, name, code] = match;
  const [element, elementZh] = POINT_ELEMENTS[code] || ["metal", "五行未标注"];
  return `<span class="point-with-element"><span>${name}</span><span class="element-swatch phase-${element}" role="img" aria-label="五行：${elementZh}" title="${elementZh}"></span><span>${code}</span></span>`;
}

function renderMeridians() {
  const query = searchInput.value.trim().toLowerCase();
  const list = MERIDIANS.filter((item) => {
    const matchesFilter = activeFilter === "all" || item.yinYang === activeFilter;
    const searchable = `${item.name} ${item.code} ${item.elementZh} ${item.mother} ${item.child} ${item.jeong.plus} ${item.jeong.minus} ${item.seung.plus} ${item.seung.minus}`.toLowerCase();
    return matchesFilter && searchable.includes(query);
  });
  grid.innerHTML = list.map((item) => `
    <button class="meridian-card" type="button" aria-expanded="false" data-id="${item.id}" aria-label="${item.name}，点击查看舍岩正格与胜格">
      <span class="card-heading">
        <span class="meridian-title"><strong>${item.name}</strong><span>${item.code} · ${item.yinYang === "yin" ? "阴" : "阳"}</span></span>
        <span class="phase-badge phase-${item.element}">${item.elementZh}</span>
      </span>
      <span class="point-pair">
        <span class="point-block"><span>虚 · 补母</span><b>${pointMarkup(item.mother)}</b></span>
        <span class="point-block"><span>实 · 泻子</span><b>${pointMarkup(item.child)}</b></span>
      </span>
      <span class="formula-panel">
        <span class="formula-row"><span class="formula-label">正格</span><span class="formula-points">${formulaMarkup(item.jeong)}</span></span>
        <span class="formula-row"><span class="formula-label">胜格</span><span class="formula-points">${formulaMarkup(item.seung)}</span></span>
      </span>
    </button>`).join("");
  emptyState.hidden = list.length > 0;
}

function updateCalculation() {
  const item = MERIDIANS.find((entry) => entry.id === select.value) || MERIDIANS[0];
  const pattern = document.querySelector('input[name="pattern"]:checked').value;
  const isDeficiency = pattern === "deficiency";
  const formula = isDeficiency ? item.jeong : item.seung;
  result.innerHTML = `
    <div class="result-head">
      <div><p>${item.code} · ${item.elementZh} · ${item.yinYang === "yin" ? "阴经" : "阳经"}</p><h3>${item.name}${isDeficiency ? "正格" : "胜格"}</h3></div>
      <span class="result-tag">${isDeficiency ? "虚" : "实"}</span>
    </div>
    <div class="treatment-columns">
      <div class="treatment-group"><span>补</span><strong>${formula.plus.map(pointMarkup).join("<br>")}</strong></div>
      <div class="treatment-group"><span>泻</span><strong>${formula.minus.map(pointMarkup).join("<br>")}</strong></div>
    </div>`;
  logicText.textContent = isDeficiency ? "正格：补母经与本经母穴，泻克我经与本经克我穴。" : "胜格：补克我经与本经克我穴，泻子经与本经子穴。";
}

MERIDIANS.forEach((item) => select.insertAdjacentHTML("beforeend", `<option value="${item.id}">${item.name} · ${item.code} · ${item.elementZh}</option>`));
renderMeridians();
updateCalculation();

searchInput.addEventListener("input", renderMeridians);
document.querySelectorAll(".filter-chip").forEach((button) => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter-chip").forEach((chip) => { chip.classList.toggle("is-active", chip === button); chip.setAttribute("aria-pressed", String(chip === button)); });
  renderMeridians();
}));
grid.addEventListener("click", (event) => {
  const card = event.target.closest(".meridian-card");
  if (!card) return;
  card.setAttribute("aria-expanded", String(card.getAttribute("aria-expanded") !== "true"));
});
document.querySelector("#calculatorForm").addEventListener("change", updateCalculation);

document.querySelectorAll(".nav-item").forEach((button) => button.addEventListener("click", () => {
  const target = button.dataset.target;
  document.querySelectorAll(".view").forEach((view) => { const active = view.dataset.view === target; view.hidden = !active; view.classList.toggle("is-active", active); });
  document.querySelectorAll(".nav-item").forEach((item) => { const active = item === button; item.classList.toggle("is-active", active); active ? item.setAttribute("aria-current", "page") : item.removeAttribute("aria-current"); });
  window.scrollTo({ top: 0, behavior: "smooth" });
}));

const dialog = document.querySelector("#infoDialog");
const infoButton = document.querySelector("#infoButton");
infoButton.addEventListener("click", () => dialog.showModal());
document.querySelector("#closeDialog").addEventListener("click", () => dialog.close());
document.querySelector("#understoodButton").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener("close", () => infoButton.focus());
