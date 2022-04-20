class LoginPage {
    noUsernameLogin() {
        cy.visit('/')
        cy.get('#email').should('have.value', '')
        cy.get('#password').type('hello')
        cy.get('[type="submit"]').click()
        cy.get('#email').then(($input) => {
            expect($input[0].validationMessage).to.eq(
                'Please fill in this field.',
            )
        })
        cy.url().should('include', 'login')
    }

    noPasswordLogin() {
        cy.visit('/')
        cy.get('#email').type('care-center User 1')
        cy.get('#password').should('have.value', '')
        cy.get('[type="submit"]').click()
        cy.get('#password').then(($password) => {
            expect($password[0].validationMessage).to.eq(
                'Please fill in this field.',
            )
        })
        cy.url().should('include', 'login')
    }
}

export default LoginPage
