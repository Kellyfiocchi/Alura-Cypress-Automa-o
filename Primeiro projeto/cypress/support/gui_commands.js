

Cypress.Commands.add('login', (usuario, senha) =>{
    cy.get('input[formcontrolname="userName"]').type(usuario);
    cy.get('input[formcontrolname="password"]').type(senha, {log: false});
    cy.get('button[type="submit"]').click();
}) ;

