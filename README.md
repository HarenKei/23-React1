# 👨‍💻 201930326 정승민
## 대림대학교 컴퓨터정보학부 - React.js
<hr/>
## 4주차 - 2023.03.23 (목)
### JSX
> JavaScript에 XML을 결합하여 확장한 문법.
>> 객체를 표현한다.

***Example***

``` javascript
const element = <h1> Hello </h1>
```
이외에도 표현식이 들어갈 수 있다.

- 내부적으로 XML HTML 코드를 JS로 변환
- React가 createElemennt 함수를 사용하는 코드로 자동으로 변환
- JSX를 사용하지 않으면 직접 createElement를 사용해야 하므로 가독성이 떨어진다.
- Injection Attack을 방어함으로써 보안성 향상
- ***{ }*** 을 삽입하여 js 코드 삽입 가능

### Babel
> JSX 컴파일러




<hr/>
## 📕 3주차 - 2023.03.16 (목)
### Node.js & NPM
- Node.js 설치
- NPM은 Node Package Module의 약자로 모듈을 설치하고 관리하는 도구임.
- NPX는 일회성임

### React.js
- 복잡한 사이트를 쉽고 빠르게 구성하고 관리하기 위해 고안됨.
- SPA를 쉽고 빠르게 구성할 수 있게 해주는 도구.

#### React.js의 장점
빠른 업데이트와 렌더링 속도
    - Virtual DOM
    - DOM (Document Obejct Model)이란 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스 -> W3C 표준
    - Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법.
    - DOM은 동기식, Virtual DOM은 비동기식

### Component
#### 컴포넌트 기반 구조
- 리액트의 모든 페이지는 컴포넌트로 구성
- 하나의 컴포넌트는 다른 여러 개의 넘포넌트의 조합을 구성할 수 있다.
- 컴포넌트는 재사용성이 뛰어나다.

### React 프로젝트를 시작하는 방법
#### CDN
- HTML에 스크립트를 연결하여 리액트 사용
#### CRA
- 리액트 개발환경을 손쉽게 구축


<hr/>

## 📕 2주차 - 2023.03.09 (목)
### Visual Studio Code
- 설치
- VCS Extension 설치

### VCS
- GitHub에 수업용 원격 Repository 개설
- 로컬 저장소 - 원격 저장소 remote
- 로컬에 스테이징, commit, push하여 원격 저장소에 업로드.

### React.js를 시작하기 전에
#### <b>ES6 문법</b>
- 중복 할당 문제에서 자유로운 let, const 키워드
- 익명함수 Arrow Function
    - CallBack 함수로 사용 가능
    - this 키워드의 정적 바인딩 지원
    - method와 constructor로의 사용은 불가능!
- Array & Objects의 Destructuring (구조 분해 할당 or 비구조화 할당)
- Spread & Rest 연산자 (...)

#### <b>HTML</b>
#### <b>CSS3</b>
#### <b>JSON</b>
#### <b>자료형</b>
#### <b>SPA (Single Page Application)</b>
- CSR(Client Side Rendering)은 SPA
- React 앱을 예로 들 때, 우리는 대체로 루트 컴포넌트로 App.js 파일만을 렌더링한다. 해당 루트 컴포넌트를 서버에서 한 번 렌더링 해서 보여준 뒤 js가 동작하며 사용자 요청에 따라 리소스를 서버에 요청하여 받은 뒤 클라이언트 (브라우저)에서 해석하고 렌더링하는 방식이다. 서버에 완성된 HTML 소스를 요구하는 것이 아니라 브라우저에서 js를 받아 실행시켜 렌더링 하는 것을 CSR이라고 한다.

<hr/>

## 📕 1주차 - 2023.03.02 (목)
오리엔테이션
- 교재 소개
- 강의 계획 소개




