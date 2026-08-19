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

function formulaMarkup(formula) {
  return `<span class="formula-action tonify">补</span><span class="formula-point-list">${formula.plus.map(pointMarkup).join("")}</span><span class="formula-action sedate">泻</span><span class="formula-point-list">${formula.minus.map(pointMarkup).join("")}</span>`;
}

function pointMarkup(point) {
  const match = point.match(/^(.*?)\s+([A-Z]+\d+)$/);
  if (!match) return point;
  const [, name, code] = match;
  const [element, elementZh] = POINT_ELEMENTS[code] || ["metal", "五行未标注"];
  return `<span class="five-point-tile" role="img" aria-label="${name} ${code}，五行属${elementZh}" title="${elementZh}"><span class="five-point-name phase-${element}">${name}</span><span class="five-point-code">${code}</span></span>`;
}

grid.innerHTML = MERIDIANS.map((item) => `
  <article class="meridian-card meridian-${item.element}" aria-labelledby="${item.id}-title">
    <div class="card-heading">
      <div class="meridian-title"><strong id="${item.id}-title">${item.name}</strong><span>${item.code}</span></div>
      <span class="phase-badge">${item.elementZh}</span>
    </div>
    <div class="point-pair">
      <div class="point-block"><span>虚 · 补母</span><b>${pointMarkup(item.mother)}</b></div>
      <div class="point-block"><span>实 · 泻子</span><b>${pointMarkup(item.child)}</b></div>
    </div>
    <div class="formula-panel">
      <div class="formula-row"><span class="formula-label">正格</span><span class="formula-points">${formulaMarkup(item.jeong)}</span></div>
      <div class="formula-row"><span class="formula-label">胜格</span><span class="formula-points">${formulaMarkup(item.seung)}</span></div>
    </div>
  </article>`).join("");
