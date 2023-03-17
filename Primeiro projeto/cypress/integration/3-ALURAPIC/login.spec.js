describe('Login de usuarios AluraPic',() =>{


    beforeEach(() =>{
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('Fazer login de usuario valido', () => {
        cy.login('usuario_teste', '12345678');
        cy.contains('a', '(Logout)').should('be.visible');
    })

    
    it('Fazer login de usuario invalido', () => {
        cy.login('usua', '12345678')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    }) 
    
    it('Verificar mensagem de que o nome do usuario deve estar em letra minúscula', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('KELLY');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible'); 

    })

    

    });

