const username = 'martin.kask@clarifai.com';
const password = 'chakalaka';

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url(`/#/login`);

        $('input[type="email"]').setValue(username);
        $('input[type="password"]').setValue(password);
        $('button[type="submit"]').click();

        expect($('.article-preview')).toBeExisting();
    });
});


