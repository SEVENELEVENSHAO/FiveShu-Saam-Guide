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
const selector = document.querySelector("#meridianSelector");
const chart = document.querySelector("#elementChart");
let selectedMeridianId = "lu";

const ELEMENT_PAIRS = [
  { id: "wood", zh: "木", meridians: ["lr", "gb"] },
  { id: "fire", zh: "火", meridians: ["ht", "si"] },
  { id: "earth", zh: "土", meridians: ["sp", "st"] },
  { id: "metal", zh: "金", meridians: ["lu", "li"] },
  { id: "water", zh: "水", meridians: ["ki", "bl"] }
];

const ELEMENTS = {
  fire: { zh: "火", x: 180, y: 42 },
  earth: { zh: "土", x: 254, y: 108 },
  metal: { zh: "金", x: 236, y: 216 },
  water: { zh: "水", x: 124, y: 216 },
  wood: { zh: "木", x: 106, y: 108 }
};
const MOTHER_OF = { wood: "water", fire: "wood", earth: "fire", metal: "earth", water: "metal" };
const CHILD_OF = { wood: "fire", fire: "earth", earth: "metal", metal: "water", water: "wood" };
const CONTROLLER_OF = { wood: "metal", fire: "water", earth: "wood", metal: "fire", water: "earth" };
const GENERATION_EDGES = [["wood", "fire"], ["fire", "earth"], ["earth", "metal"], ["metal", "water"], ["water", "wood"]];
const CONTROL_EDGES = [["wood", "earth"], ["earth", "water"], ["water", "fire"], ["fire", "metal"], ["metal", "wood"]];
const CHART_POINT_POSITIONS = {
  fire: { x: 210, y: -70 },
  earth: { x: 286, y: 46 },
  metal: { x: 270, y: 146 },
  water: { x: 16, y: 146 },
  wood: { x: 0, y: 46 }
};

function currentMeridianFirst(points, meridianCode) {
  const isCurrentMeridianPoint = (point) => point.match(/([A-Z]+)\d+$/)?.[1] === meridianCode;
  return [...points].sort((a, b) => Number(isCurrentMeridianPoint(b)) - Number(isCurrentMeridianPoint(a)));
}

function formulaMarkup(formula, meridianCode, labels) {
  return `<span class="formula-action tonify">${labels.plus}</span><span class="formula-point-list">${currentMeridianFirst(formula.plus, meridianCode).map(pointMarkup).join("")}</span><span class="formula-action sedate">${labels.minus}</span><span class="formula-point-list">${currentMeridianFirst(formula.minus, meridianCode).map(pointMarkup).join("")}</span>`;
}

function pointMarkup(point) {
  const match = point.match(/^(.*?)\s+([A-Z]+\d+)$/);
  if (!match) return point;
  const [, name, code] = match;
  const [element, elementZh] = POINT_ELEMENTS[code] || ["metal", "五行未标注"];
  return `<span class="five-point-tile" role="img" aria-label="${name} ${code}，五行属${elementZh}" title="${elementZh}"><span class="five-point-name phase-${element}">${name}</span><span class="five-point-code">${code}</span></span>`;
}

function renderSelector() {
  selector.innerHTML = ELEMENT_PAIRS.map((elementPair) => {
    const meridians = elementPair.meridians.map((id) => MERIDIANS.find((item) => item.id === id));
    const selected = meridians.find((item) => item.id === selectedMeridianId);
    const current = selected || meridians[0];
    const alternate = meridians.find((item) => item.id !== current.id);
    return `
    <button class="meridian-button meridian-${elementPair.id}${selected ? " is-selected" : ""}" type="button" data-element="${elementPair.id}" data-current-id="${current.id}" data-alternate-id="${alternate.id}" aria-pressed="${Boolean(selected)}" aria-label="${elementPair.zh}：当前${current.name}，点击切换到${alternate.name}">
      <span class="meridian-current"><b>${current.name.replace("经", "")}</b><small>${current.code}</small></span>
    </button>`;
  }).join("");
}

