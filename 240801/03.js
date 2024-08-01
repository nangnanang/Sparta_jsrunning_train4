// 1. <빈칸>을 작성해주세요
const obj1 = {
  value: 20,
  getValue() {
    return this.value;
  },
};
console.log(obj1.getValue()); //  출력값 20

// 2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요

// 첫번째 this는 method:f를 가리켰고, 두번째 this는 window 전역객체를 가리켰다.
// obj2.method는 호출 주체 obj2를 명확히하였기 때문에 첫번째 this는 암묵적 바인딩을 통해 obj2를 가리켰다.
// 두번째 this는 콜백 함수 안에 있어 두번째 this가 가리키는 대상은 함수이기 때문에 this가 window 전역객체로 지정된 것이다.
const obj2 = {
  method: function () {
    console.log("첫번째 this : ", this);

    const innerMethod = () => {
      setTimeout(function () {
        console.log("두번째 this : ", this);
      });
    };
    innerMethod();
  },
};

obj2.method();
