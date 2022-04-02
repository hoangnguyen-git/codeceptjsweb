/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home_page.js');
type pricingPage = typeof import('./pages/pricing_page.js');
type WebHelper = import('./helper/web_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, pricingPage: pricingPage }
  interface Methods extends WebDriver, WebHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<WebHelper> {}
  namespace Translation {
    interface Actions {}
  }
}
