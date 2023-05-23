import {add} from './myLib.mjs';
import assert from 'assert'

console.log('add(\nShould ass two numbers')

try{
    assert.strictEqual(add(1,2), 3)
    console.log('SUCCESS')
}catch(e){
    console.log('FAIL')
    console.error(e)
}