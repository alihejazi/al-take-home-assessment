# Overview of solution:
I have added a dropdown selector on the website to allow the user to select the user to whom the product should be added. The reason I chose this approach is because the README specifically mentions NOT to create an authentication service, though that would generally the best approach. I was going to ship with that but decided against it to follow the specs, though I do know that the current solution is not considered secure.

Regardless, I think I've developed a neat solution. Essentially, the front end now passes the username in the payload to the backend too. Also, the frontend does data validation before sending the payload to the backend. For added security, the backend also does its own tests and responds accordingly.

Tests have been added to ensure the solution is stable.