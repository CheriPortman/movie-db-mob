import { makeHeader, updateUser } from '../src/header-component.js';

const test = QUnit.test;

test('make header', assert => {
    const dom = makeHeader();
    assert.htmlEqual(dom, /*html*/`
        <header>
            <img src="assets/alchemy-logo.png" alt="Alchemy Code Lab Logo">
            <h1 class="header-title">Favorite Movies</h1>
        </header>
    `);
});

test('update user profile', assert => {
    //arrange
    const user = {
        displayName: 'Chris Piccaro',
        photoURL: 'https://lh6.googleusercontent.com/-B34fgdKTs9E/AAAAAAAAAAI/AAAAAAAAAKY/VLtajeGSgQQ/photo.jpg'
    };
    const expected = /*html*/ `
        <div class="profile">
            <img src="https://lh6.googleusercontent.com/-B34fgdKTs9E/AAAAAAAAAAI/AAAAAAAAAKY/VLtajeGSgQQ/photo.jpg" alt="Avatar of Chris Piccaro">
            <span>Chris Piccaro</span>
            <button>Sign Out</button>
        </div>
    `;
    //act
    const result = updateUser(user);
    //assert
    assert.htmlEqual(result, expected);
});
