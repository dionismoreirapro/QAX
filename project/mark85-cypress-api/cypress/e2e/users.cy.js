describe('POST /users', ()=>{


  it('register new users', ()=>{
    
    const user = {
      name: 'Dionis Moreira',
      email: 'dionis@dionis.com.br',
      password: '193264'
    }
    
    cy.request({
      url: '/users',
      method: 'POST',
      body: user,
      failOnStatusCode: false
    }).then(Response => {
      expect(Response.status).to.eq(200)
    })

  })





})