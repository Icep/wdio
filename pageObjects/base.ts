export class BasePO {

  open(url) {
    console.log("Navigating to: ", url);
    browser.url(url);
    browser.pause(3000)
  }
}
