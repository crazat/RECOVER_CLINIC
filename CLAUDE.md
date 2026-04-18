# RECOVER 한의원 홈페이지

## 프로젝트 개요
서초구 서초동 소재 한의 피부재생 전문 클리닉 "리커버한의원"의 프리미엄 홈페이지.
"자연 재생 × 럭셔리" 컨셉의 단일 HTML 파일 기반 프로덕션 사이트. 개원 전 상태.

## 기술 스택
- 단일 HTML 파일 (`index.html`) — 순수 CSS + Vanilla JS (프레임워크 없음)
- Google Fonts CDN: Playfair Display, Noto Serif KR, Noto Sans KR
- Canvas 기반 골드 뉴런 네트워크 애니메이션
- IntersectionObserver 스크롤 reveal + 카운터 애니메이션
- JS Canvas API를 이용한 PNG 로고 배경 제거 (`removeLogoBg` 함수)
- JSON-LD 구조화 데이터 (MedicalClinic schema)
- Open Graph 메타태그 (카카오/SNS 공유 최적화)

## 브랜드
- 브랜딩: RE:COVER (R 엠블럼 + E:COVER 텍스트, 히어로 드롭캡 스타일)
- 엠블럼 텍스트 색상: `#254d35` (엠블럼 내 녹색과 일치)
- Forest `#2D5F3E`, Sage `#4A8C5E`, Sprout `#A8C5A0`, Mist `#E8F0E4`, Cream `#F7F5F0`
- Gold `#C4A265`, Gold Light `#D4B87A`, Gold Dark `#A88B4A`
- Charcoal `#1A1A1A`

## 로고 이미지
- 네비/푸터 로고: `로고 이미지/Gemini_Generated_Image_txxt28txxt28txxt.png` (보타니컬 세리프 워드마크)
- R 엠블럼: `로고 이미지/Gemini_Generated_Image_vofdy6vofdy6vofd.png` (섹션 구분자, 푸터)
- 히어로 R 엠블럼: `로고 이미지/R_emblem_original.png` (Python PIL 전처리: 65.5% 높이 크롭 + 배경 제거 + 자동 트림)
- 파비콘: `로고 이미지/favicon_R_64.png` (64x64), `로고 이미지/favicon_R_180.png` (180x180 Apple Touch)
- 로고 PNG 배경 제거: JS Canvas 픽셀 조작 (R>218, G>208, B>198 → alpha=0)

## 페이지 섹션 구조
1. Hero — RE:COVER 브랜드, CTA, Canvas 뉴런 네트워크, 보타니컬 브랜치/바인
2. Values — 핵심가치 3개 (Recover, Natural, Precision)
3. Emblem Divider — R 엠블럼 구분자 (2개소)
4. Doctor — 원장 소개 (한정우 원장, 다크그린 배경, clip-path 커튼 리빌), 영문 서명(Dr. Han Jung-woo)
5. Treatments — 새살침(시그니처, 3D tilt) + 4개 시술 카드
6. Compare — "왜 리커버인가" 비교 테이블 (일반 클리닉 vs 리커버)
7. Process — 4단계 진료 프로세스 (골드 커넥터 + dot fill)
8. Precision — AI 안면 분석, 듀얼 스캔 라인, 데이터 기반 진단
9. Trust Bar — 학회/대학 자격 텍스트 바 (경희대, 4개 학회, 한프리딕트)
10. Stats — 숫자 카운터 (15년+, 12000+, 98%, 4800+, scale 입장 + 골드 flash)
11. Before/After Gallery — 12개 실제 치료 사례 (드래그+휠 스크롤 + 좌우 화살표)
12. Reviews — 환자 후기 10개 (실제 데이터, 드래그+휠 스크롤 + 좌우 화살표)
13. FAQ — 아코디언 5개 Q&A (CSS counter, 골드라인 sweep)
14. Consult Form — 2스텝 상담 신청 (이름/연락처/고민유형 → 상담방식/시간대/메모, shake 검증)
15. Contact — 연락처, 진료시간, 지도 플레이스홀더 (pulse ring)
16. Footer — 골드 언더라인 sweep, 그래디언트 배경

