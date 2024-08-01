// 1. 출력값과 출력되는 값의 이유를 설명해주세요

// 출력값      yuno2
// myName 함수는 name이라는 변수의 값을 출력하는데, 스코프체인으로 인해 값을 안에서부터 밖으로 찾기 때문에
// 가장 안쪽, 가장 가까이에 있는 var name = "yuno2"로부터 값을 가져와 yuno2를 출력한 것이다.

var name = "yuno";

function myName() {
  var name = "yuno2";
  function a() {
    console.log(name);
  }
  return a();
}

myName();

// 2. 출력값과 출력되는 값의 이유를 설명해주세요

// 출력값    2
// 간단히 말하면 var가 재선언되었기 때문이다.
// 만약 if(false) 안에 var x =2가 있었다면 x=1이었겠지만 if(true)에 의해 console.log(x)가
// var x =1; var x= 2; 순서로 코드를 읽어서 최종적으로 x=2가 출력되었다.

function test() {
  var x = 1;

  if (true) {
    var x = 2;
  }

  console.log(x);
}

test();

// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.

// 화살표 함수는 this 바인딩하지 않고 스코프 체이닝을 통해 상위요소를 찾아 yuno를 출력하지만
// 일반함수는 콜백 함수로서 this가 가리키는 대상이 함수이고,
// 때문에 this 바인딩을 통해 전역 객체를 가리켰다.
// 하지만 전역 객체에 name키의 값이 없기 때문에 undefined가 출력된다.

const nameObj = {
  name: "yuno",
  method: function () {
    const arrow = () => {
      console.log(`화살표 함수 : ${this.name}`);
    };
    function normal() {
      console.log(`일반 함수 : ${this.name}`);
    }
    arrow();
    normal();
  },
};

nameObj.method();
