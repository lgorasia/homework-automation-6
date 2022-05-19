Feature: As user I want to create a account on automation website
@smoke
  Scenario: Verify that user should create account successfully
    Given I am on homepage
    When I click on Sign In link
    And I Enter email address to create account
    And I click on 'Create an account' button
    And I enter first name
    And I enter last name
    And I enter password to create account
    And I enter address
    And I enter city
    And I enter state
    And I enter zipcode
    And I enter phone number
    And I enter future refference
    And I click on 'Register' button
    Then I should see 'My Account' text displayed

