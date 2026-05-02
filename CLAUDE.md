# RECOVER 강남 Brand Department

## 프로젝트 개요
이 프로젝트는 단순히 홈페이지를 꾸미거나 랜딩페이지를 제작하는 프로젝트가 아니다.

**RECOVER 강남의 브랜드 부서(Brand Department)로서, 의학적 피부재생 시장에서 세계 최고 수준의 브랜딩을 설계하고 실행하는 프로젝트다.**
모든 의사결정은 "예쁜 화면"이 아니라 "강남 미용 시장 안에서 리커버 강남이 어떤 카테고리를 만들고, 어떤 언어를 소유하며, 어떤 고객 경험으로 기억될 것인가"를 기준으로 판단한다.

강남구 역삼동 부일타워(선릉역 7번 출구 도보 1분) 소재 의학적 피부재생 브랜드 "리커버 강남 / 리커버한의원"의 브랜드 전략, 홈페이지, 콘텐츠, 상담 경험, 채널 운영을 통합 관리한다.

핵심 브랜드 정의:

> 리커버 강남은 AI 피부 분석과 의학적 피부재생 관점으로 피부 아래의 원리와 회복 조건을 읽고, 필요한 회복의 순서를 설계하는 브랜드입니다.

핵심 시장 창출 문장:

> 강남에서 피부를 더 하기 전에, 회복의 조건부터.

핵심 운영 원칙:

- **Read** — 피부의 결, 흔적, 균형, 생활 리듬을 먼저 읽는다.
- **Restore** — 더 많이 자극하기보다 피부가 회복될 환경을 정돈한다.
- **Record** — 변화를 기록하고 다음 회복의 순서를 조정한다.

공개 브랜드 언어 원칙:

- 홈페이지, 광고성 카피, 네이버 플레이스, 블로그, 인스타그램, 상담 랜딩 문구에서는 **"한의학" / "한의 피부재생"을 전면 언어로 쓰지 않는다.**
- 고객-facing 문구는 **의학 / 의학적 피부재생 / 의학적 회복 설계 / 피부 회복 설계**를 우선 사용한다.
- `한의원`, 학위명, 학회명, 법적 기관명처럼 사실 확인이 필요한 고유명사만 예외적으로 그대로 표기한다.
- AI는 버리지 않는다. **RECOVER AI**는 내부 기술적 해자이며, 공개 문구에서는 "AI가 만든 영상"이 아니라 **피부 신호를 읽는 분석 체계**로 말한다.
- **HAN PREDICT / 한프리딕트**는 RECOVER AI를 개발하는 운영 회사이자 기술 출처다. 전면 브랜드는 `리커버 강남`, 고객 경험명은 `RECOVER AI`, 기술 서명은 `developed by HAN PREDICT` 위계로 사용한다.
- 흉터 콘텐츠는 **RECOVER ANATOMY** 관점으로, "AI 해부학 영상"이 아니라 **피부 아래 구조를 보이게 설명하는 해부학적 시각화**로 표현한다.

따라서 이 저장소의 모든 작업은 다음 역할을 수행해야 한다.

1. 리커버 강남을 "또 하나의 클리닉"이 아니라 **Skin Recovery Design** 카테고리의 대표 브랜드로 만든다.
2. 가격, 이벤트, 장비명, 전후사진 중심의 강남 미용 시장 문법에서 벗어나 **회복 조건 / 관찰 / 순서 / 기록**의 언어를 소유한다.
3. 홈페이지, 네이버 플레이스, 블로그, 인스타그램, 카카오 상담, 원내 상담 경험이 하나의 브랜드 체계로 작동하게 한다.
4. 단기 전환보다 장기 브랜드 자산, 검색 인지도, 고객 언어, 상담 경험의 일관성을 우선한다.
5. 글로벌 대기업 수준의 브랜드 전략 문서, 메시지 체계, 디자인 일관성, 운영 거버넌스를 목표로 한다.

현재 사이트는 "자연 재생 × 절제된 정밀함" 컨셉의 단일 HTML 파일 기반 프로덕션 사이트다. **20대~50대 남성·여성 균형 타겟** — 감성형(Gentle) / 데이터형(Focused) 듀얼 페르소나로 전 연령·성별 결정자 모두에 대응.

## 작업 운영 원칙
이 프로젝트는 실제 개원 전 브랜드 자산을 만드는 프로덕션 프로젝트다. 따라서 코드 수정은 "멋있어 보이는 구조 변경"보다 현재 브랜드 경험, 운영 도메인, 배포 안정성, 사용자의 의사결정 흐름을 우선한다.

