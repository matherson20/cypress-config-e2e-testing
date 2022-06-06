it('Login com sucesso', () => {
    
    cy.visit('/login')
    cy.get('#email').type('matherson@buildbox.com.br')
    cy.get('#password').type('minhasenha1')
    cy.contains('Entrar').click()

  })