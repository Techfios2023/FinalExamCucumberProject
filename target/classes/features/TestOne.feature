@Feature
Feature: Set sky blue background
  As a user
  I want to set the background color to sky blue
  So that the page looks more appealing
  
@ScenerioOne
  Scenario: Click on Set SkyBlue Background button
    Given the Set SkyBlue Background button exists
    When I click on the button
    Then the background color will change to sky blue
    
    
    
   
@OtherScenerioTwo
  Scenario: Click on Set white Background button
    Given the Set white Background button exists
    When I click on the white button
    Then the background color will change to white