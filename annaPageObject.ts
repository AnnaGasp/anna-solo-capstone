import {By} from "selenium-webdriver";
import {BasePage} from "./basePage";

export class Anna extends BasePage {
    //selectors
    logInBtn: By = By.xpath ('(//a[text()="Log In"])[1]');
    usernameField: By = By.css ('#edit-name');
    passwordField: By = By.css ('#edit-pass');
    logInBtnGreen: By = By.xpath ('//button[@id="edit-submit"]');
    myAccountTitle: By = By.css ('#page-title');
    errorMessage: By = By.xpath ('//div[@class="messages error"]');
    logOutBtn: By = By.xpath ('(//a[text()= "Log Out"])[1]');




    constructor() {
        super ({url:"https://thecuriousreaderbooks.indielite.org/"}) 
};
// a few getresults fo each test file
    async getResults() {
        return await this.getText(this.myAccountTitle);
    };

    async getResults1() {
        return await this.getText(this.errorMessage);
    }

};