## Before/After 갤러리 이미지
규림한의원(동일 원장) 실적에서 피부 관련 12개 사례를 가져옴:
- `assets/ba_6.webp` — 복합 흉터 치료 (20대 여성)
- `assets/ba_7.webp` — 난치성 흉터 재생 (30대 여성)
- `assets/ba_8.webp` — 붉은 자국 & 흉터 (20대 여성)
- `assets/ba_9.webp` — 남성 심부 흉터 (20대 남성)
- `assets/ba_10.webp` — 박스형 흉터 개선 (30대 남성)
- `assets/ba_skin_new_1.webp` — 만성 여드름 & 붉은기 (20대 여성)
- `assets/ba_skin_lifting_k.webp` — 턱선 & 불독살 리프팅 (50대 여성)
- `assets/ba_skin_wrinkle_k.webp` — 팔자주름 귀족침 (40대 여성)
- `assets/ba_4.webp` — 안면비대칭 교정 (20대 남성)
- `assets/ba_skin_eye_k.webp` — 눈가 주름 & 눈밑 (50대 여성)
- `assets/ba_skin_add_3.webp` — 만성 홍조 & 열감 (30대 여성)
- `assets/ba_skin_glow_k.webp` — 물광 피부 (30대 예비신부)

## 주요 기능
- `color-scheme: light only` — 다크모드 방지
- 골드 스크롤 프로그레스 바 (flowing gradient + trailing glow dot)
- 히어로 패럴랙스 스크롤 (7개 하위 요소 독립 fade-out)
- Canvas 뉴런 네트워크 마우스 repulsion 인터랙션
- 골드 커서 앰비언트 글로우 (`hover:hover` 미디어쿼리 게이트)
- 반응형 (1024px, 768px 브레이크포인트)
- 모바일 햄버거 메뉴 (clip-path 전환 + li stagger)
- 플로팅 CTA (데스크톱: 전화/카톡/위로 3버튼)
- 모바일 하단 고정 바 (전화/카톡/네이버톡/간편예약 4버튼, 골드 악센트)
- FAQ 아코디언 토글 (골드라인 + CSS counter 번호)
- 스크롤 시 플로팅 CTA 표시/숨기기
- 네비 활성 섹션 추적 (IntersectionObserver)
- 리뷰/BA 갤러리 드래그 스크롤 + 마우스 휠→가로 스크롤 변환 + 좌우 화살표 내비게이션
- 2스텝 상담 폼 (슬라이드 전환 + 프로그레스 도트 + 유효성 shake 피드백)

## 디자인 시스템 (10차 패스 + 미적/신뢰 고도화)
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
- 디스플레이 서체에 OpenType `kern`/`liga` 활성화
- 히어로/상담폼 제목에 Playfair Display Italic 강조 (em 태그)
### CSS 구성
- 총 10차 패스 블록 (`/* ═══ NTH PASS ═══ */` 패턴)
- `/* Print */` 블록 직전에 각 패스 CSS 삽입 (일관된 삽입 지점)

## 네비게이션
대표 진료 | 원장 소개 | 치료 후기 | 자주 묻는 질문 | 상담 예약(CTA)

## 콘텐츠 상태
- 원장명: 한정우 (실제 — 규림한의원 청주점 대표원장)
- 원장 프로필: 경희대 한의과대학 한의학석사, (주)한프리딕트 대표 엔지니어
- 원장 이미지: `로고 이미지/profile.webp` / `profile.gif` (규림한의원에서 가져옴)
- 전화번호: 02-000-0000 (플레이스홀더)
- 주소: 서울특별시 서초구 서초동 (상세 미정)
- 환자 후기 10개 (규림한의원 피부 관련 실제 후기 기반)
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

## 콘텐츠 언어
모든 콘텐츠는 한국어 (Korean).
