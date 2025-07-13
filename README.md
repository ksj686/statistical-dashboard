# 통계 대시보드 프로젝트

## 1. 프로젝트 목적 및 개요

- Nest.js, TypeORM, sqlite, React.js 기반 통계 대시보드 구축
- 공공데이터 수집 및 DB 저장 (**미세먼지 농도 데이터**) 
- 프론트엔드에서 차트 시각화
- CSV 파일 데이터를 DB에 저장 후 시각화

<br><br>
## 2. 사용 기술 스택

- **Backend**: Nest.js, TypeORM, sqlite
  <details>
    
  * **Backend** <br>
    - Nest.js: `^11.0.1` <br>
    - TypeORM: `^0.3.25` <br>
    - sqlite3: `^5.1.7` <br>
    - axios: `^1.10.0` <br>
    - csv-parser: `^3.2.0` <br>
    - iconv-lite: `^0.6.3` <br>
    - @nestjs/swagger: `^11.2.0` <br>
    
  </details>

- **Frontend**: React.js, Vite, Recharts
  <details>
    
  * **Frontend** <br>
    - React.js: `^19.1.0` <br>
    - Vite: `^7.0.3` <br>
    - Recharts: `^3.1.0` <br>
    - axios: `^1.10.0` <br>
    - react-router-dom: `^7.6.3` <br>
    
  </details>

- **Database**: sqlite
- **API Documentation**: Swagger

<br><br>
## 3. 프로젝트 설계 및 환경설정 절차

  ### 3.1. Backend 설정
  
  1.  `statistical-dashboard/backend` 디렉토리로 이동
  2.  `npm install` 명령어로 의존성 설치
  3.  `.env` 파일 생성 및 내용 채우기
  4.  `npm run start:dev` 명령어로 백엔드 서버 실행
  
  ### 3.2. Frontend 설정
  
  1.  `statistical-dashboard/frontend` 디렉토리로 이동
  2.  `npm install` 명령어로 의존성 설치
  3.  `npm run dev` 명령어로 프론트엔드 개발 서버 실행

<br><br>
## 4. 프로젝트 구조도

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

<br><br>
## 5. Swagger를 통한 API 테스트 방법

1.  백엔드 서버 실행
2.  브라우저에서 `http://localhost:3000/api` 접속
3.  `dust` 태그 선택하여 API 테스트
    - `POST /dust/fetch`: 공공데이터 API 미세먼지 데이터 수집 및 DB 저장
    - `GET /dust`: DB 저장 미세먼지 데이터 조회
    - `POST /dust/import-csv`: `dust.csv` 파일 데이터 DB 저장
4.  `pm10-2023` 태그 선택하여 API 테스트
    - `POST /pm10-2023/import`: `2023_PM10_csv.csv` 파일 데이터 DB 저장
    - `GET /pm10-2023`: DB 저장 2023년 PM10 데이터 조회
    - `GET /pm10-2023/monthly-average`: 2023년 월별 PM10 평균 데이터 조회

<br><br>
## 6. CSV 데이터 가져오기 및 시각화

- `2023_PM10_csv.csv` 파일 데이터 DB 저장 및 시각화 기능 제공

  ### 6.1. 데이터 가져오기
  
  1.  `statistical-dashboard/backend` 디렉토리에 `2023_PM10_csv.csv` 파일 존재 확인
  2.  백엔드 서버 실행
  3.  Swagger UI (`http://localhost:3000/api`) 접속
  4.  `pm10-2023` 태그 확장 후 `POST /pm10-2023/import` 엔드포인트 실행하여 CSV 데이터 DB 저장
  
  ### 6.2. 데이터 시각화
  
  1.  프론트엔드 서버 실행
  2.  브라우저에서 `http://localhost:5173/pm10-2023-chart` 경로 접속
  3.  `2023년 월별 미세먼지 평균` 라인 차트 확인

<br><br>
## 7. 핵심 흐름 요약

1.  백엔드 및 프론트엔드 서버 실행
2.  API를 호출하여 데이터를 DB에 저장하는 과정
    - Swagger UI (`http://localhost:3000/api`)에서 `POST /dust/import-csv` 실행하여 `dust.csv` 파일 데이터 DB 저장(**dust 테이블 백업 데이터**)
    - Swagger UI (`http://localhost:3000/api`)에서 `POST /dust/fetch` 실행하여 공공데이터 API 미세먼지 정보 수집(**시도별 실시간 측정정보**)
    - Swagger UI (`http://localhost:3000/api`)에서 `POST /pm10-2023/import` 실행하여 `2023_PM10_csv.csv` 파일 데이터 DB 저장(**2023년 서울지역 월별 미세먼지 데이터**)
3.  프론트엔드 화면 (`http://localhost:5173/`)에서 서울시 지역별 미세먼지 차트 확인
4.  `http://localhost:5173/pm10-2023-chart` 경로에서 2023년 서울시 월별 미세먼지 평균 라인 차트 확인

<br><br>
## 8. 데이터 종류

- id: 고유 식별자 (숫자)
- sidoName: 시도명 (문자열, 예: 서울)
- stationName: 측정소명 (문자열, 예: 종로구)
- pm10Value: 미세먼지(PM10) 농도 (숫자)
- timestamp: 데이터 생성 시간 (날짜/시간)
