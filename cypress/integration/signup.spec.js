it('Login com sucesso', () => {
    
    cy.visit('/login')
    cy.get('#email').type('matherson@buildbox.com.br')
    cy.get('#password').type('minhasenha1')
    cy.contains('Entrar').click()
    cy.contains('ADM Linda')
  

    cy.visit('/page/users')

    cy.get('.sc-bdnxRM > button').click()

    const faker = require('faker')
    var fakerbr = require('faker-br');
    const emailAddress = `${faker.datatype.uuid()}@${Cypress.env('MAILOSAUR_SERVER_ID')}.mailosaur.net`
    const cpf = faker.br.cpf()
    //const password = Cypress.env('USER_PASSWORD')
    const name = `${faker.name.firstName()} ${faker.name.lastName()}`
  


    cy.intercept('GET', '**/notes').as('getNotes')
  
    cy.get('#name').type(name)
    cy.get('#email').type(emailAddress)
    cy.get('#personalFiscalID').type(cpf)
    
    //cy.get('#password').type(password, { log: false })
    // cy.get('#confirmPassword').type(password, { log: false })
    // cy.contains('button', 'Signup').click()
    // cy.get('#confirmationCode').should('be.visible')
  
    // cy.mailosaurGetMessage(Cypress.env('MAILOSAUR_SERVER_ID'), {
    //   sentTo: emailAddress
    // }).then(message => {
    //   const confirmationCode = message.html.body.match(/\d{6}/)[0]
    //   cy.get('#confirmationCode').type(`${confirmationCode}{enter}`)
  
    //   cy.wait('@getNotes')
    //   cy.contains('h1', 'Your Notes').should('be.visible')
    // })
  })