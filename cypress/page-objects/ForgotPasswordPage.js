import { forgotPassword } from '../fixtures/login.data'

class ForgotPasswordPage {
    visitPage() {
        cy.visit('/')
        cy.contains('Forgot your password?').click()
        cy.url().should('include', 'forgot-password')
    }

    validEmail() {
        cy.get('#email').type(forgotPassword.validEmail)
        cy.get('[type="submit"]').click()
        cy.contains('We have emailed your password reset link!')
    }

    invalidEmail() {
        cy.get('#email').type(forgotPassword.invalidEmail)
        cy.get('[type="submit"]').click()
        cy.contains("We can't find a user with that email address.")
    }
}

export default ForgotPasswordPage
