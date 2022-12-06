/// <reference types="Cypress" />

const { each } = require("bluebird")

describe('Calculadora Franco - Botões ', function(){

    this.beforeEach(function(){

        cy.visit('https://francoroldao.github.io/Calculadora/')
    })

    it('Valida funcionalidade do click e valor exibido no visor - Botão 1', function(){

        cy.get('button[name="btnUm"]')
        .click()
        
        cy.get('#resultado').should('have.text', '1')
        

    })

    
    it('Valida funcionalidade do click e valor exibido no visor - Botão 2', function(){

        cy.get('button[name="btnDois"]')
        .click()
        
        cy.get('#resultado').should('have.text', '2')
        

    })

    it('Valida funcionalidade do click e valor exibido no visor - Botão 3', function(){

        cy.get('button[name="btnTres"]')
        .click()
        
        cy.get('#resultado').should('have.text', '3')
        

    })

    it('Valida funcionalidade do click e valor exibido no visor - Botão 4', function(){

        cy.get('button[name="btnQuatro"]')
        .click()
        
        cy.get('#resultado').should('have.text', '4')
        

    })

    it('Valida funcionalidade do click e valor exibido no visor - Botão 5', function(){

        cy.get('button[name="btnCinco"]')
        .click()
        
        cy.get('#resultado').should('have.text', '5')
        

    })

    it('Valida funcionalidade do click e valor exibido no visor - Botão 6', function(){

        cy.get('button[name="btnSeis"]')
        .click()
        
        cy.get('#resultado').should('have.text', '6')
        

    })

    it('Valida funcionalidade do click e valor exibido no visor - Botão 7', function(){

        cy.get('button[name="btnSete"]')
        .click()
        
        cy.get('#resultado').should('have.text', '7')
        

    })

    it('Valida funcionalidade do click e valor exibido no visor - Botão 8', function(){

        cy.get('button[name="btnOito"]')
        .click()
        
        cy.get('#resultado').should('have.text', '8')
        

    })

    it('Valida funcionalidade do click e valor exibido no visor - Botão 9', function(){

        cy.get('button[name="btnNove"]')
        .click()
        
        cy.get('#resultado').should('have.text', '9')
        

    })

    it('Valida funcionalidade do click e valor exibido no visor - Botão 0', function(){

        cy.get('button[name="btnZero"]')
        .click()
        
        cy.get('#resultado').should('have.text', '0')
        

    })

    it('Valida funcionalidade do click e valor exibido no visor - Botão +', function(){

        cy.get('button[name="btnPlus"]')
        .click()
        
        cy.get('#resultado').should('have.text', '+')
        

    })

    it('Valida funcionalidade do click e valor exibido no visor - Botão -', function(){

        cy.get('button[name="btnDash"]')
        .click()
        
        cy.get('#resultado').should('have.text', '-')
        

    })

    it('Valida funcionalidade do click e valor exibido no visor - Botão =', function(){

        cy.get('button[name="btnRes"]')
        .click()
        
        cy.get('#resultado').should('have.text', 'sem operação')
        

    })

    it('Valida funcionalidade do click e valor exibido no visor - Botão .', function(){

        cy.get('button[name="btnDot"]')
        .click()
        
        cy.get('#resultado').should('have.text', '.')
        

    })

    it('Valida funcionalidade do click e valor exibido no visor - Botão .', function(){

        cy.get('button[name="btnMulti"]')
        .click()
        
        cy.get('#resultado').should('have.text', '*')
        

    })

    it('Valida que todos os botões estão visiveis', function(){


       cy.get('td')
       .each(function($td){

        cy.wrap($td).should('be.visible')
       

       })
    })

    it('Valida funcionalidade do botão Clear', function(){

        cy.get('button[name="btnDois"]')
        .click()
        .get('#resultado')
        .should('have.text', 2)

        cy.get('button[name="btnClean"]')
        .click()
        .get('#resultado')
        .should('not.have.text')
    })

    

    

   


})
