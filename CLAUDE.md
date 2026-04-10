# RECOVER 한의원 홈페이지

## 프로젝트 개요
서초구 서초동 소재 한방 피부재생 전문 클리닉 "리커버한의원"의 프리미엄 홈페이지.
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
1. Hero — RE:COVER 브랜드, CTA
2. Values — 핵심가치 3개 (Recover, Natural, Precision)
3. Doctor — 원장 소개 (가안: 김도현 원장, 다크그린 배경)
4. Treatments — 새살침(시그니처) + 4개 시술 카드
5. Compare — "왜 리커버인가" 비교 테이블 (일반 클리닉 vs 리커버)
6. Process — 4단계 진료 프로세스
7. Precision — AI 안면 분석, 데이터 기반 진단
8. Stats — 숫자 카운터 (15년+, 12000+, 98%, 4800+)
9. Reviews — 환자 후기 5개 (가안, 해시태그+영수증인증 배지, 가로스크롤)
10. FAQ — 아코디언 5개 Q&A
11. Consult Form — 간편 무료상담 신청 (전화번호 입력)
12. Contact — 연락처, 진료시간, 지도 플레이스홀더
13. Footer

## 주요 기능
- `color-scheme: light only` — 다크모드 방지
- 골드 스크롤 프로그레스 바
- 히어로 패럴랙스 스크롤
- 떠다니는 골드 파티클 애니메이션
- 반응형 (1024px, 768px 브레이크포인트)
- 모바일 햄버거 메뉴
- 플로팅 CTA (데스크톱: 전화/카톡/위로 3버튼)
- 모바일 하단 고정 바 (전화/카톡/네이버톡/간편예약 4버튼)
- FAQ 아코디언 토글
- 스크롤 시 플로팅 CTA 표시/숨기기

## 네비게이션
대표 진료 | 원장 소개 | 치료 후기 | 자주 묻는 질문 | 상담 예약(CTA)

## 가안 콘텐츠 (개원 전 — 실제 정보로 교체 필요)
- 원장명: 김도현 (가안)
- 전화번호: 02-000-0000 (플레이스홀더)
- 주소: 서울특별시 서초구 서초동 (상세 미정)
- 환자 후기 5개 (가안)
- 카카오톡/네이버톡 링크: # (미연결)

## 로컬 개발
```
python -m http.server 8093 --bind 127.0.0.1
# http://localhost:8093/index.html
```

## 콘텐츠 언어
모든 콘텐츠는 한국어 (Korean).
