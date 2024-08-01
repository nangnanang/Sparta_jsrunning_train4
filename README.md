# Sparta_jsrunning_train4

달리기반 실습 과제입니다.  
4일차에 배운 내용들을 토대로 풀 수 있도록 구성되어 있습니다.

&nbsp;

## 1. 클래스의 사용

해당 문제를 출력해 보고 출력 값을 설명해주세요

```javascript
1. Person이라는 이름의 클래스를 정의해주세요. 이 클래스는 name, age 이라는 속성을 갖고, info라는 메서드를 갖습니다.
info 메서드는 "저의 이름은 [name] 나이는 [age] 입니다." 를 출력해야 합니다.


2. Person이라는 객체를 사용하여 jung이라는 인스턴스를 생성하고, 이름은 yuno 나이는 20으로 설정하고, jung의 info 메서드를 사용하여 출력해보세요


3. Person을 이용해서 Stuent 클래스를 정의해주세요. Student클래스는 추가적으로 Study라는 속성를 갖습니다


4. student1이라는 인스턴스를 생성하고, 이름은 "준현" 나이는 12000 , study는 javascript로 생성하고 각 요소들을 출력해주세요


5. Tutee 클래스를 만들어주세요 Tutee는 Person을 상속받습니다.
Tutee 클래스는 name, age, study의 속성을 갖고 있습니다.
info 메서드를 오버라이드해서 "저의 이름은 [name] 나이는 [age] 현재 [study]를 학습하고 있습니다" 라는 메시지를 출력하게 만들어주고, 인스턴스는 tutee이라고 만들어주세요.


6. Student 클래스가 Person 클래스의 하위 클래스인 확인하고, tutee 인스턴스가 Studnet 클래스의 인스턴스인지 확인하여 출력해보세요.

```

## 2. 스코프

```javascript
1. 출력값과 출력되는 값의 이유를 설명해주세요

var name = "yuno";

function myName(){
    var name = "yuno2";
    function a(){
        console.log(name);
    }
    return a();
}

myName();


2. 출력값과 출력되는 값의 이유를 설명해주세요

function test() {
    var x = 1;

    if(true){
        var x = 2;
    }

    console.log(x);
}

test();


3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.

const nameObj  = {
    name: "yuno",
    method: function() {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    }
};

nameObj.method();


```

## 3.this

```javascript

1. <빈칸>을 작성해주세요
const obj1 = {
  value :20,
  getValue(){
      < 빈칸 >
  }

}
console.log( < 빈칸 > ) ; //  출력값 20


2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
const obj2 ={
    method : function(){
        console.log('첫번째 this : ',this);

        const innerMethod = () =>{
            setTimeout(function(){
                console.log('두번째 this : ' , this);
            });
        }
        innerMethod();
    }
}

obj.method();




```
