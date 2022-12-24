describe('My First Test', () => {
  it('Accessing the site', () => {
    const access = cy.visit('http://localhost:3000/');

    if(access){
      cy.wait(1000);
      cy.get('.color_change').click();
      cy.contains('background color changed to green', {matchCase: false})
      cy.get('p').should('have.css', 'background-color', 'rgb(76, 175, 80)');
    }    
    else
        cy.log('Site Cannot be Accessed');
  })
})