# Team ULaval 2022 Wiki

This is the iGEM repository of team ULaval for the edition of 2022. Find the original repo here: 
[https://gitlab.igem.org/2022/ulaval](https://gitlab.igem.org/2022/ulaval)

Images, photos, icons and fonts are stored on `static.igem.wiki` using [uploads.igem.org](https://uploads.igem.org), and Videos are embedded from [iGEM Video Universe](https://video.igem.org).


## Getting started

To get started:
```
$ git clone https://example.com
$ cd ../path/to/the/project
$ npm install
$ npm start
```

## About this Template

The initial Flask template has been modified to use React instead. The file ```setup.py``` creates the many directories and the initial template depending on the page names provided (see line 4).

### Files

    |__ public/             -> holds the HTML template of our app
    |__ src/               - > main directory for the pages and components
        |__ common/         -> enums, constants and common components used throughout all pages
        |__ pages/          -> holds the code for each page
        |__ utils/          -> well.. utils
        |__ App.css         -> base/common styles
        |__ App.tsx         -> holds the header and router
        |__ index.tsx       -> links the app the root element
    |__ .gitignore          -> tells GitLab which files/directories should not be uploaded to the repository
    |__ .gitlab-ci.yml      -> automated flow for building, testing and deploying the website
    |__ LICENSE             -> License CC-by-4.0 - DO NOT MODIFY
    |__ README.md           -> this text :)
    |__ setup.py            -> initial file to run to create directories

### Technologies

  * [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)
  * [Python](https://www.python.org): Programming language
  * [React](https://reactjs.org/): JavaScript framework

### Join us

Have questions? Join the developper @jbey078@gmail.com or on discord at job7#9774
