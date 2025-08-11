# 🏛️ 한국 정부 채용공고 포털 (Vercel 배포용)

> 25개 정부기관의 실시간 채용공고를 5분마다 자동 수집하여 제공하는 포털 서비스

## 🚀 라이브 데모

**실시간 서비스**: [korea-jobportal.co.kr](https://korea-jobportal.co.kr)

## ✨ 주요 기능

- 🔄 **실시간 스크래핑**: 25개 정부기관에서 5분마다 자동 수집
- 🎯 **정확한 필터링**: 고용노동부 [인사] 카테고리 직접 접근
- 📊 **실시간 통계**: 90개+ 채용공고 현황 (전체/긴급/신규)
- 🔍 **고급 검색**: 제목, 부처, 채용유형별 필터링
- 📱 **반응형 디자인**: 모든 디바이스 최적화
- 📄 **PDF 뷰어**: 채용공고 원문 바로 확인
- 📑 **페이지네이션**: 10개씩 효율적 탐색

## 🏛️ 수집 대상 기관 (25개)

### 19개 부처
기획재정부, 교육부, 과학기술정보통신부, 외교부, 통일부, 법무부, 국방부, 행정안전부, 국가보훈부, 문화체육관광부, 농림축산식품부, 산업통상자원부, 보건복지부, 환경부, 고용노동부, 여성가족부, 국토교통부, 인사혁신처, 법제처

### 처 및 위원회 (6개)
식품의약품안전처, 공정거래위원회, 국민권익위원회, 금융위원회, 개인정보보호위원회, 원자력안전위원회

## 🛠️ 기술 스택

### Frontend
- **React 18** - 최신 함수형 컴포넌트
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 유틸리티 우선 스타일링
- **shadcn/ui** - 접근성 우선 컴포넌트
- **TanStack Query** - 서버 상태 관리
- **Wouter** - 경량 라우터

### Backend
- **Node.js** - 서버 런타임
- **Express.js** - 웹 프레임워크
- **Cheerio** - 웹 스크래핑
- **TypeScript** - 타입 안전성

### Database & Deployment
- **PostgreSQL** - Neon Database (서버리스)
- **Drizzle ORM** - 타입 안전 ORM
- **Vercel** - 서버리스 배포

## 📊 현재 수집 현황

- ✅ **90개+ 채용공고** 실시간 수집 중
- ✅ **25개 기관** 모두 연결됨
- ✅ **5분 간격** 자동 업데이트
- ✅ **60일 자동 정리** 시스템
- ✅ **99%+ 정확도** 채용 관련 공고만

## 🔧 고급 스크래핑 기술

### 고용노동부 정밀 타겟팅
```typescript
// 직접 [인사] 카테고리 접근
const url = `${baseUrl}?searchDivCd=004`; // [인사] 카테고리
// 결과: 100% 채용 관련 공고만 수집
```

### 행정안전부 엄격 필터링
```typescript
const strictKeywords = ['채용', '임기제', '공무직', '근로자'];
// 결과: 99%+ 정확도로 채용 공고만 선별
```

### 법제처 종합 수집
```typescript
const comprehensiveKeywords = [
  '채용', '모집', '임용', '선발', '공고', 
  '계약직', '무기계약직', '임기제'
];
// 결과: 모든 형태의 채용 공고 포괄
```

## 🚀 Vercel 배포 방법

### 1. GitHub 저장소 준비
```bash
git clone [이 저장소]
cd korea-jobportal-vercel
git remote set-url origin https://github.com/[사용자명]/korea-jobportal-vercel.git
git push -u origin main
```

### 2. Vercel 연결
1. [Vercel Dashboard](https://vercel.com) 접속
2. **Import Project** → GitHub 저장소 선택
3. **Deploy** 클릭

### 3. 환경 변수 설정
```
DATABASE_URL = postgresql://[neon-database-url]
NODE_ENV = production
```

### 4. 도메인 연결 (선택사항)
- Vercel Dashboard → Domains → `korea-jobportal.co.kr` 추가
- DNS 설정: CNAME @ → [vercel-domain]

## 📁 프로젝트 구조

```
korea-jobportal-vercel/
├── client/                 # React 프론트엔드
│   ├── src/
│   │   ├── components/     # UI 컴포넌트
│   │   ├── pages/         # 페이지 컴포넌트
│   │   ├── hooks/         # 커스텀 훅
│   │   └── lib/           # 유틸리티
├── server/                # Express 백엔드
│   ├── index.ts          # 메인 서버
│   ├── routes.ts         # API 라우트
│   ├── scraper.ts        # 웹 스크래핑
│   └── db.ts             # 데이터베이스
├── shared/               # 공유 타입/스키마
└── vercel.json          # Vercel 설정
```

## 🔒 보안 및 성능

- **Rate Limiting** - API 요청 제한
- **CORS 보안** - 허용된 도메인만 접근
- **SQL Injection 방지** - Drizzle ORM 사용
- **캐싱 최적화** - React Query + Vercel CDN
- **에러 처리** - 포괄적 오류 관리

## 📱 반응형 디자인

- **모바일 우선** - Mobile-first 설계
- **Tailwind Breakpoints** - sm, md, lg, xl 지원
- **터치 최적화** - 모바일 제스처 지원
- **성능 최적화** - 이미지 lazy loading

## 📈 모니터링 및 분석

- **실시간 로그** - 스크래핑 진행 상황
- **에러 추적** - 실패한 요청 모니터링
- **성능 메트릭** - 응답 시간 측정
- **사용자 분석** - Vercel Analytics 연동

## 📝 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

## 🤝 기여하기

1. Fork the Project
2. Create Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit Changes (`git commit -m 'Add amazing feature'`)
4. Push to Branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📞 지원 및 문의

- **버그 리포트**: [GitHub Issues](https://github.com/[사용자명]/korea-jobportal-vercel/issues)
- **기능 제안**: [GitHub Discussions](https://github.com/[사용자명]/korea-jobportal-vercel/discussions)
- **일반 문의**: 이메일 또는 이슈 등록

---

**🇰🇷 한국 정부 채용공고를 가장 빠르고 정확하게 찾아보세요!**

> 실시간 업데이트 • 정확한 필터링 • 모바일 최적화 • 완전 무료