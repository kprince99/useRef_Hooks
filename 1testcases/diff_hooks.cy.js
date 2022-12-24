describe('Differentiate between two hooks', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000/")
    for(var i = 1; i <=3; i++)
    {
      cy.get('.upd_state').click();
      cy.get('.count1').invoke('text').then(cy.log);
    }

    for(var i = 1; i <=3; i++)
    {
       cy.get('.upd_ref').click();
       cy.get('.count2').invoke('text').then(cy.log);
    }
    
    cy.wait(2000);
    cy.get('.upd_state').click();
    cy.get('.count2').invoke('text').then(cy.log);

  })
})