- **현재 홈페이지 구조는 단일 HTML 기반의 원페이지 프로덕션 사이트다.** 상단 네비게이션은 현재 각 섹션으로 이동하는 앵커 네비게이션이다.
- 네비게이션을 실제 페이지로 분리하는 작업은 사용자 승인 없이 진행하지 않는다. 필요할 경우 먼저 정보구조(IA), 섹션 재배치표, 중복 제거 방식, URL 정책, 배포 영향, 디자인 영향까지 제안한 뒤 승인 후 구현한다.
- 임시로 `index.html`을 여러 HTML 파일로 복제하거나, Firebase rewrite만으로 페이지가 분리된 것처럼 보이게 만드는 방식은 피한다. 이런 방식은 중복 콘텐츠와 유지보수 리스크를 만든다.
- 향후 실제 멀티페이지 구조가 필요하면, 먼저 콘텐츠를 페이지별로 재편집하고 공통 헤더/푸터/스크립트 관리를 위한 빌드 구조 또는 템플릿 구조를 검토한다.
- 큰 구조 변경은 한 번에 배포하지 않는다. 계획 → 로컬 검증 → 화면 캡처 → 사용자 확인 → 커밋 → 배포 순서로 진행한다.
- 배포 확인의 1차 기준은 Firebase 기본 주소가 아니라 **커스텀 운영 도메인 `https://recover-clinic.kr/`** 이다. `https://recover-clinic-kr.web.app/`는 보조 확인 주소로만 본다.
- 배포 후에는 최소한 운영 도메인 `/`, 주요 CTA, 네비게이션, 모바일/데스크톱 표시를 확인한다.
- 사용자가 "수정하지 말고 검토"라고 말한 경우 코드 변경을 하지 않는다. 검토와 제안만 한다.
- 사용자가 "디자인 유지" 또는 "문구만 변경"이라고 말한 경우 레이아웃, 섹션 구조, 애니메이션, 네비게이션 구조를 임의로 바꾸지 않는다.
- 사람이 읽는 전략 문서, 업체 전달 문서, 브리프는 과도한 마크다운 표기와 기술적 구조보다 문장형 가독성을 우선한다.

핵심 전략 문서:

- `recover_gangnam_brand_strategy.md` — 리커버 강남 브랜드 전략 OS. 시장 창출, 포지셔닝, 오퍼 구조, 채널 전략, 운영 거버넌스의 기준 문서.
- `recover_brand_identity.docx` — 브랜드 아이덴티티 가이드. 단, `.gitignore`에서 `*.docx`는 제외되어 있으므로 Git 기준 원본 전략은 Markdown 문서를 우선한다.

## 기술 스택
- 단일 HTML 파일 (`index.html`, 약 8,500 라인) — 순수 CSS + Vanilla JS (프레임워크 없음)
- Google Fonts CDN: **Fraunces**(디스플레이 주서체), Playfair Display, Noto Serif KR, Noto Sans KR, **IBM Plex Mono**(데이터/측정 라벨용 모노스페이스)
- Canvas 기반 골드 뉴런 네트워크 애니메이션
- IntersectionObserver 스크롤 reveal + 카운터 애니메이션
- JS Canvas API를 이용한 PNG 로고 배경 제거 (`removeLogoBg` 함수) — 네비/푸터 로고에만 적용, 히어로 엠블럼은 사전 처리본(PNG)을 직접 사용
- JSON-LD 구조화 데이터 (MedicalClinic schema 중심, 검증되지 않은 평점·리뷰 수치 사용 금지)
- Open Graph 메타태그 (카카오/SNS 공유 최적화)
- **디자인 배리언트 시스템** (`data-variant` on `<html>`): heritage(기본) / clinical / botanical 세 가지 테마 + 라디우스(sharp/soft/round) + 밀도(comfy/compact/spacious) 노브, localStorage 영속
- **페르소나 시스템** (`data-persona` on `<html>`): gentle(섬세한 회복, 기본) / focused(집중적 개선, 데이터 드리븐) — 히어로 헤드라인·CTA·서브카피·악센트 색상 동적 스왑 (`data-gentle`/`data-focused`/`data-gentle-label`/`data-focused-label` 속성)

