describe("POST /users", () => {
  it("register new users", () => {
    const user = {
      name: "Dionis Moreira",
      email: "dionis@dionis.com.br",
      password: "193264",
    };

    cy.task("deleteUser", user.email);

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  context("required fields", () => {
    let user;

    beforeEach(() => {
      user = {
        name: "Vanessa",
        email: "vanessa@vanessa.com.br",
        password: "123456",
      };
    });

    it("name required", () => {
      delete user.name;
      cy.postUser(user).then((response) => {
        const { message } = response.body;
        expect(response.status).to.eq(400);
        expect(message).to.eq('ValidationError: "name" is required');
      });
    });

    it("email required", () => {
      delete user.email;
      cy.postUser(user).then((response) => {
        const { message } = response.body;
        expect(response.status).to.eq(400);
        expect(message).to.eq('ValidationError: "email" is required');
      });
    });
  });
});
