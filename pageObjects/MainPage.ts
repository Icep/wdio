import { BasePO } from "./base";

export class MainPagePO extends BasePO {
  //Top Menu
  get btnCustomerService() {
    return $("#default-menu .customer-service");
  }

  openCustomerSerives() {
    this.btnCustomerService.waitForDisplayed(5000);
    this.btnCustomerService.click();
  }
}

export const MainPage = new MainPagePO();