## 브랜드
- 브랜딩: 리커버 강남 / RECOVER GANGNAM (R 엠블럼 + E:COVER 텍스트, 히어로 드롭캡 스타일)
- 카테고리 언어: **Skin Recovery Design** / 의학적 피부 회복 설계
- 대표 문장: **피부 아래의 원리까지 읽고 회복의 순서를 설계합니다**
- 시장 대비 문장: **시술보다 먼저 회복의 조건을 봅니다**
- 캠페인 문장: **강남에서 피부를 더 하기 전에, 회복의 조건부터**
- 운영 언어: **Read / Restore / Record**
- 브랜드 아키텍처: **Founder-Originated Method Brand** — 한정우 원장은 브랜드의 최종 상품이 아니라, 리커버 회복 기준을 설계한 **Founder & Method Architect**로 표현한다.
- `RECOVER METHOD`는 한정우 원장의 흉터 관찰 경험과 RECOVER AI 분석 체계를 반복 가능한 상담·기록·시술 기준으로 바꾼 브랜드 시스템이다.
- 홈페이지/상담/콘텐츠에서는 `원장 직접` 반복보다 **리커버 기준 / RECOVER METHOD / RECOVER NOTE / 기준 상담** 언어를 우선한다.
- 초기 신뢰는 원장이 만들되, 장기 브랜드 자산은 **리커버 방식**이 가져가게 한다.
- 엠블럼 텍스트 색상: `#254d35` (엠블럼 내 녹색과 일치)
- Forest `#2D5F3E`, Sage `#4A8C5E`, Sprout `#A8C5A0`, Mist `#E8F0E4`, Cream `#F7F5F0`
- Gold `#C4A265`, Gold Light `#D4B87A`, Gold Dark `#A88B4A`
- Charcoal `#1A1A1A`, Charcoal Soft `#3D3D3D`, Charcoal Mid `#5A5A5A` (데이터/메타 라벨)
- Focused 페르소나 악센트: Graphite `#3a4a50` (남성·실용주의 톤, 골드 채도 -25% 시프트)

## 로고 이미지
- 폴더 경로: **`logo/`** (구 `로고 이미지/`에서 영문 디렉토리로 이전 — Firebase Hosting URL 안정성 확보)
- 네비/푸터 로고: `logo/Gemini_Generated_Image_txxt28txxt28txxt.png` (보타니컬 세리프 워드마크)
- R 엠블럼: `logo/Gemini_Generated_Image_vofdy6vofdy6vofd.png` (섹션 구분자, 푸터)
- 히어로 R 엠블럼: `logo/R_emblem_original.png` (Python PIL 전처리: 65.5% 높이 크롭 + 배경 제거 + 자동 트림, JS 배경 제거 불필요)
- 파비콘: `logo/favicon_R_64.png` (64x64), `logo/favicon_R_180.png` (180x180 Apple Touch)
- 원장 사진: `logo/profile.webp` / `logo/profile.gif`
- 로고 PNG 배경 제거: JS Canvas 픽셀 조작 (R>218, G>208, B>198 → alpha=0) — 네비/푸터 워드마크에만 적용

## 페이지 섹션 구조
> P1-5 다이어트 패스에서 Breathe-1·Breathe-3 섹션을 제거하고 Origin Note를 Method Architect·Case Study 후반부로 재배치하여, 결정자가 0.5스크롤 안에 결과·가격·시간을 확인 가능하도록 재구성.

