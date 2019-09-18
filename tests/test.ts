import { expect } from "chai";
import { CustomerServices } from "../pageObjects/CustomerServices";
import { MainPage } from "../pageObjects/MainPage";

describe("WDIO tests - ", function() {
  it("Customer Service can be opened by click on Button", function() {
    MainPage.open('/');
    MainPage.openCustomerSerives();
    CustomerServices.checkCustomerServicesIsOpened();
  });

  it("Can Send message to Customer Service", function() {
    CustomerServices.open('/customer-service-s-0');
    CustomerServices.setMessageName('TestMessage');
    CustomerServices.setEmailAdress('test@test.com');
    CustomerServices.setMessageSubject('Test subject');
    CustomerServices.setMessageText('This is a test message.');
    CustomerServices.clickSendButton();
    CustomerServices.checkMessageIsSent();
  });
  it("Customer Service contain service information", function() {
    CustomerServices.open("/customer-service-s-0");
    CustomerServices.selectSection("Cookie Policy");
    CustomerServices.checkCustomerSectionIsOpened("Cookie Policy");
    CustomerServices.selectSection("Delivery Information");
    CustomerServices.checkCustomerSectionIsOpened("Delivery Information");
    CustomerServices.selectSection("Newsletter");
    CustomerServices.checkCustomerSectionIsOpened("Newsletter");
    CustomerServices.selectSection("Privacy Policy");
    CustomerServices.checkCustomerSectionIsOpened("Privacy Policy");
    CustomerServices.selectSection("Terms & Conditions");
    CustomerServices.checkCustomerSectionIsOpened("Terms & Conditions");
  });
});
