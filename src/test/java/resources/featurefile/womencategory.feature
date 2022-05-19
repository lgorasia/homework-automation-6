Feature: As a user I want to add the product in basket on authomation website

@smoke
  Scenario: Verify user should navigate to women category page successfully()
    When I am on homepage
    And I click on WOMEN
    Then I should see 'WOMWN' text
@sanity
  Scenario Outline: Verify user should add product to the cart successfully
    Given I am on homepage
    When I click on WOMEN
    And I click on the product "<product>"
    And I change quantity "<qty>"
    And I select size "<size>"
    And I select colour "<colour>"
    And I click on Add To Cart Button
    Then I shoud see popup message 'Product successfully added to your shopping cart'
    And I click on X button to close the popup

    Examples:
      | product               | qty | size | colour |
      | Blouse                | 2   | M    | White  |
      | Printed Dress         | 3   | L    | Orange |
      | Printed Chiffon Dress | 4   | S    | Green  |
      | Printed Summer Dress  | 2   | M    | Blue   |

