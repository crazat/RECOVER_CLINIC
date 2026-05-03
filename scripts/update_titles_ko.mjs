// One-shot script: add title_ko to all 18 preprint metadata files.
// #15-18: round identifiers (R12/R14/R15/R16) removed from Korean titles.
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, '..', 'src', 'data', 'preprints');

const titles_ko = {
  '01_embelia_ribes_review':
    'Embelia ribes(자단) 재조명 — 아유르베다·동아시아 전통 활용에서 AI 기반 스캐폴드 호핑을 통한 피부 섬유화 신약 후보 발굴까지',
  '02_recover_workflow':
    '한의원을 위한 통합 AI 워크플로 — 3D 안면 진단, RAG 기반 전자 의무기록, 분자 처방 시뮬레이션의 결합',
  '03_emb3_scar_case_study':
    'AI 기반 스캐폴드 호핑으로 도출한 외용 친화 항섬유화 후보 EMB-3 — 피부 흉터 재생을 위한 in silico 사례 연구',
  '04_pigmentation_screening':
    '외용 색소침착 치료를 위한 한약 15종의 in silico 스크리닝 — Tyrosinase·TYRP1·DCT 표적 Boltz-2 결과에서 oxyresveratrol·curcumin·resveratrol 외용 후보 식별',
  '05_alopecia_screening':
    '안드로겐성 탈모를 위한 한약 15종의 in silico 스크리닝 — SRD5A2 / AR / β-catenin 축에서 Emodin·Saponin Re·Biochanin A 두피 외용 후보 식별 (안전 고려 포함)',
  '06_acne_microbiome':
    '염증성 여드름을 위한 한약 in silico 스크리닝 — SRD5A2 / AR 피지샘 안드로겐 축에서 Baicalein 외용 후보 식별, Berberine의 hERG 안전 경고 보고',
  '07_photoaging_egcg':
    '외용 광노화를 위한 폴리페놀 15종과 표준 화합물의 in silico 스크리닝 — MMP-1 · SIRT1 표적 Boltz-2에서 EMB-3 우위, Resveratrol의 SIRT1 축 선두',
  '08_abfe_methodology':
    '천연물 스캐폴드 호핑을 위한 절대 결합 자유에너지 보정 파이프라인 — OpenMM 8 / openmmtools 0.26 환경의 평탄 중심 구속 및 표준 상태 분석 보정',
  '09_cross_disease_ipf':
    '피부 흉터에서 전신 섬유화로 — Open Targets 근거와 정통 항섬유화 축 기반 교차 질환 가설의 한계 (EMB-3 in silico 사례)',
  '10_chronotherapy_jaoryuju':
    '외용 한의학의 시간 치료법 — 자오류주(子午流注) 12경맥 시간 흐름과 일주기 분자생물학·외용 약동학을 통합한 정량 프레임워크',
  '11_korean_pgx_topical':
    '외용 한약 개인화를 위한 한국인 약물유전체 패널 — CYP · UGT · HLA · 피부 장벽 변이를 통합한 프레임워크 설계',
  '12_open_source_perspective':
    'Genesis_Medicine — 한의학 신약 발굴을 위한 오픈소스 AI 파이프라인 (활성 모듈 약 25개와 어댑터 스캐폴드 카탈로그 약 25개의 설계 철학)',
  '13_piezo1_mlck_alopecia':
    '안드로겐성 탈모의 기계전달 — PIEZO1 + MLCK 축의 in silico 재배치 연구 (공동접힘과 모낭 단일세포 아틀라스 제약 기반)',
  '14_topical_pbpk_methodology':
    '천연물 기반 외용 치료제를 위한 외용 피부 PBPK 파이프라인 — Dancik 4층 ODE, SkinPiX 학습 LGBM logKp, NPASS 2026 ADME 통합',

  // #15-18: round identifiers removed (R12/R14/R15/R16 → omitted in Korean)
  '15_universal_scaffold':
    '다중 타겟 피부 치료제를 위한 범용 프테로카르판-비닐-폴리페놀 스캐폴드 — 베이지안 능동학습으로 14개 피부질환 타겟 전반에서 식별된 6개의 다중 타겟 후보',
  '16_r15_chromanol_safety_triage':
    '크로마놀 안전성 우선 단편 트리아지 — 14-타겟 공동접힘·ADMET/xTB 필터링·30 ns 분자동력학으로 전신 안전 경로와 외용 리드 경로 분리',
  '17_r16_topical_chromanol_lead':
    '외용 크로마놀 리드 단신 — 18-쌍 30 ns 매트릭스, 60 ns 강건성 패널, 200 ns 앵커-트라이어드 장기 검증',
  '18_active_learning_multifidelity':
    '자율 in silico 피부질환 신약 발굴을 위한 비용 인지형 다중 충실도 베이지안 최적화 — 런타임 게이트 기반 계층 캐스케이딩 스케줄러',
};

let updated = 0;
for (const f of fs.readdirSync(dataDir).sort()) {
  if (!f.endsWith('.json')) continue;
  const fp = path.join(dataDir, f);
  const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
  const id = data.paper_id;
  if (titles_ko[id]) {
    data.title_ko = titles_ko[id];
    fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n');
    console.log('  ✓ ' + id);
    updated++;
  } else {
    console.log('  ⚠ no title_ko for ' + id);
  }
}
console.log(`\nUpdated ${updated}/${fs.readdirSync(dataDir).length} files.`);
