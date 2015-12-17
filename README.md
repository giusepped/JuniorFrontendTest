# Javascript/JQuery Github User Search

## Installation

In your terminal type the following:

```bash
$ git clone -b jquery-branch https://github.com/giusepped/JuniorFrontendTest
$ cd JuniorFrontendTest
$ python -m SimpleHTTPServer 1337
```

Visit http://localhost:1337/

## Testing

* I tried to separate the app logic as much as I could so that I could unit test it properly. Here I check that the user data and the repos data are formatted correctly and stored as attributes of the Search Object (check `spec/SearchSpec.js`).
* I also made feature tests to check what happens when the app is actually used. I had to mock the ajax request in both the cases of error and success in order to feature test properly. In the feature tests, I check that the ajax call gets done at the correct times and that the correct divs are either visible or hidden when they are expected to (check `spec/featureSpec.js`).

In order to view both unit tests and feature tests, type the following:

```bash
$ open SpecRunner.html
```

N.B.: If your defautl browser is Chrome, it might not load jasmine fixtures properly because of a security setting ( https://github.com/velesin/jasmine-jquery/issues/4 ). In this case, I suggest to just open the file with Firefox as there aren't any issues there.

## Approach

* The objective of this branch is to abstract and separate the logic from the DOM so that unit testing with Jasmine is easier and the code is more solid and readable.
* Also, where the logic is still in pure javascript, the event and DOM handling is done through JQuery this time since it is included for Bootstrap anyway.


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




