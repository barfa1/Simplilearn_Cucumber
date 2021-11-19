@LoginFeature
Feature: Login feature

  Background: Open the login page
    Given User has navigated on login page

  @Regression @Sanity 
  Scenario: Positive login Scenario
    When user enter correct username and password
    And User clicks on login button
    Then user should be navigated to the Homepage

  @Regression
  Scenario Outline: Positive Login Scenario with parameters
    When user enter correct username "Asc@gmail.com" and password "Adsfg1@Reahj"
    And User clicks on login button
    Then user should be navigated to the Homepage

  Scenario Outline: Positive Login Scenario
    When user enter correct username "<Username>" and password "<Password>"
    And User clicks on login button
    Then user should be navigated to the Homepage

    Examples: 
      | Username       | Password   |
      | Asc@gmail.com  | Aytr1@edhj |
      | edfa@gmail.com | Ayg133@dhj |

  Scenario Outline: Negative Login Scenario
    When user enter correct username "<Username>" and password "<Password>"
    And User clicks on login button
    Then user should be get message "<Error>"

    Examples: 
      | Username       | Password   | Error                                              |
      | Asc@gmail.com  | Aytr1@edhj | The email or password you have entered is invalid. |
      | edfa@gmail.com | Ayg133@dhj | The email or password you have entered is invalid. |

  @DataTable
  Scenario Outline: Positive Login Scenario with parameters
    When user enter correct  credentials
      | Field    | Value       |
      | Username | Xyz@abc.com |
      | Password | Abcd@1233   |
    And User clicks on login button
    Then user should be navigated to the Homepage