1. Hero — RE:COVER 브랜드, **페르소나 토글**(Gentle/Focused 듀얼 모드), CTA, Canvas 뉴런 네트워크, **Hero Data Strip**(RECOVER BASELINE · RECOVER AI · RECOVER ANATOMY · RECORD 중심의 4칩 브랜드 시스템)
2. **Guarantee Strip** — 4항목 리스크 해소 배너(기준 상담·상담 전 안내·위치 확인·프로토콜 투명성)
3. **Result Slice (At a Glance)** — 0.5스크롤 결정 패널: 결과 4카드(20대 여대생/30대 남직장인/40대 여교사/50대 여주부, **남/여/전체 토글 필터**) + 가격 3카드(A 60만~/B 90만~/C 220만~) + 시간 3배지(40~60분·당일 복귀·평균 12주) + **Data Pickup Zone**(5지표 모노스페이스 데이터 카드)
4. Values — 핵심가치 3개 (Recover, Natural, Precision)
5. Method Architect — 한정우 원장을 리커버 회복 기준의 설계자로 소개 (다크그린 배경, clip-path 커튼 리빌), 영문 서명(Founder & Method Architect)
6. **Recovery Records Preview** — Method Architect 신뢰 전이 직후 회복 기록 미리보기 (연령 라벨 케이스)
7. **Case Study** — RECOVER NOTE 방식 해설 3건 실제 케이스 (42F·27M·51F 명시적 연령·성별 라벨, 단계별 임상 판단 12개 결정 지점 + **RECOVER ANATOMY 시각화 카드** 3건: 얼굴 히트맵 SVG + Before/After 4지표 정량 점수)
8. **Origin Note** — "할머니의 거친 손" 브랜드 기원 스토리 + 철학 인용구 (Method Architect·Case 다음 매거진 스프레드 후반부 배치)
9. **RECOVER BASELINE** — 4문항 인터랙티브 피부 체크 → 첫 회복 기준 정리
10. **Failed-Elsewhere** — "72% 타 병원 실패 후 오심" 안심 메시지 섹션
11. **Science** — 의학적 피부재생 메커니즘 3기둥 교육 섹션
12. **Breathe-2** — 유일한 호흡 스페이서 (Science → Treatments 사이, 다크 톤, "서두르지 않는 회복이 가장 빠른 길입니다")
13. Treatments — 새살침(시그니처, 3D tilt) + 4개 시술 카드 + **가격 투명성 토글 패널** (데스크톱 아코디언 / 모바일 바텀시트)
14. Compare — "왜 리커버인가" 비교 테이블 (일반 클리닉 vs 리커버)
15. **Needle Vitrine** — 새살침 전시실: SVG 기반 침 샤프트·허브·그립 3D 시각화, 기술·정밀 포지셔닝 (남성·실용주의 페르소나 어필)
16. Process — 4단계 진료 프로세스 (골드 커넥터 + dot fill)
17. **Recovery Timeline** — 시술 후 90일 회복 여정 인터랙티브 타임라인 (클릭 가능 칩 + 일자별 패널)
18. **Time Essay** — "왜 6개월인가, 더 빨리는 왜 안 되는가" 에세이 섹션 + **Essay Expand**(접기/펼치기 토글)
19. Precision — RECOVER AI 피부 신호 분석, 듀얼 스캔 라인, 기록 기반 기준 설계
20. Trust Bar — 학회/대학 자격 텍스트 바 (경희대, 4개 학회, RECOVER AI developed by HAN PREDICT)
21. Stats — Field Notes / Recover Specimen Index 컨텍스트 + 숫자 카운터 (n=12,000±280 표본, scale 입장 + 골드 flash)
22. Before/After Gallery — 12개 실제 치료 사례 (드래그+휠 스크롤 + 좌우 화살표 + **인터랙티브 BA 슬라이더** 핸들 + **Cinema Feature**(50대 V라인 리프팅 풀스크린 슬라이더))
23. **Atmosphere** — 감각 우선 포지셔닝 ("향 먼저") 공간/분위기 섹션
24. **Recover System Strip** — Location / First / Analyze / Scar 중심의 브랜드 시스템 배너
25. Recovery Stories — 회복 이야기 10개 (여성 7 · 남성 3 균형, 드래그+휠 스크롤 + 좌우 화살표)
26. **Letter** — 환자 서신 형식 에세이 후기
27. FAQ — 아코디언 5개 Q&A (CSS counter, 골드라인 sweep)
28. Consult Form — **3스텝** 상담 신청 (고민 → 연락처 → 일정, 슬라이드 전환 + 프로그레스 도트 + shake 검증) + **Live Slots**(실시간 예약 가능 시간 그리드, 긴급 배지 펄스)
29. Contact — 연락처, 진료시간, 지도 플레이스홀더 (pulse ring)
30. **Visit Checklist** — 내원 전 준비 체크리스트 4항목 + 따뜻한 마무리 서명
31. **Closing** — 폐막 섹션
32. Footer — 골드 언더라인 sweep, 그래디언트 배경 (봉투 뒷면 모티브)
33. Emblem Divider — R 엠블럼 구분자 (섹션 간 배치)

