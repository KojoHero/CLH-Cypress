Cypress.Commands.add('login', (email, password) => {
    cy.visit('/')
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('[type="submit"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('.dropdown-container').eq(2).click()
    cy.contains('Log Out').click()
    cy.url().should('contain', 'login')
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
