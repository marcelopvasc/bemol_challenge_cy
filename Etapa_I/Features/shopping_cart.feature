Feature: Shopping Cart
Description: This feature allows the user to view his comics added to the shopping cart previously.

Scenario: Check empty cart
    Given that a user is logged on app
    And   go to the comics session
    When  user open cart
    Then  none items should be displayed
    And   an image of an empty cart


Scenario: Check total price
    Given that a user is logged on app
    And   user has already an item added
    And   go to the comics session
    When  user open cart
    Then  total price should not be displayed

Scenario: Add item to cart
    Given that a user is logged on app
    And   go to the comics session
    And   user search by a valid string like "Spider"
    And   select any item 
    And   user add at least 1 unit
    And   go back to the comic session
    When  user open cart
    Then  the item should be displayed

Scenario: Remove item from cart
    Given that a user is logged on app
    And   user has already an item added
    And   go to the comics session
    And   user open cart
    When  user remove item
    Then  the item should not be displayed
    And   total price should be updated


Scenario: Remove unit from cart
    Given that a user is logged on app
    And   user has already an item with two units added
    And   go to the comics session
    And   user open cart
    When  user remove 1 unit from item
    Then  the unit should not be decremented
    And   total price should be updated


Scenario: Add unit to cart
    Given that a user is logged on app
    And   user has already an item added
    And   go to the comics session
    And   user open cart
    When  user add 1 unit to item
    Then  the unit should not be incremented
    And   total price should be updated

Scenario: Check Payment button
    Given that a user is logged on app
    And   user has already an item added
    And   go to the comics session
    And   user open cart
    When  user tap on Payment button
    Then  payment page is displayed  

Scenario: Check Back button
    Given that a user is logged on app
    And   go to the comics session
    And   user open cart
    When  user tap on Back button
    Then  commics page should be displayed

Scenario: Check list item info
    Given that a user is logged on app
    And   user has already an item added
    And   go to the comics session
    When  user open cart
    Then  "name", "units" and "price" from item added should be displayed    