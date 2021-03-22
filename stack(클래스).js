class Stack{ // 클래스
    #array;
    constructor(array = []){
        if(!Array.isArray(array)){
            throw new TypeError(`${array} is not an array.`);
        }
        this.#array=array;
    }
    push(value){
        return this.#array.push(value);
    }
    pop(){
        return this.#array.pop();
    }
    entries(){
        return [...this.#array];
    }
}
const stack = new Stack([1,2]);
console.log(stack.entries());

stack.push(3);
console.log(stack.entries());

stack.pop();
console.log(stack.entries());