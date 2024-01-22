describe('Автотесты на форму логина', function () {
   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').click(); // нажали войти
        cy.get('#messageHeader').should('be.visible'); // текст успеха авторизации виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпал
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик
    })

   it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#forgotEmailButton').click(); // клик забыли пароль
        cy.get('#forgotForm > .header').should('be.visible'); // текст о восстановлении пароля виден
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); // текст совпал
        cy.get('#mailForgot').type('surkova2@dar.ru'); // ввели e-mail
        cy.get('#restoreEmailButton').click(); // клик отправить код
        cy.get('#messageHeader').should('be.visible'); //текст об успешной отправке пароля виден
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //текст совпал
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //виден крестик
    })

   it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти некликабельная
        cy.get('#pass').type('iLoveqastudio1'); // ввели неверный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельная
        cy.get('#pass').type('iLoveqastudio7'); // ввели неверный пароль
        cy.get('#loginButton').click(); // нажали войти
        cy.get('#messageHeader').should('be.visible'); // текст об ошибке пароля виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпал
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик
    })

   it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('germa@dolnikov.ru'); // ввели неверный логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти некликабельная
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельная
        cy.get('#loginButton').click(); // нажали войти
        cy.get('#messageHeader').should('be.visible'); // текст об ошибке пароля виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпал
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик

     })

   it('Неверная валидация', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
        cy.get('#loginButton').should('be.disabled'); // кнопка войти некликабельная
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельная
        cy.get('#loginButton').click(); // нажали войти
        cy.get('#messageHeader').should('be.visible'); // текст об ошибке валидации виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // текст совпал
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик

     })

   it('Приведение к строчным буквам', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин c заглавными буквами
        cy.get('#loginButton').should('be.disabled'); // кнопка войти некликабельная
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельная
        cy.get('#loginButton').click(); // нажали войти
        cy.get('#messageHeader').should('be.visible'); // текст успеха авторизации виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпал
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик
        
     })

})
