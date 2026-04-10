# RECOVER 한의원 홈페이지

## 프로젝트 개요
서초구 서초동 소재 한방 피부재생 전문 클리닉 "리커버한의원"의 프리미엄 홈페이지.
"자연 재생 × 럭셔리" 컨셉의 단일 HTML 파일 기반 프로덕션 사이트.

## 기술 스택
- 단일 HTML 파일 (`index.html`) — 순수 CSS + Vanilla JS (프레임워크 없음)
- Google Fonts CDN: Playfair Display, Noto Serif KR, Noto Sans KR
- Canvas 기반 골드 뉴런 네트워크 애니메이션
- IntersectionObserver 스크롤 reveal + 카운터 애니메이션
- JS Canvas API를 이용한 PNG 로고 배경 제거 (`removeLogoBg` 함수)

## 브랜드 컬러
- Forest `#2D5F3E`, Sage `#4A8C5E`, Sprout `#A8C5A0`, Mist `#E8F0E4`, Cream `#F7F5F0`
- Gold `#C4A265`, Gold Light `#D4B87A`, Gold Dark `#A88B4A`
- Charcoal `#1A1A1A`

## 로고 이미지
- 네비/푸터 로고: `로고 이미지/Gemini_Generated_Image_txxt28txxt28txxt.png` (보타니컬 세리프 워드마크)
- R 엠블럼: `로고 이미지/Gemini_Generated_Image_vofdy6vofdy6vofd.png` (히어로 워터마크, 섹션 구분자, 푸터)
- 로고 PNG 배경 제거: JS Canvas 픽셀 조작 (R>218, G>208, B>198 → alpha=0)

## 주요 기능
- `color-scheme: light only` — 다크모드 방지
- 골드 스크롤 프로그레스 바
- 히어로 패럴랙스 스크롤
- 떠다니는 골드 파티클 애니메이션
- 반응형 (1024px, 768px 브레이크포인트)
- 모바일 햄버거 메뉴

## 로컬 개발
```
python -m http.server 8093 --bind 127.0.0.1
# http://localhost:8093/index.html
```

## 콘텐츠 언어
모든 콘텐츠는 한국어 (Korean).
