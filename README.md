# Welcome
This is a manual on how to use the template-website of Johanna England for people working at DIMA at TU Berlin.
This template uses Github-Pages for hosting the resulting website.

##Step 1: Creating the website/repository
First you need an account for Github. If you don't already have one, create one at (https://github.com/). If that is done, go to (https://github.com/new) and create a repository with the name "*username*.github.io", where *username* is your username on Github, it won't work if the repository is called differently.

##Step 2: Uploading/Copying the files
Now you need to copy all files from (https://github.com/johannaengland/johannaengland.github.io), this website, to your repository. Now, if you go to (https://*username*.github.io) it should give you a website with the template elements.

##Step 3: Edit the template to your needs
###Step 3.1: Mail and Github link
First you need to go to the file "_config.yml" in the root of your repository and change the entries of *email* to your mail-address and *github* to the link of your Github account (or a special repository you want people to go to). These entries will be the entries of the footer of every site links to send you a mail and to your Github.

###Step 3.2: Fill the landing page
Go to the file "index.md" in the root of your repository and change the entry of *title* to what you want the title of your landing page to be, likely your name. Then change *Student assistant at [DIMA Group](http://www.dima.tu-berlin.de), [TU Berlin](http://www.tu-berlin.de)* to the content you want to have on your landing page using markdown. Don't change anything else in that file.

##Step 4: Collections
###Step 4.1: News
To add all of your news you need to go to the folder "_news" (don't forget the underscore) and go to the file "index.md". Now enter your news in descending order regarding the date. Enter the news in the format _ * date: message_, enter all of your news, which should all be shown on the landing page above the comment *more* and other news below it.
To keep your news updated you only need to change this file and add new news at the top and move the ones, which shouldn't be shown on the landing page below the comment.

###Step 4.2: Teaching

###Step 4.3: Projects

###Step 4.4: Publications


##Overview
### Folders/Files, you could/should change
* _config.yml       +
* index.md          +
* _news/index.md    +
* _projects/*
* _publications/*
* _teaching/*
* downloads/*
* slides/*


### Folders, where you shouldn't change anything
* _layouts/*
* css/*
* icons/*
* js/*
* news/
* projects/*
* publications/*
* teaching/*
