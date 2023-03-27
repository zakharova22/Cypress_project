describe ('Mobile phone replenishment', () => {
    
    //context("Replenishment less than the allowed amount", ()=> {
      //it("Show error: Minimum amount of the replenishment 1 UAH", () =>{});
    //});
  
});

it('By ID', () => {
  cy.visit("https://www.facebook.com/")
  cy.get('#email')
});

it('By Class', () => {
  cy.visit("https://docs.cypress.io/guides/overview/why-cypress")
  cy.get('.ds-input')
});

it('By Tag', () => {
  cy.visit("https://docs.cypress.io/guides/overview/why-cypress")
  cy.get('navbar')
});

it.only('By Tag value', () => {
  cy.visit("https://www.facebook.com/")
  cy.get('[name="pass"]')
});

it.only('By Diffent Tag', () => {
  cy.visit("https://www.facebook.com/")
  cy.get('[data-testid="open-registration-form-button"][role="button"]')
});

it.only('By Diffent Tag', () => {
  cy.visit("https://docs.cypress.io/guides/overview/why-cypress")
  cy.get('button[type="button"][title ="close banner"]')
});

it.only('By Contains name', () => {
  cy.visit("https://next.privat24.ua/")
  cy.get('*[class^="card"]')
});


it('Using Get with Find and Eq', () => {
  cy.visit('https://next.privat24.ua/deposit/open')
  cy.get('tbody').find('td').find('div').find('button').eq('0')
});

it.only('Using Get with Find and Eq', () => {
  cy.viewport(1800,700)
  cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
  cy.get('aside').find('div').find('nav').find('ul').find('a').eq(0)
});
 

