const todos = [ // 객체 요소를 가지고 있는 배열
    { id: 4, content: 'JavaScript' },
    { id: 1, content: 'HTML' },
    { id: 2, content: 'CSS' }
];
function compare(key) { // 비교 함수
    return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));

}