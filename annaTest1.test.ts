import{Anna} from "./annaPageObject";
const anna = new Anna();

beforeEach (async () => {
    await anna.navigate();
});

afterAll (async () => {
    await anna.driver.quit();
});

describe ("Tests for Login", () => {
    test ("Login with valid credentials", async () => {
        await anna.click(anna.logInBtn);
        await anna.setInput(anna.usernameField,"DevmountainTest");
        await anna.setInput(anna.passwordField,"Bookstore1234");
        await anna.click(anna.logInBtnGreen);
        let results = await anna.getAccountResults();
        expect(results).toContain("DevmountainTest");
        await anna.click(anna.logOutBtn);
    });

    test ("Login with invalid passsword", async () => {
        await anna.click(anna.logInBtn);
        await anna.setInput(anna.usernameField,"DevmountainTest");
        await anna.setInput(anna.passwordField,"password");
        await anna.click(anna.logInBtnGreen);
        let results = await anna.getErrorResults();
        expect(results).toContain("Sorry, unrecognized username or password.");
    });

    test ("Login with invalid username", async () => {
        await anna.click(anna.logInBtn);
        await anna.setInput(anna.usernameField,"username");
        await anna.setInput(anna.passwordField,"Bookstore1234");
        await anna.click(anna.logInBtnGreen);
        let results = await anna.getErrorResults();
        expect(results).toContain("Sorry, unrecognized username or password.");
    });

    test ("Login with invalid username and password", async () => {
        await anna.click(anna.logInBtn);
        await anna.setInput(anna.usernameField,"username");
        await anna.setInput(anna.passwordField,"password");
        await anna.click(anna.logInBtnGreen);
        let results = await anna.getErrorResults();
        expect(results).toContain("Sorry, unrecognized username or password.");
    });


})