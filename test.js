const webdriver = require('selenium-webdriver')
const { Builder, By } = webdriver;

async function runTest() {
  const driver = new Builder().forBrowser('chrome').build();

  await driver.get('https://commerceos.staging.devpayever.com/registration/fashion')

  await driver.sleep(3000);

  const sendKeys = async (selector, value) => {
    const input = await driver.findElement(By.css(selector))
    const parent = await input.findElement(By.xpath('..'));
  
    await driver.executeScript('arguments[0].style.height = "auto"', parent);
    await driver.executeScript('arguments[0].style.overflow = "auto"', parent);

    await input.sendKeys(value);
  }


  await sendKeys('[formcontrolname="firstName"]', 'Yolo');
  await sendKeys('[formcontrolname="lastName"]', 'Yolo last name');
  

  const submitButton = driver.findElement(By.css('.signup-button'));
  await submitButton.click()

  await driver.sleep(10000);

  await driver.quit();
}

runTest();