function renderChart(item) {
  const element = item.element;
  const mother = MOTHER_OF[element];
  const child = CHILD_OF[element];
  const controller = CONTROLLER_OF[element];
  const edgeMarkup = [
    ...GENERATION_EDGES.map(([from, to]) => ({ from, to, type: "generation" })),
    ...CONTROL_EDGES.map(([from, to]) => ({ from, to, type: "control" }))
  ].map(({ from, to, type }) => {
    const start = ELEMENTS[from];
    const end = ELEMENTS[to];
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const distance = Math.hypot(dx, dy);
    const x1 = start.x + (dx / distance) * 37;
    const y1 = start.y + (dy / distance) * 37;
    const x2 = end.x - (dx / distance) * 42;
    const y2 = end.y - (dy / distance) * 42;
    let relation = "";
    if (type === "generation" && from === mother && to === element) relation = " is-mother-link";
    if (type === "generation" && from === element && to === child) relation = " is-child-link";
    if (type === "control" && from === controller && to === element) relation = " is-controller-link";
    return `<line class="element-edge ${type}${relation}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" marker-end="url(#arrow)" />`;
  }).join("");

  const roleFor = (key) => key === element ? ["is-self", "本"] : key === mother ? ["is-mother", "母"] : key === child ? ["is-child", "子"] : key === controller ? ["is-controller", "克"] : ["", ""];
  const nodeMarkup = Object.entries(ELEMENTS).map(([key, item]) => {
    const [roleClass, roleLabel] = roleFor(key);
    return `<g class="element-node phase-${key} ${roleClass}" transform="translate(${item.x} ${item.y})">
      <circle r="32"></circle><text class="element-name" text-anchor="middle" y="1">${item.zh}</text><text class="element-role" text-anchor="middle" y="18">${roleLabel}</text>
    </g>`;
  }).join("");

  const chartPointRoles = [
    { role: "母", roleClass: "mother", element: mother, points: item.jeong.plus },
    { role: "子", roleClass: "child", element: child, points: item.seung.minus },
    { role: "克我", roleClass: "controller", element: controller, points: item.jeong.minus }
  ];
  const hasWoodPointGroup = chartPointRoles.some(({ element: roleElement }) => roleElement === "wood");
  const hasEarthPointGroup = chartPointRoles.some(({ element: roleElement }) => roleElement === "earth");
  const chartPointGroups = chartPointRoles.map(({ role, roleClass, element: roleElement, points }) => {
    const position = {
      ...CHART_POINT_POSITIONS[roleElement],
      ...(roleElement === "water" && hasWoodPointGroup ? { y: 190 } : {}),
      ...(roleElement === "metal" && hasEarthPointGroup ? { y: 190 } : {})
    };
    const orderedPoints = currentMeridianFirst(points, item.code);
    return `<foreignObject class="chart-point-group is-${roleClass}" x="${position.x}" y="${position.y}" width="74" height="140" role="img" aria-label="${role}：${orderedPoints.join("、")}">
      <div class="chart-point-stack" xmlns="http://www.w3.org/1999/xhtml">
        <span class="chart-point-role">${role}</span>
        ${orderedPoints.map(pointMarkup).join("")}
      </div>
    </foreignObject>`;
  }).join("");

  chart.innerHTML = `<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"></path></marker></defs>${edgeMarkup}${chartPointGroups}${nodeMarkup}`;
}

function renderMeridianCard(item) {
  grid.innerHTML = `
  <article class="meridian-card meridian-${item.element}" aria-labelledby="${item.id}-title">
    <div class="card-heading">
      <div class="meridian-title"><strong id="${item.id}-title">${item.name}</strong><span>${item.code}</span></div>
      <span class="phase-badge">${item.elementZh}</span>
    </div>
    <div class="formula-panel" aria-label="虚实配穴公式">
      <div class="formula-column"><span class="formula-label">虚 · 正格</span><span class="formula-points">${formulaMarkup(item.jeong, item.code, { plus: "补·母", minus: "泻·克我" })}</span></div>
      <div class="formula-column"><span class="formula-label">实 · 胜格</span><span class="formula-points">${formulaMarkup(item.seung, item.code, { plus: "补·克我", minus: "泻·子" })}</span></div>
    </div>
  </article>`;
}

function selectMeridian(id) {
  const item = MERIDIANS.find((candidate) => candidate.id === id) || MERIDIANS[0];
  selectedMeridianId = item.id;
  renderSelector();
  renderChart(item);
  renderMeridianCard(item);
}

selector.addEventListener("click", (event) => {
  const button = event.target.closest(".meridian-button");
  if (!button) return;
  const isCurrentElement = MERIDIANS.find((item) => item.id === selectedMeridianId)?.element === button.dataset.element;
  selectMeridian(isCurrentElement ? button.dataset.alternateId : button.dataset.currentId);
});

selectMeridian(selectedMeridianId);
