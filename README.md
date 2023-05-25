# 👨‍💻 201930326 정승민
## 대림대학교 컴퓨터정보학부 - React.js
<hr/>

## 📕 13주차 - 2023.05.25 (목)
### Context
#### 여러 개의 컨텍스트 사용하기

#### useContext
- 함수형 컴포넌트에서 컨텍스트를 사용하기 위해 커포넌트를 매번 Consumer 컴포넌트로 감싸주는 것보다 좋은 방법이 바로 Hook
- useContext() 훅은 React.createContex() 함수 호출로 생성된 컨텍스트 객체를 인자로 받아서 현재 컨텍스트의 값을 리턴.
- 가장 가까운 상위 Provider로부터 컨텍스트의 값을 받아옴.
- 만일 값이 변경되면 useContext() 훅을 사용하는 컴포넌트가 재랜더링됨.
- 또한 useContext() 훅을 사용할 때에는 파라미터로 컨텍스트 객체를 넣어주어야 함.


## 📕 12주차 - 2023.05.18 (목)
### 컴포넌트 합성
- 합성은 여러개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것.
- 조합 방법에 따라 합성의 사용 기법은 다음과 같이 나눌 수 있다.

#### Containment
- 특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법.
- 컴포넌트에 따라서는 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우가 있다.
- 범용적인 '박스' 역할을 하는 Sidebar 혹은 Dialog 같은 컴포넌트에서 특히 자주 볼 수 있다.
- 이런 컴포넌트에서는 children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋다.
- 이때 children prop은 컴포넌트의 props에 기본적으로 들어있는 children 속성을 사용.
- 다음과 같이 PRops.children을 사용하면 해당 컴포넌트의 하위 컴포넌트가 모두 children으로 들어오게 됨.
```javascript
function FancyBorder(props) {
    return(
        <div className = {'FancyBorder FancyBorder' + props.color}>
            {props.children}
        </div>
    );
};
```

#### Specialization 
- 범용적인 개념을 구별이 되게 구체화하는 것을 특수화라고 함.
- OOP 언에서는 상속을 사용하여 특수화 구현
- React에서는 합성을 사용하여 특수화 구현
- 특수화는 범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 이를 특수한 목적으로 사용하는 합성 방식.

#### Containment와 Specialization을 함께 사용
- Containment를 위해 props.children을 사용, Specialization을 위해 직접 정의한 props를 사용하면 됨.

### 상속
- 합성과 대비되는 개념
- 자식 클래스는 부모 클래스가 가진 변수나 함수 등의 속성을 모두 갖게 되는 개념.
- 리액트에서는 상속보다는 합성을 통해 새로운 컴포넌트를 생성함.
- 복잡한 컴포넌트를 쪼개 여러 개의 컴포넌트로 만들고, 만든 컴포넌트들을 조합하여 새로운 컴포넌트를 만들자.

### 컨텍스트
 기존의 일반적인 리액트에서는 데이터가 컴포넌트의 props를 통해 부모에서 자식으로 단방향으로 전달되었다. 컨텍스트는 리액트 컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방식 대신 '컴포넌트 트리를 통해 곧바로 컴포넌트에 전달하는 새로운 방식'을 제공한다. 이것을 통해 어떤 컴포넌트라도 쉽게 데이터에 접근할 수 있다. 컨텍스트를 사용하면 일일이 Props로 전달할 필요 없이 데이터를 필요로 하는 컴포넌트에 쉽게 전달할 수 있다.

#### 언제 컨텍스트를 사용해야 할까?
- 여러 컴포넌트에서 자주 필요로 하는 데이터 : 로그인 여부, 로그인 정보, UI 테마, 현재 선택된 언어 등
- props를 통해 데이터를 전달하는 기존 방식은 실제 데이터를 필요로 하는 컴포넌트까지의 Depth가 깊어질수록 복잡해지며, 반복적인 코드가 계속되기 때문에 비효율적이고 가독성이 떨어짐. 따라서 컨텍스트를 활용하여 이러한 방식을 깔끔하게 개선할 수 있음.

#### 컨텍스트를 사용하기 전에 고려할 점
- 컨텍스트는 다른 레벨의 많은 컴포넌트가 득정 데이터를 필요로 하는 경우에 주로 사용하나 무조건 컨텍스트를 사용하는 것이 좋은 것은 아님.
- 컴포넌트와 컨텍스트가 연동되면 재사용성이 떨어지기 때문인데, 다른 레벨의 많은 컴포넌트가 데이터를 필요로 하는 경우가 아니면 Props를 통해 데이터를 전달하는 컴포넌트 합성 방법이 더 적합하다.

### Context API
#### React.createContext
- 컨텍스트를 생성하기 위한 함수.
- 파라미터에는 기본값.
- 하위 컴포넌트는 가장 가까운 상위 레벨의 Provider로부터 컨텍스트를 받게 되지만, 만일 Provider를 찾을 수 없다면 위에서 설정한 기본값을 사용.
```javascript
const MyContext = React.createContext(기본값);
```
## 📕 11주차 - 2023.05.11 (목)
### State 끌어올리기 (공유)
리액트는 기본적으로 단방향 데이터 흐름을 가진다. 따라서 하위 컴포넌트는 상위 컴포넌트로부터 전달받은 데이터로만 형태 및 타입을 확인할 수 있고 해당 데이터가 state로 전달받은 것인지에 대한 판단은 불가능하다.

#### state 끌어올리기(공유)란?
상위 컴포넌트의 setState를 수행하는 함수 그 자체를 하위 컴포넌트로 전달하고, 이 함수를 하위 컴포넌트에서 실행하는 것을 말한다.

- 동일한 데이터에 대한 변경 사항을 여러 컴포넌트에서 반영해야할 필요가 있을 때 사용한다.
- 하위 컴포넌트에 props로 상태 변경 함수를 전달하게 되면 단방향 데이터 흐름 원칙을 지킬 수 있게 된다.


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




