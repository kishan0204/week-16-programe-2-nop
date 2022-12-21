$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ComputerTest.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "As user I want to explore Computer page of nop commerce website",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5874433100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to computer page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 130759400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1078848300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepTest.iShouldNavigateToComputerPageSuccessfully()"
});
formatter.result({
  "duration": 47379600,
  "status": "passed"
});
formatter.after({
  "duration": 80000,
  "status": "passed"
});
formatter.before({
  "duration": 2518634600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to Desktops Page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 33700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 983713600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 424571100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepTest.iShouldNavigateToDesktopsPageSuccessfully()"
});
formatter.result({
  "duration": 43076600,
  "status": "passed"
});
formatter.after({
  "duration": 37500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select ram \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select hdd \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see product has been added to your shopping cart confirmation message",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 32,
      "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "8GB [+$60.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 33,
      "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2604568400,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select hdd \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see product has been added to your shopping cart confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 51500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 508764500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 421162200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnProductNameBuildYourOwnComputer()"
});
formatter.result({
  "duration": 784416400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerStepTest.iSelectProcessor(String)"
});
formatter.result({
  "duration": 105029100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerStepTest.iSelectRam(String)"
});
formatter.result({
  "duration": 104544900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerStepTest.iSelectHdd(String)"
});
formatter.result({
  "duration": 109461500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerStepTest.iSelectOS(String)"
});
formatter.result({
  "duration": 92454000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerStepTest.iSelectSoftware(String)"
});
formatter.result({
  "duration": 83057300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 73581300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepTest.iShouldSeeProductHasBeenAddedToYourShoppingCartConfirmationMessage()"
});
formatter.result({
  "duration": 740350300,
  "status": "passed"
});
formatter.after({
  "duration": 71300,
  "status": "passed"
});
formatter.uri("LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2198042000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 50600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1027999100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 56833200,
  "status": "passed"
});
formatter.after({
  "duration": 34800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 19,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "london1@gmail.com",
        "london1",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 20,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2908326000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"london1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"london1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 73200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1076478600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london1@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepsTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 245723300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london1",
      "offset": 18
    }
  ],
  "location": "LoginStepsTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 185141200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 416878900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginStepsTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 65702800,
  "status": "passed"
});
formatter.after({
  "duration": 45900,
  "status": "passed"
});
formatter.before({
  "duration": 2402226200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@sanity"
    },
    {
      "line": 23,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I fill all the mandatory fields",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter email \"jhonwick@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"jhonwick\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see logout link is display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 66900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 995017200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iFillAllTheMandatoryFields()"
});
formatter.result({
  "duration": 1338804900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 670761600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 504638200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jhonwick@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepsTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 205393100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jhonwick",
      "offset": 18
    }
  ],
  "location": "LoginStepsTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 119969100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 600601400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iShouldSeeLogoutLinkIsDisplay()"
});
formatter.result({
  "duration": 56707100,
  "status": "passed"
});
formatter.after({
  "duration": 29500,
  "status": "passed"
});
formatter.before({
  "duration": 2594918000,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User should logout successfully",
  "description": "",
  "id": "login-test;user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I fill all the mandatory fields",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter email \"jhonwick@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter password \"jhonwick\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I should see login link is display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 42000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 654351600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iFillAllTheMandatoryFields()"
});
formatter.result({
  "duration": 1238195800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 422494300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 457541600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jhonwick@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepsTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 212204600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jhonwick",
      "offset": 18
    }
  ],
  "location": "LoginStepsTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 158792200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 719224200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iClickOnLogoutLink()"
});
formatter.result({
  "duration": 720129900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsTest.iShouldSeeLoginLinkIsDisplay()"
});
formatter.result({
  "duration": 79590200,
  "status": "passed"
});
formatter.after({
  "duration": 66200,
  "status": "passed"
});
formatter.uri("RegisterTest.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As user I want to register to nop commerce website",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2844632500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify user should navigate to register page successfully",
  "description": "",
  "id": "register-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 57000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 679775300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 73699900,
  "status": "passed"
});
formatter.after({
  "duration": 80100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\" for fieldName \"\u003cfieldName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;",
  "rows": [
    {
      "cells": [
        "fieldName",
        "errorMessage"
      ],
      "line": 18,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;1"
    },
    {
      "cells": [
        "FirstName",
        "First name is required."
      ],
      "line": 19,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;2"
    },
    {
      "cells": [
        "LastName",
        "Last name is required."
      ],
      "line": 20,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;3"
    },
    {
      "cells": [
        "Email",
        "Email is required."
      ],
      "line": 21,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;4"
    },
    {
      "cells": [
        "Password",
        "Password is required."
      ],
      "line": 22,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;5"
    },
    {
      "cells": [
        "ConfirmPassword",
        "Password is required."
      ],
      "line": 23,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3167227800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"First name is required.\" for fieldName \"FirstName\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 44100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 688873400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 150275200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    },
    {
      "val": "FirstName",
      "offset": 72
    }
  ],
  "location": "RegisterStepsTest.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "duration": 164583800,
  "status": "passed"
});
formatter.after({
  "duration": 36000,
  "status": "passed"
});
formatter.before({
  "duration": 3039107500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Last name is required.\" for fieldName \"LastName\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 55500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 656518600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 132791600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 32
    },
    {
      "val": "LastName",
      "offset": 71
    }
  ],
  "location": "RegisterStepsTest.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "duration": 182015300,
  "status": "passed"
});
formatter.after({
  "duration": 58600,
  "status": "passed"
});
formatter.before({
  "duration": 3185794200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Email is required.\" for fieldName \"Email\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 51200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 708325600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 144367200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 32
    },
    {
      "val": "Email",
      "offset": 67
    }
  ],
  "location": "RegisterStepsTest.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "duration": 204402300,
  "status": "passed"
});
formatter.after({
  "duration": 57800,
  "status": "passed"
});
formatter.before({
  "duration": 3008526100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Password is required.\" for fieldName \"Password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 48800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 720954400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 159107600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    },
    {
      "val": "Password",
      "offset": 70
    }
  ],
  "location": "RegisterStepsTest.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "duration": 210538800,
  "status": "passed"
});
formatter.after({
  "duration": 50000,
  "status": "passed"
});
formatter.before({
  "duration": 3357364600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Password is required.\" for fieldName \"ConfirmPassword\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 127100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 653915000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 153607100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    },
    {
      "val": "ConfirmPassword",
      "offset": 70
    }
  ],
  "location": "RegisterStepsTest.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "duration": 240662200,
  "status": "passed"
});
formatter.after({
  "duration": 49000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "verify that user should create account successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I select gender\"\u003cgender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter firstname \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter lastname \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select date of birth  \"\u003cday\u003e\"\"\u003cmonth\u003e\"\"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter email \"jhonwick@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 34,
      "value": "# And I enter random email \"london1@gmail.com\""
    }
  ],
  "line": 35,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see registration confirmation message",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully;",
  "rows": [
    {
      "cells": [
        "gender",
        "firstName",
        "lastName",
        "day",
        "month",
        "year",
        "password",
        "confirmPassword"
      ],
      "line": 41,
      "id": "register-test;verify-that-user-should-create-account-successfully;;1"
    },
    {
      "cells": [
        "Male",
        "Jhon",
        "Wick",
        "19",
        "December",
        "2000",
        "Password123",
        "Password123"
      ],
      "line": 42,
      "id": "register-test;verify-that-user-should-create-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2817734900,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "verify that user should create account successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I select gender\"Male\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter firstname \"Jhon\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter lastname \"Wick\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select date of birth  \"19\"\"December\"\"2000\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter email \"jhonwick@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 34,
      "value": "# And I enter random email \"london1@gmail.com\""
    }
  ],
  "line": 35,
  "name": "I enter password \"Password123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter confirm password \"Password123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see registration confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 45000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1121663000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 16
    }
  ],
  "location": "RegisterStepsTest.iSelectGender(String)"
});
formatter.result({
  "duration": 161883100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jhon",
      "offset": 19
    }
  ],
  "location": "RegisterStepsTest.iEnterFirstname(String)"
});
formatter.result({
  "duration": 191702400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wick",
      "offset": 18
    }
  ],
  "location": "RegisterStepsTest.iEnterLastname(String)"
});
formatter.result({
  "duration": 150760400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19",
      "offset": 25
    },
    {
      "val": "December",
      "offset": 29
    },
    {
      "val": "2000",
      "offset": 39
    }
  ],
  "location": "RegisterStepsTest.iSelectDateOfBirth(String,String,String)"
});
formatter.result({
  "duration": 403558300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jhonwick@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepsTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 213310800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 18
    }
  ],
  "location": "LoginStepsTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 174577600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 26
    }
  ],
  "location": "RegisterStepsTest.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 203924100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 582713100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsTest.iShouldSeeRegistrationConfirmationMessage()"
});
formatter.result({
  "duration": 20089654100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".result\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027HIREN\u0027, ip: \u0027192.168.0.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9dc3b3cd0f36857d5bcbf5555c8d7c6d, findElement {using\u003dcss selector, value\u003d.result}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\shiva\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55518}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55518/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9dc3b3cd0f36857d5bcbf5555c8d7c6d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.getTextFromElement(Utility.java:61)\r\n\tat com.nopcommerce.demo.pages.RegisterPage.getYourRegCompletedText(RegisterPage.java:144)\r\n\tat com.nopcommerce.demo.steps.RegisterStepsTest.iShouldSeeRegistrationConfirmationMessage(RegisterStepsTest.java:73)\r\n\tat ✽.Then I should see registration confirmation message(RegisterTest.feature:38)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 272246200,
  "status": "passed"
});
});