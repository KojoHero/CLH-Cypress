import { invalidPassword, invalidUsername } from '../../fixtures/login.data'

import LoginPage from '../../page-objects/LoginPage'
describe('Unsuccessful Login', () => {
    const loginPage = new LoginPage()
    it('should fail with a message if no username is entered', () => {
        loginPage.noUsernameLogin()
    })

    it('should fail with a message if no password is entered', () => {
        loginPage.noPasswordLogin()
    })

    it('should fail with a message if an invalid password is entered', () => {
        let { username, password } = invalidPassword
        cy.login(username, password)
        cy.contains('These credentials do not match our records.')
        cy.url().should('include', 'login')
    })

    it('should fail with a message if an invalid username is entered', () => {
        let { username, password } = invalidUsername
        cy.login(username, password)
        cy.contains('These credentials do not match our records.')
        cy.url().should('include', 'login')
    })
})
