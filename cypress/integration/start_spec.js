it('works',() => {
    cy.visit('/').contains('Laracasts');

    expect(2+2).to.equal(4);
});