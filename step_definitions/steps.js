const { I, homePage, pricingPage } = inject();
let activation_code;
let message;

Given('I went to the Sleek SG Home page', async () => {
    await homePage.goTo();
});

When('I click on the {string} link', async (menuTab) => {
    await homePage.clickOnTab(menuTab);
});

When('I should be navigated to the Sleek SG Pricing page', async () => {
    await pricingPage.verifyPricingPageDisplayed();
});

When('I am on the Sleek SG {string} page', async (menuTab) => {
    await homePage.goTo();
    await homePage.clickOnTab(menuTab);
    await pricingPage.verifyPricingPageDisplayed();
});

When('I click on {string} button for {string}', async (button, businessType) => {
    await pricingPage.clickOnMoreOfBusiness(businessType);
});

When('I adjust {string} and {string}', async (noShareholders, pricePerYear) => {
    await pricingPage.adjustShareholdersAndPricePerYear(noShareholders);
});

When('Verify corporate secretary details are correct: {string} {string}', async (noShareholders, pricePerYear) => {
    await pricingPage.verifyNoShareholderAndPricePerYear(noShareholders, pricePerYear);
});