## Before/After 갤러리 이미지
규림한의원(동일 원장) 실적에서 피부 관련 12개 사례를 가져옴:
- `assets/ba_6.webp` — 복합 흉터 치료 (20대 여성)
- `assets/ba_7.webp` — 난치성 흉터 재생 (30대 여성)
- `assets/ba_8.webp` — 붉은 자국 & 흉터 (20대 여성)
- `assets/ba_9.webp` — 심부 아이스픽 흉터 재생 (20대 남성, 제목·본문 성별 프레이밍 제거)
- `assets/ba_10.webp` — 박스형 흉터 개선 (30대 남성)
- `assets/ba_skin_new_1.webp` — 만성 여드름 & 붉은기 (20대 여성)
- `assets/ba_skin_lifting_k.webp` — 턱선 & 불독살 리프팅 (50대 여성)
- `assets/ba_skin_wrinkle_k.webp` — 팔자주름 귀족침 (40대 여성)
- `assets/ba_4.webp` — 안면비대칭 교정 (20대 남성)
- `assets/ba_skin_eye_k.webp` — 눈가 주름 & 눈밑 (50대 여성)
- `assets/ba_skin_add_3.webp` — 만성 홍조 & 열감 (30대 여성)
- `assets/ba_skin_glow_k.webp` — 물광 피부 (30대 여성 / 직장인, 중요한 일정 앞둔 맥락)

## 주요 기능
- `color-scheme: light only` — 다크모드 방지
- 골드 스크롤 프로그레스 바 (flowing gradient + trailing glow dot)
- 히어로 패럴랙스 스크롤 (7개 하위 요소 독립 fade-out)
- Canvas 뉴런 네트워크 마우스 repulsion 인터랙션
- 골드 커서 앰비언트 글로우 (`hover:hover` 미디어쿼리 게이트)
- 반응형 (1024px, 768px 브레이크포인트)
- 모바일 햄버거 메뉴 (clip-path 전환 + li stagger)
- 플로팅 CTA (데스크톱: 전화/카톡/위로 3버튼)
- 모바일 하단 고정 바 — **2+1 redesign**: primary 예약 CTA + secondary 전화/카톡 (구 4버튼에서 단순화)
- FAQ 아코디언 토글 (골드라인 + CSS counter 번호)
- 스크롤 시 플로팅 CTA 표시/숨기기
- 네비 활성 섹션 추적 (IntersectionObserver)
- 리뷰/BA 갤러리 드래그 스크롤 + 마우스 휠→가로 스크롤 변환 + 좌우 화살표 내비게이션
- **3스텝 상담 폼** (고민 → 연락처 → 일정, 슬라이드 전환 + 프로그레스 도트 + shake 검증)
- **Persona Toggle** — 히어로 듀얼 모드 스위치(Gentle/Focused). `data-persona` 속성으로 `<html>` 토글, `data-gentle`/`data-focused`/`data-gentle-label`/`data-focused-label` 속성으로 헤드라인·CTA·서브카피 동적 스왑. Focused 모드는 그래파이트 #3a4a50 헤드라인 + 채도 -25% 골드 + "15분 퀵 진단" CTA로 남성·실용주의 결정자 어필
- **Hero Data Strip** — 4칩 측정·자격 시그널 그리드 (학회/알고리듬/임상례/측정정밀도) — 모노스페이스 숫자, 남성 환자에게 "내 언어"를 첫 화면에서 제공하는 의도
- **Result Slice + Gender Filter** — 0.5스크롤 결정 패널, 4결과 카드(여3·남1, 20s~50s) + 남/여/전체 토글(`.rs-rt[data-rs-filter]`로 `.rs-hidden` 부여) + 3가격 카드 + 3시간 배지
- **Data Pickup Zone** — 5지표 모노스페이스 측정 카드 (회복기간·만족도·재방문율·1회시간·다운타임), `[ END · MEASURED ]` 종료 마커
- **Guarantee Strip** — 4항목 리스크 해소 배너 (cream→ivory 그래디언트, 호버 시 chevron 등장)
- **BA Slider** — Before/After 인터랙티브 슬라이더 (드래그·클릭·키보드 화살표/Home 키 + 자동 사인파 티저, `.ba-interacted`/`.cinema-touched` 상태 영속). 갤러리 70+ 카드 + Cinema Feature(`#ba-cinema-feat` 풀스크린 50대 V라인 리프팅 케이스)
- **Needle Vitrine** — 새살침 SVG 전시실 (샤프트·허브·그립 그래디언트 + 3D 효과)
- **Recover System Strip** — Location / First / Analyze / Scar 중심의 브랜드 시스템 배너
- **Tweaks Panel** (우측 하단 플로팅) — 3개 컬러 배리언트 스와치 + 라디우스/밀도 노브, localStorage 영속 (`data-variant`/`data-radius`/`data-density` on `<html>`)
- **Price Transparency** — 시술 카드 내 인라인 `.price-toggle` 아코디언 (데스크톱) / 모바일 바텀시트 오버레이 (`openPriceSheet`/`closePriceSheet`)
- **Live Slots** — 실시간 예약 가능 시간 그리드 (일/시간/태그/긴급 상태, 펄스 애니메이션)
- **Recovery Timeline** — 클릭 가능 타임라인 칩 + 일자별 상세 패널 fade-in (`updateChip()`, `setIdx()`, width% 채움)
- **Case Study 인터랙션** — 원장 해설 케이스 3건(42F·27M·51F), 12개 단계별 결정 지점 마커
- **RECOVER ANATOMY 시각화** (`.cs-ai-scan`) — Case Study 3건에 Before/After 얼굴 히트맵 SVG + 4지표 점수 바(장벽/색소/염증/결점 등 케이스별 맞춤) + RECOVER AI / RECOVER RECORD 기준 표기
- **Firestore 상담 수집** — Firebase Firestore `consultations` 컬렉션에 폼 데이터 저장. Web SDK modular v10.12.5 CDN import, `window.__submitConsult()` helper로 submit handler에서 호출. 보안 규칙: create only, read/update/delete 전면 금지, 필드 타입·사이즈 validation
- **RECOVER BASELINE** — 4문항 선택형 피부 체크 플로우 → 첫 회복 기준 제시
- **Sticky Context Chip** — 컨텍스트 인지 예약 프롬프트 (스크롤 위치 기반 CTA)
- **Ceremony Scroll Fix** — 페이지 로드 시 `data-ceremony` 속성으로 4.3s 조율된 타이밍 연출
- **Signature Upgrades** — 추가 시그니처 레이어: B9 Film Grain Overlay(필름 그레인), B12 Chapter Rail(좌측 챕터 인디케이터), B13 Quiet Mode Toggle(애니메이션 음소거), UP-5 Season Badge(시즌 배지), Essay Expand(접기/펼치기 에세이)
- **Paper Grain Overlay** — 보타니컬 배리언트에서 42px/56px 방사형 그래디언트 질감

