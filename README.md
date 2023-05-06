# 👨‍💻 201930326 정승민
## 대림대학교 컴퓨터정보학부 - React.js
<hr/>

## 📕 10주차 - 2023.05.04 (목)
### 리스트
- 리스트는 js의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것.
- 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미.
- 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링 할 수 있다.
- 리스트 렌더링 시에는 각각의 아이템에 key props가 있어야 한다. (객체 배열의 경우)

### map 함수
- 리스트의 각 아이템에 반복되는 작업을 수행할 때 사용.
```javascript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => 
    <li>{number}</li>
);
```

### 키
- 리스트에서의 키는 리스트에서 아이템을 구별하기 위한 고유의 문자열
- 이 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용
- 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 무관하다.

### Form


## 📕 9주차 - 2023.04.27 (목)
### 이벤트 핸들링
- 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수를 Event Handler 라고 함.
- 또는 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 Event Listener라고도 함.

### 조건부 렌더링
- 조건에 따라 컴포넌트를 렌더링
- if 조건문 혹은 && 연산자를 통해 state 값에 따른 조건부 렌더링 가능.
- {} 안에 작성.


## 📕 7주차 - 2023.04.13 (목)
### Hook
- 클래스형 컴포넌트에서는 생성자에서 state를 정의하고, setState() 함수를 통해 state를 업데이트.
- state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수를 의미
- 사용자 정의 Hook을 만들 수 있고, 이름에 use를 사용하는 것이 강제됨.
- 함수형 컴포넌트에서도 state와 생명주기 함수의 기능을 사용할 수 있게 함.

### useEffect
- 사이드 이펙트 수행을 위함
- 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업 의미.
- 렌더링이 끝난 이후에 실행되어야 하는 작업
- 

## 📕 6주차 - 2023.04.06 (목)
### 컴포넌트 추출
- 복잡한 컴포넌트를 쪼개 여러 개의 컴포넌트로 나눌 수 있음.
- 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트 제작.
- 처음부터 1개의 컴포넌트는 1개의 기능을 하도록 제작하는 것을 지향.

### State
- useState Hook 이용

## 📕 5주차 - 2023.03.30 (목)
### Element
- 리액트 엘리먼트는 JS 객체 형태로 존재한다.
- 컴포넌트, 속성 및 내부의 모든 children을 포함하는 일반 JS 객체.
- 리액트 엘리먼트의 가장 큰 특징은 불변성
    - 즉, 한 번 생성된 Children이나 속성을 바꿀 수 없다.

### clock 실습 - CDN 방식
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React</title>
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src=" https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
</head>

<body>
    <div id="root">
    </div>

    <script type="text/babel">
        function tick() {
            const element = (
                <div>
                    <h1>안녕, 리액트</h1>
                    <h2>현재 시간 : {new Date().toLocaleDateString()}</h2>
                </div>
            );
            ReactDOM.render(element, document.getElementById('root'));
        }

        setInterval(tick, 1000);
    </script>
</body>
</html>
```
### Clock 실습 - React.js Component
```javascript
import React from "react";

const Clock = (props) => {
    return(
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재시간 : {new Date().toLocaleDateString()}</h2>
        </div>
    )

}

export default Clock;
```
### Props
- 읽기 전용, 변경 불가
- 속성이 다른 엘리먼트를 생성하려면 새로운 Props를 컴포넌트에 전달

### Pure Func vs Impure Func
- Pure 함수는 파라미터로 받은 정보가 함수 내부에서도 변하지 않는 함수.
- Impure 함수는 파라미터로 받은 정보가 함수 내부에서 변하는 함수

### Component
컴포넌트명은 항상 대문자로 시작 (CamelCase)

<b>클래스형 컴포넌트</b>
현재는 잘 사용되지 않음.

<b>함수형 컴포넌트</b>
Hook의 등장으로 state 사용이 원활해짐.
## 📕 4주차 - 2023.03.23 (목)
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




