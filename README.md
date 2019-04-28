# Welcome
This is a manual on how to use the template-website of Johanna England for people working at DIMA at TU Berlin.
This template uses Github-Pages for hosting the resulting website.
You can shape some pages of this template using markdown, a cheatsheet can be found here (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). 

## Step 1: Creating the website/repository
First you need an account for Github. If you don't already have one, create one at (https://github.com/). If that is done, go to (https://github.com/new) and create a repository with the name "*username*.github.io", where *username* is your username on Github, it won't work if the repository is called differently.

## Step 2: Uploading/Copying the files
Now you need to copy all files from (https://github.com/johannaengland/johannaengland.github.io), this website, to your repository. Now, if you go to (https://*username*.github.io) it should give you a website with the template elements.

## Step 3: Edit the template to your needs
### Step 3.1: Mail and Github link
First you need to go to the file "_config.yml" in the root of your repository and change the entries of *email* to your mail-address and *github* to the link of your Github account (or a special repository you want people to go to). These entries will be the entries of the footer of every site links to send you a mail and to your Github.

### Step 3.2: Fill the landing page
Go to the file "index.md" in the root of your repository and change the entry of *title* to what you want the title of your landing page to be, likely your name. Then change *Student assistant at [DIMA Group](http://www.dima.tu-berlin.de), [TU Berlin](http://www.tu-berlin.de)* to the content you want to have on your landing page using markdown. Don't change anything else in that file.

## Step 4: Collections
### Step 4.1: News
To add all of your news you need to go to the folder "_news" (don't forget the underscore) and go to the file "index.md". 
Now enter your news in descending order regarding the date. 
Enter the news in the format _* date: message_, enter all of your news, which should all be shown on the landing page above the comment *more* and other news below it.
To keep your news updated you only need to change this file and add new news at the top and move the ones, which shouldn't be shown on the landing page below the comment.

### Step 4.2: Teaching
Go to the folder "_teaching". There you should add one file per semester, naming them in the format "year-month-day".
These files should all follow the structure, which is given in the example files. Change the *title* to the name of the semester and the *courses* to the courses you have functions in that semester. The courses will be shown on the landing page and on the teaching page. 
More detailed information about that semester you can write in the file using markdown, that will be shown on the page for the semester.

### Step 4.3: Publications
This is the most complicated part. Publications contain of the main file, the download-files and the slides. They are named in the format *year-title* and they can't contain spaces. 
First we start with the download-files: Go to the folder "downloads" and make a new folder with the name. Add into that folder the publication as a pdf, called *publication.pdf*, the slides as a powerpoint, called *slides.pptx* and the bibtex file, called *bibtex.bib*.
Now go to the folder "slides" and make a new folder with the name. You can get the slides of the powerpoint file as pictures when you go to *File*, then *Save as*, then choose either *.jpg* or *.png* as the filetype and the slides will be exported into one folder numbered from 1 ascending. These slides as images should be uploaded to the folder inside of the folder "slides".
Finally go to "_publications", where the main file needs to reside. Follow the structure of the example-publication, which is given. The file also needs to have the same name as the two folders, which you had to create before. Change the field *title* to the title of the publication, *author* to the author(s), *booktitle* to the title of the book the publication is published in, *pages* to on what pages the publication is on, *year* to the year the publication was published and *abstract* to the abstract of the publication. The last two fields refer to how the slides as images are named: *nameOfSlides* should say, what the prefix of the file-name before the number is and *fileEnding* should say, what file extension it is, e.g. if my slides are called "slide1.jpg", "slide2.jpg",... *nameOfSlides* should be "slide" and *fileEnding* should be ".jpg" (don't forget the dot and pay attention to case sensitivity).
After repeating that for all publications there should be a functioning page for every publication.

### Step 4.4: Projects
Go to the folder "_projects". For every project you are a part of you should do one file following the given structure. 
Change *title* to the title of the project, *publications* should be a list of the publications, which are tied to the project. The list needs to be framed with square brackets and the titles of the publications need to be seperated with a comma. The titles of the publications need to be the name of the file to that publication without the ending *.md*.  
If that project is still ongoing the entry *current* needs to be true, otherwise it needs to be false.
Below the lines you can again write everything else about the project using markdown. 

## Overview
### Folders/Files, you could/should change
* _config.yml
* index.md
* _news/index.md
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

## Other
If you have any questions or need help don't refrain from sending me an email at (england@campus.tu-berlin.de).
