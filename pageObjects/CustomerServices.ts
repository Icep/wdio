import { BasePO } from "./base";
import { expect } from "chai";

export class CustomerServicesPO extends BasePO {
  //Contact Us form
  get inName() {
    return $('#box-contact-us [name="name"]');
  }
  get inEmailAdress() {
    return $('#box-contact-us [name="email"]');
  }
  get inSubject() {
    return $('#box-contact-us [name="subject"]');
  }
  get inMessage() {
    return $("#box-contact-us textarea");
  }
  get btnSend() {
    return $("#box-contact-us [name='send']");
  }
  get alertSuccess() {
    return $(".alert-success");
  }
  get sectionHeader() {
    return $("#box-customer-service h1");
  }

  checkCustomerServicesIsOpened() {
    expect($("#box-information-links .title").getText()).to.equal(
      "Customer Service"
    );
  }

  checkMessageIsSent() {
    this.alertSuccess.waitForDisplayed(5000);
    expect(this.alertSuccess.getText()).to.equal(
      " Your email has successfully been sent"
    );
  }

  setMessageName(value: string) {
    this.inName.waitForDisplayed();
    this.inName.click();
    this.inName.clearValue();
    browser.pause(50);
    this.inName.setValue(value);
  }
  setEmailAdress(value: string) {
    this.inName.waitForDisplayed();
    this.inName.click();
    this.inName.clearValue();
    browser.pause(50);
    this.inName.setValue(value);
  }
  setMessageSubject(value: string) {
    this.inName.waitForDisplayed();
    this.inName.click();
    this.inName.clearValue();
    browser.pause(50);
    this.inName.setValue(value);
  }
  setMessageText(value: string) {
    this.inName.waitForDisplayed();
    this.inName.click();
    this.inName.clearValue();
    browser.pause(50);
    this.inName.setValue(value);
  }
  clickSendButton() {
    this.btnSend.waitForDisplayed();
    this.btnSend.click();
  }
  selectSection(text) {
    $("=" + text + "").waitForDisplayed();
    $("=" + text + "").click();
    browser.pause(50);
  }

  checkCustomerSectionIsOpened(text) {
    this.sectionHeader.waitForDisplayed(5000);
    expect(this.sectionHeader.getText()).to.equal(text);
  }
}

export const CustomerServices = new CustomerServicesPO();
