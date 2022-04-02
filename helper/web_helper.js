const timePage = require('../utils/time')

class WebHelper extends Helper {
    _init() {
        super._init();
    }

    /**
     * go to page
     * @param page
     * @returns {Promise<void>}
     */
    async goto(page) {
        this.helpers['WebDriver'].amOnPage(page);
    }

    /**
* @param {*} locator 
* @param {*} timeout 
*/
    async waitForWebElementVisible(locator, timeout = timePage.normal) {
        try {
            await this.helpers['WebDriver'].waitForElement(locator, timeout)
        } catch (e) {
            throw new Error(e)
        }
        await this.helpers['WebDriver'].waitForVisible(locator, timeout)
    }

    /**
     * @param locatorP
     * @param timeout
     * @returns {Promise<void>}
     */
    async waitAndClick(locator, timeout = timePage.normal) {
        await this.helpers['WebDriver'].waitForVisible(locator, timeout);
        await this.helpers['WebDriver'].waitForClickable(locator, timeout);
        await this.helpers['WebDriver'].click(locator);
    }


    /**
     * @param locator
     * @param value
     * @param timeout
     * @returns {Promise<void>}
     */
    async waitAndFillEle(locator, value, timeout = timePage.normal) {
        await this.helpers['WebDriver'].waitForVisible(locator, timeout);
        await this.helpers['WebDriver'].fillField(locator, value);
    }



    /**
     * scroll to element which being overlapped by heading and top nav
     * @param selector
     * @param offsetX
     * @param offsetY
     * @returns {Promise<void>}
     */
    async scrollToElement(selector, offsetX = 0, offsetY = -200) {
        const driver = this.helpers['WebDriver'];
        return driver.scrollTo(selector, offsetX, offsetY);
    }


    /**
     * get text from locator
     * @param locator
     * @returns {Promise<string|*|string[]>}
     */
    async getTextElement(locator) {
        const texts = await this.helpers['WebDriver'].grabTextFrom(locator);
        if (texts instanceof Array) {
            return texts[0];
        }
        return texts;
    }

    /**
    * 
    * @param {*} text 
    * @param {*} context 
    */
    async seeTextInsideWebElement(text, context) {
        await this.helpers['WebDriver'].see(text, context)
    }
}

module.exports = WebHelper;