## 디자인 시스템 (배리언트 시스템 + 피처 기반 CSS)
### 배리언트 (`data-variant` on `<html>`)
- **heritage** (기본): Forest × Gold, 세리프 한방 럭셔리
- **clinical**: Ivory/Graphite/Sage, 미니멀 에디토리얼 (`#1f2a24`, `#8b7b55`)
- **botanical**: Deeper Forest × Warm Clay, 스파 오가닉 + 페이퍼 그레인 질감 (`#2a4f3a`, `#b8733e`, `#12321f`)
- 추가 노브: `data-radius` (sharp/soft/round) · `data-density` (comfy/compact/spacious) · `--pad-scale` 토큰
### 페르소나 (`data-persona` on `<html>`)
- **gentle** (기본): 골드 × 포레스트, Fraunces 이탤릭 강조, "본래의 힘" 감성 메시징 — 여성·전 연령·감성형 결정자 타겟
- **focused**: 그래파이트 `#3a4a50` 헤드라인 + 채도 -25% 골드 + 모노스페이스 라벨 강조, "정밀 분석·빠른 회복" 데이터 메시징, "15분 퀵 진단" CTA — 남성·20~50대 실용주의·임원층 타겟
- 페르소나 토글 버튼은 히어로 상단에 위치, localStorage 미영속 (세션 단위)
### 애니메이션 & 인터랙션
- 페이지 로드: body opacity fade-in (럭셔리 커튼 오프닝)
- 히어로: blur 입장, 브랜드 scale reveal, eyebrow letter-spacing 입장, 7요소 패럴랙스 scroll-out, `본래의 힘` Playfair Italic 강조
- 의사: 사진 clip-path 커튼 리빌, 프레임 shimmer, 이름 text-shadow 호버, 자격사항 6개 캐스케이드 입장, 영문 이탤릭 서명
- 새살침 카드: 3D perspective tilt (마우스 추적, ±2도), 링 회전, 아이콘 글로우, 코너 악센트
- Values: 카드 상단 골드라인 sweep, 코너 보타니컬, 넘버 패럴랙스
- Stats: 카운터 easeOutQuart, 완료 시 골드 flash, 숫자 scale 입장
- Trust Bar: 학회명 흐리게 깔림, 호버 시 밝아짐
- Process: dot scroll-fill, 아이콘 배경 원형, 골드 커넥터 라인
- Compare: 항목별 stagger 입장 (좌→우 교차), VS 원형 배지, PREMIUM 배지 shimmer
- Precision: 3개 기능 아이템 stagger fade-in, 듀얼 스캔 라인
- Philosophy: 마크/인용/설명/라인 4단계 stagger reveal, 앰비언트 orb 2개
- BA Gallery: 카드 골드 sweep, 태그 배지, 결과 체크마크, 드래그+휠 스크롤, 좌우 화살표
- Reviews: 별점 골드 글로우, 아바타 골드 링, 따옴표 breathing float, 상단 골드 sweep, 드래그+휠 스크롤, 좌우 화살표
- FAQ: 골드라인 sweep on open, 답변 indent, CSS counter 넘버링
- Consult: 2스텝 슬라이드 전환, 골드 프로그레스 도트, 인풋 포커스 글로우, 제출 확인 체크, 유효성 shake
- Contact: 지도 pulse ring, 핀 호버 리프트, 연락처 호버 indent
- 섹션: desc 지연 입장 (.3s), 그래디언트 전환, 다크→라이트 top gradient
- 엠블럼 구분자: 글로우 + 라인 scaleX sweep + 아이콘 스크롤 scale
- 푸터: 링크 골드 언더라인 sweep, 그래디언트 배경
- 네비: 활성 섹션 추적, CTA 골드 글로우 3회 pulse
- 전역: 버튼 radial highlight, focus-visible 골드 아웃라인, text-wrap:balance
### 타이포그래피
- `--font-display`: **Fraunces**(1순위) → Noto Serif KR → Georgia (opsz/ital 축 활용)
- `--font-mono`: **IBM Plex Mono** → SF Mono → Consolas — 데이터/측정 라벨용, `font-feature-settings: "tnum","zero","ss01"` (Tabular Numbers + Slashed Zero)
- 본문 font-weight 380(구 300에서 상향, 가독성 개선) + `text-rendering: optimizeLegibility`
- 디스플레이 서체에 OpenType `kern`/`liga` 활성화
- 히어로/상담폼 제목에 Playfair Display Italic 강조 (em 태그)
- "Bio-Tech Naturalism" 톤: 감성 카피(Fraunces/Noto Serif KR) + 정량 라벨(IBM Plex Mono)을 분리한 "Measured Poet" 미학
### CSS 구성
- **피처 기반 블록 구성** (`/* ═══ FEATURE ═══ */` 패턴) — 과거 "N차 패스" 누적 방식에서 재구성
- 주요 블록: PERSONA TOGGLE, HERO DATA STRIP, RESULT SLICE, DATA PICKUP ZONE, LIVE PROOF STRIP, GUARANTEE STRIP, BA SLIDER, NEEDLE VITRINE, CHAPTER RAIL, FILM GRAIN, QUIET MODE, ESSAY EXPAND, Tweaks Panel, NAV, HERO, BUTTONS, UTILITIES, VALUES, PHILOSOPHY, TREATMENTS, PRICE TRANSPARENCY, PRICE BOTTOM SHEET, LIVE SLOTS, RECOVERY TIMELINE, DOCTOR CASE STUDY, SCIENCE, FAILED-ELSEWHERE, AI SELF DIAGNOSIS, STICKY CONTEXT CHIP, PROCESS, PRECISION 등
- `/* Print */` 블록을 파일 말미 배치로 유지

