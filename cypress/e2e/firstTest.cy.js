/// <reference types = "Cypress" /> 
//describe ('Mobile phone replenishment', () => {
    
    //context("Replenishment less than the allowed amount", ()=> {
      //it("Show error: Minimum amount of the replenishment 1 UAH", () =>{});
    //});
  
//});

it('Using Get with Find and Eq', () => {
  cy.visit('https://next.privat24.ua/deposit/open')
  cy.get('tbody').find('td').find('div').find('button').eq('0')
});

it.only('Using Get with Find and Eq', () => {
  cy.viewport(1800,700)
  cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
  cy.get('aside').find('div').find('nav').find('ul').find('a').eq(0)
});


