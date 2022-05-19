$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signIn.feature");
formatter.feature({
  "line": 1,
  "name": "As user I want to signIn to automation website",
  "description": "",
  "id": "as-user-i-want-to-signin-to-automation-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": ": Verify the error message with inValid credentials",
  "description": "",
  "id": "as-user-i-want-to-signin-to-automation-website;:-verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I shold see error \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "as-user-i-want-to-signin-to-automation-website;:-verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 17,
      "id": "as-user-i-want-to-signin-to-automation-website;:-verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 18,
      "id": "as-user-i-want-to-signin-to-automation-website;:-verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 19,
      "id": "as-user-i-want-to-signin-to-automation-website;:-verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 20,
      "id": "as-user-i-want-to-signin-to-automation-website;:-verify-the-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 21,
      "id": "as-user-i-want-to-signin-to-automation-website;:-verify-the-error-message-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14018356000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": ": Verify the error message with inValid credentials",
  "description": "",
  "id": "as-user-i-want-to-signin-to-automation-website;:-verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I shold see error \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 330520700,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1791339500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 218433700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 347491300,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 17025021500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 19
    }
  ],
  "location": "SignPageTest.iSholdSeeError(String)"
});
formatter.result({
  "duration": 12200032800,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-CKALQP5\u0027, ip: \u0027192.168.1.177\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9400456efe31a90e123af19451ce9942, findElement {using\u003dcss selector, value\u003dbody.authentication.hide-left-column.hide-right-column.lang_en:nth-child(2) div.columns-container div.container div.row:nth-child(3) div.center_column.col-xs-12.col-sm-12 div.alert.alert-danger ol:nth-child(2) \u003e li:nth-child(1)}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ThinkPad\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:60576}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60576/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9400456efe31a90e123af19451ce9942\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.toString(Unknown Source)\r\n\tat com.automation.pages.SignInPage.errormessage(SignInPage.java:36)\r\n\tat com.automation.steps.SignPageTest.iSholdSeeError(SignPageTest.java:55)\r\n\tat ✽.Then I shold see error \"An email address required.\"(signIn.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 12201400500,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-CKALQP5\u0027, ip: \u0027192.168.1.177\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9400456efe31a90e123af19451ce9942, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ThinkPad\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:60576}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60576/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9400456efe31a90e123af19451ce9942\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.automation.utility.Utility.getScreenshot(Utility.java:336)\r\n\tat com.automation.Hooks.tearDown(Hooks.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 6440301300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": ": Verify the error message with inValid credentials",
  "description": "",
  "id": "as-user-i-want-to-signin-to-automation-website;:-verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I shold see error \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 46800,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1918176100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 435518900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 231725100,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 23380399000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 19
    }
  ],
  "location": "SignPageTest.iSholdSeeError(String)"
});
formatter.result({
  "duration": 86995100,
  "status": "passed"
});
formatter.after({
  "duration": 1570017600,
  "status": "passed"
});
formatter.before({
  "duration": 5879123100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": ": Verify the error message with inValid credentials",
  "description": "",
  "id": "as-user-i-want-to-signin-to-automation-website;:-verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I shold see error \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 46800,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 6976527800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 397067000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 380923900,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 26162019100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 19
    }
  ],
  "location": "SignPageTest.iSholdSeeError(String)"
});
formatter.result({
  "duration": 74047900,
  "status": "passed"
});
formatter.after({
  "duration": 1039699900,
  "status": "passed"
});
formatter.before({
  "duration": 6017923100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": ": Verify the error message with inValid credentials",
  "description": "",
  "id": "as-user-i-want-to-signin-to-automation-website;:-verify-the-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I shold see error \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 52200,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1870239800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 273032500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 254135300,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 20995479800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 19
    }
  ],
  "location": "SignPageTest.iSholdSeeError(String)"
});
formatter.result({
  "duration": 58658300,
  "status": "passed"
});
formatter.after({
  "duration": 987451400,
  "status": "passed"
});
formatter.uri("womencategory.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to add the product in basket on authomation website",
  "description": "",
  "id": "as-a-user-i-want-to-add-the-product-in-basket-on-authomation-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "as-a-user-i-want-to-add-the-product-in-basket-on-authomation-website;verify-user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on WOMEN",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on the product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I shoud see popup message \u0027Product successfully added to your shopping cart\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on X button to close the popup",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-to-add-the-product-in-basket-on-authomation-website;verify-user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 21,
      "id": "as-a-user-i-want-to-add-the-product-in-basket-on-authomation-website;verify-user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 22,
      "id": "as-a-user-i-want-to-add-the-product-in-basket-on-authomation-website;verify-user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 23,
      "id": "as-a-user-i-want-to-add-the-product-in-basket-on-authomation-website;verify-user-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 24,
      "id": "as-a-user-i-want-to-add-the-product-in-basket-on-authomation-website;verify-user-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress",
        "2",
        "M",
        "Blue"
      ],
      "line": 25,
      "id": "as-a-user-i-want-to-add-the-product-in-basket-on-authomation-website;verify-user-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8303522800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "as-a-user-i-want-to-add-the-product-in-basket-on-authomation-website;verify-user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on WOMEN",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on the product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I shoud see popup message \u0027Product successfully added to your shopping cart\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on X button to close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 38800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnWOMEN()"
});
formatter.result({
  "duration": 3258994900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 24
    }
  ],
  "location": "WomenCategory.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 22491745300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategory.iChangeQuantity(String)"
});
formatter.result({
  "duration": 216526100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategory.iSelectSize(String)"
});
formatter.result({
  "duration": 166219300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 17
    }
  ],
  "location": "WomenCategory.iSelectColour(String)"
});
formatter.result({
  "duration": 174751500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 249338600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iShoudSeePopupMessageProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 135115500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnXButtonToCloseThePopup()"
});
formatter.result({
  "duration": 1104969900,
  "status": "passed"
});
formatter.after({
  "duration": 1167516900,
  "status": "passed"
});
formatter.before({
  "duration": 7908307000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "as-a-user-i-want-to-add-the-product-in-basket-on-authomation-website;verify-user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on WOMEN",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on the product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I shoud see popup message \u0027Product successfully added to your shopping cart\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on X button to close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 42500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnWOMEN()"
});
formatter.result({
  "duration": 7362574100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 24
    }
  ],
  "location": "WomenCategory.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 22349246300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "WomenCategory.iChangeQuantity(String)"
});
formatter.result({
  "duration": 173740100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "WomenCategory.iSelectSize(String)"
});
formatter.result({
  "duration": 191779100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 17
    }
  ],
  "location": "WomenCategory.iSelectColour(String)"
});
formatter.result({
  "duration": 166682300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 234086000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iShoudSeePopupMessageProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 76259800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnXButtonToCloseThePopup()"
});
formatter.result({
  "duration": 1998475800,
  "status": "passed"
});
formatter.after({
  "duration": 1068149200,
  "status": "passed"
});
formatter.before({
  "duration": 11513340200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "as-a-user-i-want-to-add-the-product-in-basket-on-authomation-website;verify-user-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on WOMEN",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on the product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I shoud see popup message \u0027Product successfully added to your shopping cart\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on X button to close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 266400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnWOMEN()"
});
formatter.result({
  "duration": 6891088900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 24
    }
  ],
  "location": "WomenCategory.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 21959062400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "WomenCategory.iChangeQuantity(String)"
});
formatter.result({
  "duration": 184424600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 15
    }
  ],
  "location": "WomenCategory.iSelectSize(String)"
});
formatter.result({
  "duration": 158168100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 17
    }
  ],
  "location": "WomenCategory.iSelectColour(String)"
});
formatter.result({
  "duration": 155817800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 281537500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iShoudSeePopupMessageProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 87593400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnXButtonToCloseThePopup()"
});
formatter.result({
  "duration": 613260000,
  "status": "passed"
});
formatter.after({
  "duration": 1212188500,
  "status": "passed"
});
formatter.before({
  "duration": 11261087700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "as-a-user-i-want-to-add-the-product-in-basket-on-authomation-website;verify-user-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on WOMEN",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on the product \"Printed Summer Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I shoud see popup message \u0027Product successfully added to your shopping cart\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on X button to close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 39500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnWOMEN()"
});
formatter.result({
  "duration": 2327118000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress",
      "offset": 24
    }
  ],
  "location": "WomenCategory.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 22161071700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategory.iChangeQuantity(String)"
});
formatter.result({
  "duration": 225073700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategory.iSelectSize(String)"
});
formatter.result({
  "duration": 183373900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 17
    }
  ],
  "location": "WomenCategory.iSelectColour(String)"
});
formatter.result({
  "duration": 149380900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 134717000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iShoudSeePopupMessageProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 174974300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.iClickOnXButtonToCloseThePopup()"
});
formatter.result({
  "duration": 711151700,
  "status": "passed"
});
formatter.after({
  "duration": 890155600,
  "status": "passed"
});
});