## 네비게이션
리커버 방식 | 흉터 회복 | 회복 기록 | 메소드·기술 | BASELINE 상담(CTA)

## 콘텐츠 상태
- 원장명: 한정우 (실제 — 규림한의원 청주점 대표원장)
- 원장 프로필: 경희대학교 대학원 석사, RECOVER AI 분석 엔진 설계, HAN PREDICT 운영, 리커버 회복 기준 설계자(Founder & Method Architect)
- 원장 이미지: `logo/profile.webp` / `logo/profile.gif` (규림한의원에서 가져옴)
- 확장 원칙: 고객이 "한정우 원장에게만 받아야 한다"가 아니라 "리커버 기준으로 상담받고 싶다"고 기억하도록, 개인 서사는 Origin Note와 Method Architect 맥락으로 제한하고 브랜드 중심 언어는 RECOVER METHOD로 통일한다.
- 전화번호: 02-000-0000 (플레이스홀더)
- 주소: 서울특별시 강남구 역삼동 부일타워 5층 (선릉역 7번 출구 도보 1분)
- 지역 표기 원칙: **브랜드/지점명/검색 쿼리는 "강남"** (예: `RECOVER · 강남`, 네이버 `리커버한의원+강남`) / **역·주소·교통 안내는 "선릉역/역삼동"** 유지
- **타겟 페르소나**: 20~50대 남성·여성 균형 — Result Slice의 4결과 카드(20대 여대생/30대 남직장인/40대 여교사/50대 여주부) + Case Study(42F·27M·51F) + Reviews(여7·남3) + 페르소나 토글(Gentle/Focused)로 전 연령·성별 결정자 모두 흡수
- 환자 후기 10개 (여성 7 · 남성 3 성별 균형, 규림한의원 피부 관련 실제 후기 + 성별 재균형 각색)
- B/A 갤러리 12개 (규림한의원 동일 원장 실제 시술 사례)
- 카카오톡: https://pf.kakao.com/_DxewtT/chat (규림한의원 채널 임시 연결)
- 네이버톡: https://talk.naver.com/ct/w4y1te (규림한의원 채널 임시 연결)

