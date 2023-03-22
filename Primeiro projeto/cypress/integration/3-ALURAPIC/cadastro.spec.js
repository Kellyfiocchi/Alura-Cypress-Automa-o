describe('Cadastros de usuarios AluraPic',() =>{


    beforeEach(() =>{
        cy.visit('/')
    })

    it('Verificar mensagens de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('kelly');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible'); 

    })

    it('Verifica mensagens de validaçao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible'); 
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');

    })

    it('Verificar mensagem de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('888');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible'); 

    })

    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {
        it(`registrar novo usuário ${usuario.userName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.registrarUsuario(usuario.email, usuario.fullName, usuario.userName, usuario.password);
            cy.contains(' .btn', 'Register').click();
            
        })
    })

    

})   