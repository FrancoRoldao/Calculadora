describe('Calculadora Franco- Operações Matemáticas', function(){

    this.beforeEach(function(){

        cy.visit('https://francoroldao.github.io/Calculadora/')
    })

    it('Valida funcionalidade da Adição', function(){

        cy.get('button[name="btnUm"]').click()
        cy.get('button[name="btnPlus"]').click()
        cy.get('button[name="btnDois"]').click()
        cy.get('button[name="btnRes"]').click()
        cy.get('#resultado').should('have.text', '3')
    })

    it('Valida funcionalidade da Subtração', function(){

        cy.get('button[name="btnQuatro"]').click()
        cy.get('button[name="btnDash"]').click()
        cy.get('button[name="btnDois"]').click()
        cy.get('button[name="btnRes"]').click()
        cy.get('#resultado').should('have.text', '2')
    })

    it('Valida funcionalidade da Divisão', function(){

        cy.get('button[name="btnNove"]').click()
        cy.get('button[name="btnBar"]').click()
        cy.get('button[name="btnTres"]').click()
        cy.get('button[name="btnRes"]').click()
        cy.get('#resultado').should('have.text', '3')
    })

    it('Valida funcionalidade da Multiplicação', function(){

        cy.get('button[name="btnCinco"]').click()
        cy.get('button[name="btnMulti"]').click()
        cy.get('button[name="btnNove"]').click()
        cy.get('button[name="btnRes"]').click()
        cy.get('#resultado').should('have.text', '45')
    })

    it('Valida funcionalidade da Adição com casas decimais', function(){

        cy.get('button[name="btnDois"]').click()
        cy.get('button[name="btnDot"]').click()
        cy.get('button[name="btnCinco"]').click()
        cy.get('button[name="btnSeis"]').click()
       
        cy.get('button[name="btnPlus"]').click()

        cy.get('button[name="btnCinco"]').click()
        cy.get('button[name="btnDot"]').click()
        cy.get('button[name="btnSeis"]').click()
        cy.get('button[name="btnTres"]').click()
    

        cy.get('button[name="btnRes"]').click()
        
        
        cy.get('#resultado').should('have.text', '8.19')
    })

    it('Valida funcionalidade da Subtração com casas decimais', function(){

        cy.get('button[name="btnDois"]').click()
        cy.get('button[name="btnDot"]').click()
        cy.get('button[name="btnCinco"]').click()
        cy.get('button[name="btnSeis"]').click()
       
        cy.get('button[name="btnDash"]').click()

        cy.get('button[name="btnCinco"]').click()
        cy.get('button[name="btnDot"]').click()
        cy.get('button[name="btnSeis"]').click()
        cy.get('button[name="btnTres"]').click()
    

        cy.get('button[name="btnRes"]').click()
        
        
        cy.get('#resultado').should('have.text', '-3.07')
    })

    it('Valida funcionalidade da Divisão com casas decimais', function(){

        cy.get('button[name="btnUm"]').click()
        cy.get('button[name="btnZero"]').click().as('zero')
        cy.get('button[name="btnDot"]').click()
        cy.get('button[name="btnCinco"]').click()
        cy.get('@zero')
       
        cy.get('button[name="btnBar"]').click()

        cy.get('button[name="btnDois"]').click()
        cy.get('button[name="btnDot"]').click()
        cy.get('button[name="btnCinco"]').click()
        cy.get('button[name="btnZero"]').click()
    

        cy.get('button[name="btnRes"]').click()
        
        
        cy.get('#resultado').should('have.text', '4.2')
    })

    it('Valida funcionalidade da Multiplicação com casas decimais', function(){

        cy.get('button[name="btnUm"]').click()
        cy.get('button[name="btnZero"]').click().as('zero')
        cy.get('button[name="btnDot"]').click().as('dot')
        cy.get('button[name="btnCinco"]').click()
        cy.get('@zero')
       
        cy.get('button[name="btnMulti"]').click()

        cy.get('button[name="btnDois"]').click()
        cy.get('@dot').click()
        cy.get('button[name="btnCinco"]').click()
        cy.get('@zero').click()
    

        cy.get('button[name="btnRes"]').click()
        
        
        cy.get('#resultado').should('have.text', '26.25')
    })


    



})