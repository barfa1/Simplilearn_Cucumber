$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.background({
  "name": "Open the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has navigated on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive login Scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "user enter correct username and password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enter_correct_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_navigated_to_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Positive Login Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter correct username \"\u003cUsername\u003e\" and password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should be navigated to the Homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "Asc@gmail.com",
        "Aytr1@edhj"
      ]
    },
    {
      "cells": [
        "edfa@gmail.com",
        "Ayg133@dhj"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has navigated on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Login Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "name": "user enter correct username \"Asc@gmail.com\" and password \"Aytr1@edhj\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enter_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_navigated_to_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has navigated on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Login Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "name": "user enter correct username \"edfa@gmail.com\" and password \"Ayg133@dhj\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enter_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_navigated_to_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Negative Login Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter correct username \"\u003cUsername\u003e\" and password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should be get message \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "Asc@gmail.com",
        "Aytr1@edhj",
        "The email or password you have entered is invalid."
      ]
    },
    {
      "cells": [
        "edfa@gmail.com",
        "Ayg133@dhj",
        "The email or password you have entered is invalid."
      ]
    }
  ]
});
formatter.background({
  "name": "Open the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has navigated on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative Login Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "name": "user enter correct username \"Asc@gmail.com\" and password \"Aytr1@edhj\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enter_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be get message \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_get_message_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has navigated on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_navigated_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative Login Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "name": "user enter correct username \"edfa@gmail.com\" and password \"Ayg133@dhj\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enter_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be get message \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_get_message_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});