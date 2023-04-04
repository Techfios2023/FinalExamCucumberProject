$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/TestOne.feature");
formatter.feature({
  "name": "Set sky blue background",
  "description": "  As a user\n  I want to set the background color to sky blue\n  So that the page looks more appealing",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature"
    }
  ]
});
formatter.scenario({
  "name": "Click on Set SkyBlue Background button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature"
    },
    {
      "name": "@ScenerioOne"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the Set SkyBlue Background button exists",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Steps_Defination_For_Test_One.userIsOnDashboardPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Steps_Defination_For_Test_One.userClicksOnSkyBlueBackgroundButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Steps_Defination_For_Test_One.userShouldBeAbleToSeeBlueBackGroundColor()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-ORFPBU2\u0027, ip: \u0027192.168.113.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:438)\r\n\tat steps.StepsDefination_For_Test_Two.teardown(StepsDefination_For_Test_Two.java:51)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Click on Set white Background button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature"
    },
    {
      "name": "@OtherScenerioTwo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the Set white Background button exists",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.StepsDefination_For_Test_Two.userIsOnDashboardPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the white button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.StepsDefination_For_Test_Two.userClicksOnWhitegroundButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@onclick\u003d\u0027myFunctionWhite()\u0027]\"}\n  (Session info: chrome\u003d111.0.5563.111)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-ORFPBU2\u0027, ip: \u0027192.168.113.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 111.0.5563.111, chrome: {chromedriverVersion: 111.0.5563.64 (c710e93d5b63..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:60688}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 47687eb59cb1d5beed2c71d2a2d1aba9\n*** Element info: {Using\u003dxpath, value\u003d//button[@onclick\u003d\u0027myFunctionWhite()\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat pages.MainPage.userClicksOnWhiteBackgroundButton(MainPage.java:40)\r\n\tat steps.StepsDefination_For_Test_Two.userClicksOnWhitegroundButton(StepsDefination_For_Test_Two.java:35)\r\n\tat ✽.I click on the white button(classpath:features/TestOne.feature:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.StepsDefination_For_Test_Two.userShouldBeAbleToSeeWhiteBackGroundColor()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-ORFPBU2\u0027, ip: \u0027192.168.113.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:438)\r\n\tat steps.StepsDefination_For_Test_Two.teardown(StepsDefination_For_Test_Two.java:51)\r\n",
  "status": "failed"
});
});