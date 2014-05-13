Feature: Search for an address
 
As a student user
So I can take a bus to my destination
I want to get the closest bus stop possible to my destination 


Scenario: User enters an address
	Given I am on the sa-project home page
	When I fill in "gmaps_input_address" with "binghamton university"
	And I press search
	Then I should see "binghamton university"
	
