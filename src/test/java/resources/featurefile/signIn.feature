Feature: As user I want to signIn to automation website
@smoke
  Scenario:User should navigate to signIn page successFully
    Given I am on homepage
    When I click on Sign In link
    Then I should see 'AUTHENTICATION' message is displayed
@sanity
  Scenario Outline: : Verify the error message with inValid credentials
    Given I am on homepage
    When I click on Sign In link
    And I enter username "<username>"
    And I enter password "<password>"
    And I click on Sign in Button
    Then I shold see error "<message>"

    Examples:
      | username       | password | message                    |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |

  Scenario: Verify that user should logIn successfully with valid credentials
    Given I am on homepage
    When I click on Sign In link
    And I enter username "5ljpatel@yahoo.com"
    And I enter password "12345678"
    And I click on Sign in Button
    Then I should see 'Sign out' link is displayed

  Scenario: Verify that user should logOut successfully()
    Given I am on homepage
    When I click on Sign In link
    And I enter username "5ljpatel@yahoo.com"
    And I enter password "12345678"
    And I click on Sign in Button
    And I click on Sign out Button
    Then I should see 'Sign In' Link displayed

