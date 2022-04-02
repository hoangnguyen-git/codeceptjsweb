exports.config = {
    output: './output',
    helpers: {
        WebDriver: {
            timeouts: {
                "script": 60000,
                "page load": 100000,
            },
            keepBrowserState: true,
            smartWait: 20000,
            browser: "chrome",
            url: process.env.URL || "https://sleek.com/sg/",
            restart: false,
            windowSize: "maximize",
            waitForTimeout: 35000,
            desiredCapabilities: {
                chromeOptions: {
                    args: ['--disable-web-security', '--disable-notifications', '--disable-infobars']
                }
            }
        },
        WebHelper: {
            require: './helper/web_helper.js',
        },
    },
    include: {
        I: './steps_file.js',
        homePage: './pages/home_page.js',
        pricingPage: './pages/pricing_page.js'
    },
    mocha: {},
    bootstrap: null,
    teardown: null,
    hooks: [],
    gherkin: {
        features: './features/*.feature',
        steps: [
            './step_definitions/steps.js',
        ]
    },
    plugins: {
        wdio: {
            services: ['selenium-standalone'],
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        },
        pauseOnFail: {},
        retryFailedStep: {
            enabled: true
        },
        tryTo: {
            enabled: true
        },
        allure: {
            generate: 'output'
        }
    },
    tests: './*_test.js',
    name: 'Assignment',
    smartWait: 60000

};