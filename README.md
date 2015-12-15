# Pure Javascript Github User Search

## Installation

In your terminal do the following

```bash
$ https://github.com/giusepped/JuniorFrontendTest
$ cd JuniorFrontendTest
$ python -m SimpleHTTPServer 1337
```

Visit http://localhost:1337/

## Approach

* For the script file `index.js` I used pure raw javascript in order to get the elements from the DOM that I needed to get information from or that I had to manipulate.
* I tried to have my functions as modularised as possible in order for the code to be readable and maintainable.
* I have a function `ajaxRequest(url)` that returns a promise because, in order to get information about both the user and their repos, two consecutive ajax calls to the API have to be made: the first one to get the user details and the second one to get the repos information.
* Once I get back the data, I have other functions that process the information and populates the page. For the user, there is already a skeleton on the html page. For the repos, the tables rows gets created and populated and appended to a fragment, which in turn gets appended to the table body.
* I also added the functionality that the text field clears itself after searching.
* I used bootstrap in order to mockup a design as close as possible to the given one (see screenshots below).
* I wanted to make a version using JQuery but didn't have enough time, will probably do that in the future.
* Also, in the function `starsAndForks` I am using some html which is not best practice but again, because of time constraints.




## SCREENSHOTS OF MY APP

#### First Screen

The user can search a username of GitHub

![](https://github.com/giusepped/JuniorFrontendTest/blob/master/images/First-Screen.png)

#### Success Screen

If the searched username does exist: The searched user profile is displayed with all his repositories

![](https://github.com/giusepped/JuniorFrontendTest/blob/master/images/Success-screen.png)

#### Error Screen

If the searched username does not exist: An error is shown

![](https://github.com/giusepped/JuniorFrontendTest/blob/master/images/Error-screen.png)




