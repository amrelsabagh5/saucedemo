///<referance type="cypress/ ">
export class LoginPage {

username(USER_NAMR){

cy.get('[data-test="username"]').type(USER_NAMR);
}
pass(PASS){
cy.get('[data-test="password"]').type(PASS);

}
click_login(){
cy.get('[data-test="login-button"]').click();

}


}