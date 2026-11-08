Calculator
---
<img src="Logotype primary.png" width="60%" height="60%" />

Created with *create-react-app*. See the [full create-react-app guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).



Try It
---

[ahfarmer.github.io/calculator](https://ahfarmer.github.io/calculator/)



Install
---

`npm install`



Usage
---

`npm start`

# 과제 README

### Project Information: 
- 프로젝트 소개 : 계산기

- 선택 이유 : 사용언어가 JavaScript, CSS, HTML 언어로 이루어져있으며, react를 프레임워크로 사용하고 있기 때문에 선택하였습니다. 또한 라이선스는 MIT 라이선스로 permissiomn이 허용되어있기 떄문에 수정하여 배포하기 위하여 선택하였습니다.

- 원본 GitHub URL 및 라이선스

#### 원본 URL
https://github.com/andrewagain/calculator

#### 라이선스
MIT License

Copyright (c) 2018 Andrew H Farmer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### Installation: 
- 설치·실행 방법
원본 repository에서 fork 후 -> 자신 repository에서 clone -> npm install -> npm start 를 통해 설치와 실행을 진행

- 실행 화면
![alt text](image.png)

### Source Code Exploration
- Project Structure: 주요 파일 2~3개의 역할
operate.js : operation 에 따라 수행할 연산을 지정해놓은 파일입니다. 연산자로는 덧셈, 뺄셈, 곱셈, 나눗셈이 있습니다. 0으로 나누었을 떄의 상황도 처리하기 위하여 divid by 0 에러도 조건문으로 처리하고 있ㅅ브니다. 또한 return 형식은 숫자가 아니라 stiring 으로 변환하여 출력하고 있습니다. 

calculate.js : 
calaulate.js 파일은 operate.js 와 다르게 연산자가 외에 계산기의 기능을 사용하고 있습니다. 예를 들어 A/C 와 마드 또는 소수점을 표현하기 위한 . 표시 그리고 결과를 출력하기 위한 = 표시 등을 지정하고 있는 파일입니다.

- React Component: 주요 컴포넌트 1~2개의 역할
Button.js : 이 컴포넌트의 역할은 버튼의 클릭이 일어났을 때 그 버튼의 이름을 props으로 넘깁니다. 또한 주황색 버튼과 흰색 버튼으로 render 하기위해 조건을 나누고 있습니다.

ButtonPanel.js :이 컴포넌트의 역할은 계산기 화면에 숫자와 연산자 버튼을 배치합니다. 각 버튼에 이름과 클릭처리 함수인 handleClick을 전달합니다. 버튼을 누르면 handleClick이 버튼 이름을 받아 부모 컴포넌트의 clickHandler로 전달합니다.

- Code Analysis: 코드 1개(약 5~15줄)를 선택하여 동작 원리 설명
handleClick = buttonName => {
  this.props.clickHandler(buttonName);
};

render() {
  return (
    <div className="component-button-panel">
      <div>
        <Button name="AC" clickHandler={this.handleClick} />
        <Button name="+/-" clickHandler={this.handleClick} />
        <Button name="%" clickHandler={this.handleClick} />
        <Button name="÷" clickHandler={this.handleClick} orange />
      </div>
    </div>
  );
}
버튼을 클릭하면 Button 컴포넌트가 버튼 이름을 인자로 전달해 handleClick을 호출한다. 이어서 this.props.clickHandler(buttonName)이 부모에게 전달받은 함수를 실행한다. 
다시 말해서 Button → ButtonPanel → 부모 컴포넌트 순서로 클릭한 버튼의 이름이 전달되며, 
실제 계산 처리는 부모 쪽 로직에서 수행한다.

### Customizing
- 수정한 3가지 내용
- 수정 파일명 및 전/후 결과

### Deployment
- 실제 접근 가능한 Vercel URL


### Weekly Review
- 새롭게 배운 내용 3가지

- 어려웠던 점과 해결 방법

- AI 활용 내용 및 느낀 점