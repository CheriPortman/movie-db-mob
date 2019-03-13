const test = QUnit.test;
QUnit.module('convert obj to array');

function convertObjToArray(obj) {
    const keys = Object.keys(obj);
    return keys.map(key => obj[key]); 
}

test('convert obj of objects to array of objects', assert => {
    // arrange
    const obj = {
        abc: { id: 'abc', name: 'obj1' },
        def: { id: 'def', name: 'obj2' },
        ghi: { id: 'ghi', name: 'obj3' }
    };
    
    const expected = [obj.abc, obj.def, obj.ghi];

    // act
    const result = convertObjToArray(obj);
    // assert
    assert.deepEqual(result, expected);
});