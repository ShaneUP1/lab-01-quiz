// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {yesChecker} from '../yes-checker.js'

const test = QUnit.test;

test('if input is yup then a boolean of true is expected', (expect) => {
    const expected = true;
    const actual = yesChecker('yup');
    expect.equal(actual, expected);
    console.log(actual);
});

test('if input is nah then a boolean of false is expected', (expect) => {
    const expected = false;
    const actual = yesChecker('nah');
    expect.equal(actual, expected);
    console.log(actual);
});