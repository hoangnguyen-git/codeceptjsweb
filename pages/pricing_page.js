const { I } = inject();
const time = require('../utils/time');
const timePage = require('../utils/time')

class PricingPage {
    constructor() {
        this.fields = {
            pricingPageHeadingTitle: { xpath: '//h1[contains(text(),"best value for money!")]' },
            findOutMore(businessType) {
                return `//h3[text() = '${businessType}']/ancestor::div[contains(@class,'elementor-widget-heading')]/following-sibling::div//a[@id='home-lets-talk']`
            },
            noShareholders(id) {
                // return { css: `#step${id} svg:nth-child(1) circle` }
                return { xpath: `//div[@id='step${id}']//*[name()='svg'][1]//*[name()='circle']` }
            },
            noShareholdersValue: { css: 'div.accounting-price-label:not(.hide-svg) p' },
            pricePerYearValue: { css: 'div.accounting-price-content:not(.hide-svg) p' }
        }
    }

    async verifyPricingPageDisplayed() {
        await I.waitForWebElementVisible(this.fields.pricingPageHeadingTitle)
    }

    async clickOnMoreOfBusiness(businessType) {
        await I.scrollToElement(this.fields.findOutMore(businessType));
        await I.waitAndClick(this.fields.findOutMore(businessType));
    }

    async adjustShareholdersAndPricePerYear(noShareholders) {
        noShareholders = noShareholders.replace(' Shareholders', '');
        let locatorId;
        switch (noShareholders) {
            case '2':
                locatorId = '2';
                break;
            case '3 - 5':
                locatorId = '3'
                break;
            case '6 - 9':
                locatorId = '4'
                break;
            case '10 - 20':
                locatorId = '5'
                break;
            case '21 - 30':
                locatorId = '6'
                break;
            case '> 30':
                locatorId = '7'
                break;
            default:
                locatorId = '1'
                break;
        }
        await I.scrollToElement(this.fields.noShareholders(locatorId));
        await I.waitForWebElementVisible(this.fields.noShareholdersValue, time.longWait);
        await I.waitForWebElementVisible(this.fields.pricePerYearValue);
        await I.waitAndClick(this.fields.noShareholders(locatorId))
    }

    async verifyNoShareholderAndPricePerYear(noShareholders, pricePerYear) {
        await I.seeTextInsideWebElement(noShareholders, this.fields.noShareholdersValue)
        await I.seeTextInsideWebElement(pricePerYear, this.fields.pricePerYearValue)

    }
    async getNoShareholdersValue() {
        return await I.getTextElement(this.fields.noShareholdersValue);
    }

    async getPricePerYearValue() {
        return await I.getTextElement(this.fields.pricePerYearValue);
    }
}

module.exports = new PricingPage();