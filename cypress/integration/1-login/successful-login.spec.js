import { validUser } from '../../fixtures/login.data'

describe('Successful Login', () => {
    it('should login successfully with correct credentials', () => {
        let { username, password } = validUser
        cy.login(username, password)
        cy.url().should('include', 'patient-activities')
        cy.logout()
    })
})
