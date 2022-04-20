import ForgotPasswordPage from '../../page-objects/ForgotPasswordPage'

describe('Forgot password', () => {
    const forgotPassword = new ForgotPasswordPage()
    it('should request for a password change using invalid email', () => {
        forgotPassword.visitPage()
        forgotPassword.invalidEmail()
    })

    it('should request for a password change using valid mail', () => {
        forgotPassword.visitPage()
        forgotPassword.validEmail()
    })
})
