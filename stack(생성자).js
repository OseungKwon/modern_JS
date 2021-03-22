const Stack = (function() { // 생성자 함수
    function Stack(array = []){
        if(!Array.isArray(array)){
            throw new TypeError(`${array} is not an array.`);
        }
        this.array=array;
    }
    Stack.prototype={
        constructor: Stack, // 프로퍼티와 샏성자 함수 간의 연결을 설정(생성자 함수에 의한 프로퍼티의 교체)
        push(value){ // push 매서드: 스택의 가장 마지막에 데이터 in
            return this.array.push(value);
        },
        pop(){ // pop 매서드: 스택의 가장 마지막 데이터 꺼냄
            return this.array.pop();
        },
        entries() { // entries 매서드: 스택의 복사본 배열을 반환
            return [...this.array]; // this.array의 인수들의 목록을 배열로 전달받음
        }
    };
    return Stack;
}());
const stack = new Stack([1,2]);
console.log(stack.entries());

stack.push(3);
console.log(stack.entries());

stack.pop();
console.log(stack.entries());