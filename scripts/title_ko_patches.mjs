import fs from 'node:fs';
import path from 'node:path';
const dir = 'src/data/preprints';
const patches = {
  '01_embelia_ribes_review': 'Embelia ribes(자단) 재조명 — AI 기반 스캐폴드 호핑을 통한 피부 섬유화 신약 후보 발굴 연구',
  '10_chronotherapy_jaoryuju': '외용 한의학의 시간 치료법 — Twelve-Meridian Chronotherapy와 일주기 분자생물학·외용 약동학의 정량 프레임워크',
};
let n = 0;
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.json')) continue;
  const fp = path.join(dir, f);
  const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
  if (patches[data.paper_id]) {
    data.title_ko = patches[data.paper_id];
    fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n');
    console.log('  ✓ ' + data.paper_id);
    n++;
  }
}
console.log('Updated ' + n + ' files.');
