function* rootSaga(){
    yield true;
    console.log('Hello root saga');
}

export {rootSaga};