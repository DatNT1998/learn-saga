console.log('learning generator function');

function* HelloGenerator (){
    yield 2019
    yield 'Tu hoc lap trinh redux-saga'
}

const result = HelloGenerator();
console.log('result: ', result);