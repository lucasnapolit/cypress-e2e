


export class registerPage{
    elements ={
    firstName:'#input-firstname',
    lastName:'#input-lastname',
    email:'#input-email',
    telefone:'#input-telephone',
    password:'#input-password',
    retype:'#input-confirm',
    //suscribe:'//label[normalize-space()='Yes']//input[@name='newsletter']',
    agreePolicy:"input[value='1'][name='agree']",
    Next:"input[value='Continue']"
    }
    
  
    


    typeName(name){
       cy.get(this.elements.firstName).type(name)
    }
    typeLastName(lastName){
        cy.get(this.elements.lastName).type(lastName)
     }
     typeEmail(email){
        cy.get(this.elements.email).type(email)
     }
     typeTelefone(tel){
        cy.get(this.elements.telefone).type(tel)
     }
     typePassowrd(password){
        cy.get(this.elements.password).type(password)
     }
     typeConfirmation(cpassowrd){
        cy.get(this.elements.retype).type(cpassowrd)
     }
     agreePolicy(){
        cy.get(this.elements.agreePolicy).check()
     }
     Nextbutton(){
        cy.get(this.elements.Next).click()
     }
    }