import{Anna} from "./annaPageObject";
const annA = new Anna();
const fs = require('fs');

describe("Bug for Return and Refund Policy hyperlink", () =>{
    test ("Finding bug", async () => {
        await annA.navigate();
        await annA.click(annA.shippingPolicy);
        await annA.click(annA.returnPolicy);
        await annA.driver.sleep(3000);

        await fs.writeFile(`${__dirname}/bugScreenshot.png`,
        await annA.driver.takeScreenshot(),"base64",
        (e) => {
            if (e) console.error(e);
            else console.log('Bug presented');
        });

        await annA.driver.quit();

    });
});