## 관련 프로젝트
- 규림한의원 홈페이지: `C:\Projects\kyurim-webpage-main` (동일 원장, 청주점)
- 규림한의원 배포: https://kyurim-webpage.vercel.app/
- B/A 이미지 원본: `C:\Projects\kyurim-webpage-main\assets\` (ba_*.webp)
- 스토리 데이터 원본: `C:\Projects\kyurim-webpage-main\script.js` (storyData 객체, line 894+)

## 로컬 개발
```
python -m http.server 8094 --bind 0.0.0.0
# http://localhost:8094/index.html
```

## 배포 (Firebase Hosting)
- 상태: **라이브** — https://recover-clinic.kr/ (HTTPS, SSL 발급 완료, 2026-04-20 서비스 개시)
- 플랫폼: **Firebase Hosting** (Google Cloud Spark 무료 플랜)
- Google 계정: `crazat8911@gmail.com`
- 프로젝트 ID: `recover-clinic-kr`
- Firebase 콘솔: https://console.firebase.google.com/project/recover-clinic-kr/overview
- 배포 URL (기본): https://recover-clinic-kr.web.app · https://recover-clinic-kr.firebaseapp.com
- 커스텀 도메인: **recover-clinic.kr** (가비아 등록, 한정우 명의, HTTP→HTTPS 자동 리다이렉트)
- 설정 파일: `firebase.json` (hosting + firestore 섹션, public=`.`, CLAUDE.md/README.md/전략 문서/docx/구 `로고 이미지/` 폴더/scraps/_check/screenshots/uploads/original.html/memory/firestore.rules/firestore.indexes.json 제외, 이미지 1년 immutable 캐싱 + HTML 5분 TTL), `.firebaserc`(default→recover-clinic-kr), `firestore.rules`(consultations create-only + field validation), `firestore.indexes.json`(현재 인덱스 불필요)
- Firebase Web App: `1:541834096590:web:84f3046b32b4f342bbc59f` (RECOVER Clinic Web)
- Firestore: **Standard 버전**, Location `asia-northeast3` (Seoul), DB ID `(default)`
- 상담 데이터 조회: https://console.firebase.google.com/project/recover-clinic-kr/firestore/data/~2Fconsultations — 원장이 콘솔에서 직접 열람 (웹에서는 read 불가)
- 가비아 DNS 레코드 (recover-clinic.kr 루트):
  - A @ → `199.36.158.100` (TTL 1800)
  - TXT @ → `hosting-site=recover-clinic-kr` (TTL 600)
- 배포 명령: `firebase deploy --only hosting` (호스팅만) · `firebase deploy --only firestore,hosting` (규칙까지) · 로컬에 `firebase-tools` 설치 필요, `crazat8911` 계정 로그인 상태
- SSL 인증서: Firebase가 자동 발급·갱신
- 엣지: Fastly/Varnish (한국 ICN POP, `Cache-Control: max-age=3600`)
- **엣지 캐시 무효화 팁**: 도메인 최초 연결 직후 "Site Not Found" 응답이 엣지에 캐시될 수 있음 — `firebase deploy --only hosting` 재실행으로 무효화 (실제로 이 사이트 배포 중 발생)

## 콘텐츠 언어
모든 콘텐츠는 한국어 (Korean).
