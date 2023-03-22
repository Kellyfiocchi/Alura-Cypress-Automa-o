describe('Login de usuarios AluraPic',() =>{


    beforeEach(() =>{
        cy.visit('https://alura-fotos.herokuapp.com')

        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400
        } ).as ('stubPost')
    })

    it('Fazer login de usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.wait('@stubPost')
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

