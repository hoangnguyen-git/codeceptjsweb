const { I } = inject();

class HomePage {
    constructor() {
        this.fields = {
            homePageHeadingTitle: { xpath: '//h1[contains(text(),"Register a company")]' },
            menuTab(menu) {
                return `(//div[@id = 'ekit-megamenu-mega-menu']//a[text()='${menu}'])[1]`
            },
        }
    }

    async goTo() {
        await I.goto('/');
        await I.waitForWebElementVisible(this.fields.homePageHeadingTitle)
    }

    async clickOnTab(menuTab) {
        await I.waitAndClick(this.fields.menuTab(menuTab));

    }
}

module.exports = new HomePage();