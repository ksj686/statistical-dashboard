# 통계 대시보드 프로젝트

## 프로젝트 목적 및 개요

본 프로젝트는 Nest.js, TypeORM, sqlite, React.js를 사용하여 간단한 통계 대시보드를 구축하는 것을 목표로 합니다.
공공데이터 API를 활용하여 미세먼지 농도 데이터를 수집하고, 이를 데이터베이스에 저장한 후, 프론트엔드에서 차트로 시각화하여 보여줍니다.
또한, 로컬 CSV 파일의 데이터를 데이터베이스에 저장하고 시각화하는 기능도 포함합니다.

## 사용 기술 스택

- **Backend**: Nest.js, TypeORM, sqlite, csv-parser, iconv-lite
- **Frontend**: React.js, Vite, Recharts
- **Database**: Docker 기반 MySQL (현재 sqlite 사용 중)
- **API Documentation**: Swagger

## 프로젝트 설계 및 환경설정 절차

### 1. Backend 설정

1.  `statistical-dashboard/backend` 디렉토리로 이동합니다.
2.  `npm install` 명령어로 의존성을 설치합니다.
3.  `.env` 파일을 생성하고 내용을 채웁니다.
<!-- 4.  `docker-compose up -d` 명령어로 MySQL 데이터베이스를 실행합니다. -->
4.  `npm run start:dev` 명령어로 백엔드 서버를 실행합니다.

### 2. Frontend 설정

1.  `statistical-dashboard/frontend` 디렉토리로 이동합니다.
2.  `npm install` 명령어로 의존성을 설치합니다.
3.  `npm run dev` 명령어로 프론트엔드 개발 서버를 실행합니다.

## 프로젝트 구조도

```
statistical-dashboard/
├── backend/
│   ├── src/
│   │   ├── dust/
│   │   │   ├── dust.controller.ts
│   │   │   ├── dust.entity.ts
│   │   │   ├── dust.module.ts
│   │   │   └── dust.service.ts

│   │   ├── pm10-2023/
│   │   │   ├── pm10-2023.controller.ts
│   │   │   ├── pm10-2023.entity.ts
│   │   │   ├── pm10-2023.module.ts
│   │   │   └── pm10-2023.service.ts
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   ├── app.service.ts
│   │   ├── main.ts
│   │   └── swagger.ts
│   ├── .env
│   ├── docker-compose.yml
│   └── ...
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── DustChart.jsx
    │   │   └── Pm102023Chart.jsx
    │   ├── pages/
    │   │   ├── DustChartPage.jsx
    │   │   └── Pm102023ChartPage.jsx
    │   ├── App.css
    │   ├── App.jsx
    │   └── main.jsx
    └── ...
```

## Swagger를 통한 API 테스트 방법

1.  백엔드 서버를 실행합니다.
2.  브라우저에서 `http://localhost:3000/api` 로 접속합니다.
3.  `dust` 태그를 선택하여 API를 테스트할 수 있습니다.
    - `POST /dust/fetch`: 공공데이터 API로부터 미세먼지 데이터를 가져와 데이터베이스에 저장합니다.
    - `GET /dust`: 데이터베이스에 저장된 미세먼지 데이터를 조회합니다.
4.  `pm10-2023` 태그를 선택하여 API를 테스트할 수 있습니다.
    - `POST /pm10-2023/import`: `2023_PM10_csv.csv` 파일의 데이터를 데이터베이스에 저장합니다.
    - `GET /pm10-2023`: 데이터베이스에 저장된 2023년 PM10 데이터를 조회합니다.
    - `GET /pm10-2023/monthly-average`: 2023년 월별 PM10 평균 데이터를 조회합니다.

## CSV 데이터 가져오기 및 시각화

이 프로젝트는 `2023_PM10_csv.csv` 파일에 포함된 2023년 월별 미세먼지 데이터를 데이터베이스에 저장하고 시각화하는 기능을 제공합니다.

### 데이터 가져오기

1.  `statistical-dashboard/backend` 디렉토리에 `2023_PM10_csv.csv` 파일이 있는지 확인합니다.
2.  백엔드 서버를 실행합니다.
3.  Swagger UI (`http://localhost:3000/api`)에 접속합니다.
4.  `pm10-2023` 태그를 확장하고 `POST /pm10-2023/import` 엔드포인트를 실행하여 CSV 데이터를 데이터베이스에 저장합니다.

### 데이터 시각화

1.  프론트엔드 서버를 실행합니다.
2.  브라우저에서 `http://localhost:5173/pm10-2023-chart` 경로로 접속합니다.
3.  `2023년 월별 미세먼지 평균` 라인 차트가 표시되는 것을 확인할 수 있습니다.

## 핵심 흐름 요약

1.  백엔드와 프론트엔드 서버를 모두 실행합니다.
2.  Swagger UI (`http://localhost:3000/api`)에 접속하여 `POST /dust/fetch` 를 실행하여 공공데이터 API로부터 미세먼지 데이터를 수집합니다.
3.  Swagger UI (`http://localhost:3000/api`)에 접속하여 `POST /pm10-2023/import` 를 실행하여 `2023_PM10_csv.csv` 파일의 데이터를 데이터베이스에 저장합니다.
4.  프론트엔드 화면 (`http://localhost:5173/`)에 접속하여 미세먼지 데이터가 차트로 시각화되는 것을 확인합니다.
5.  `http://localhost:5173/pm10-2023-chart` 경로로 접속하여 2023년 월별 미세먼지 평균 라인 차트를 확인합니다.

✦ 현재 공공데이터 API에서 가져오는 데이터 종류는 다음과 같습니다:

- id: 고유 식별자 (숫자)
- sidoName: 시도명 (문자열, 예: 서울)
- stationName: 측정소명 (문자열, 예: 종로구)
- pm10Value: 미세먼지(PM10) 농도 (숫자)
- timestamp: 데이터 생성 시간 (날짜/시간)