it('iframe',()=>{

    cy.visit('/');

    get('#login')
        .should('have.text','Log in');

});