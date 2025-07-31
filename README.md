# 🧪 Nuxt 3 연습용 프로젝트

이 프로젝트는 **Nuxt 3**, **TypeScript**, **Quasar UI**, **Pinia**, **i18n**, **ESLint/Prettier** 등을 기반으로 구성된 연습용 프론트엔드 프로젝트입니다.  
컴포넌트 기반 개발, 상태 관리, 글로벌 스타일링, 다국어 처리 등 다양한 Nuxt 기능들을 실습할 수 있습니다.

---

## 🛠️ 기술 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | [Nuxt 3](https://nuxt.com/) |
| 언어 | TypeScript |
| 상태 관리 | Pinia (+ persisted state) |
| UI 프레임워크 | Quasar |
| 유틸리티 | VueUse |
| 다국어 지원 | Vue I18n (via `@nuxtjs/i18n`) |
| 정적 분석 | ESLint + Prettier |
| 라우터 | Vue Router (Nuxt pages 기반) |

---

## 📦 주요 의존성

### dependencies

```json
{
  "@pinia/nuxt": "^0.5.1",
  "@quasar/extras": "^1.16.9",
  "@vueuse/core": "^10.7.2",
  "pinia": "^2.1.7",
  "quasar": "^2.14.2"
}
```

### devDependencies

```json
{
  "@nuxtjs/eslint-config-typescript": "^12.1.0",
  "@nuxtjs/i18n": "^8.0.0",
  "@pinia-plugin-persistedstate/nuxt": "^1.2.0",
  "@typescript-eslint/eslint-plugin": "^6.17.0",
  "@typescript-eslint/parser": "^6.17.0",
  "@vueuse/nuxt": "^10.7.2",
  "eslint": "^8.56.0",
  "eslint-config-prettier": "^9.1.0",
  "eslint-plugin-nuxt": "^4.0.0",
  "eslint-plugin-prettier": "^5.1.2",
  "eslint-plugin-vue": "^9.19.2",
  "nuxt": "^3.9.0",
  "nuxt-quasar-ui": "^2.0.7",
  "prettier": "^3.1.1",
  "typescript": "^5.3.3",
  "vue": "^3.4.3",
  "vue-router": "^4.2.5",
  "vue-tsc": "^2.2.0"
}
```

---

## 📁 디렉토리 구조 예시

```
.
├── components/        # 재사용 컴포넌트
├── composables/       # 커스텀 훅
├── layouts/           # 레이아웃 템플릿
├── pages/             # 페이지 (자동 라우팅)
├── plugins/           # Nuxt 플러그인 등록
├── stores/            # Pinia 상태 저장소
├── locales/           # 다국어 리소스 (i18n)
├── assets/            # 이미지, 스타일
├── public/            # 정적 파일
├── nuxt.config.ts     # Nuxt 설정
└── package.json
```

---

## 🚀 실행 방법

### 1. 프로젝트 설치

```bash
git clone https://github.com/your-username/your-nuxt-project.git
cd your-nuxt-project
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

- 기본 주소: [http://localhost:3000](http://localhost:3000)

---

## 💡 주요 기능

- ✅ Nuxt 3 기반 페이지 자동 라우팅
- ✅ TypeScript 구성
- ✅ Pinia + 상태 영속화
- ✅ Quasar UI 구성요소 사용
- ✅ 다국어(i18n) 처리
- ✅ VueUse 기반 유틸리티 활용
- ✅ ESLint + Prettier 정적 분석 및 코드 스타일 일관성

---

## 🧪 개발 도구 명령어

```bash
# 개발 서버 실행
npm run dev

# 타입 검사
npm run typecheck

# 정적 분석 (ESLint)
npm run lint

# 코드 포맷 (Prettier)
npm run format

# 빌드
npm run build

# 빌드된 앱 실행 (SSR)
npm run start
```

---

## 🌍 다국어 설정 (i18n)

- 언어 리소스는 `/locales/` 폴더에 정의되어 있으며, `nuxt.config.ts` 내에 모듈로 설정되어 있습니다.
- 기본 언어: 한국어(`ko`)
- 예시 경로:
  ```
  locales/
  ├── en.json
  └── ko.json
  ```

---

## 📝 Lint & Format

- ESLint, Prettier, TypeScript 설정이 포함되어 있습니다.
- 코드 퀄리티를 유지하기 위해 커밋 전 `lint` 실행을 권장합니다.

---

## 🙋‍♂️ 작성자

- 이름: Choe Eui Seung
- 이메일: develop.eschoe@gmail.com
- GitHub: [https://github.com/eschoeDeveloper](https://github.com/eschoeDeveloper)
