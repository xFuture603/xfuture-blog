---
title: Purge away unused css or scss properties with Purgecss!
date: "2018-11-15"
cover: "./3213167532153asd.jpg"
author: Daniel Uhlmann
---

## Have you ever had unused CSS rules in your files that only make your code more confusing? In this post, I will show you how to get rid of them using Purgecss!

<p style = "line-height: 1.5;">
Some days ago a friend of mine just crawled through my git repositories and told me that I still have unused CSS rules in some files. Caused by the fact that I'm relatively lazy about such things, I decided to clean up my files with Purgecss.<br></br></p>

## I want to do this in my own files! Please explain!<br></br>

So Purgecss is a tool to remove unused CSS properties. It can be easily implemented in your daily workflow. You can use this tool in a couple of ways:<br></br>
     - CLI<br></br>
     - JavaScript API<br></br>
     - Webpack<br></br>
     - Gulp<br></br>
     - Rollup<br></br>

## Really man.. Enough „documentation like“ blah blah. Let's get your hands dirty!<br></br>

<p style = "line-height: 1.5;">
Okay, okay! Don't lose yourself. So Purgecss is a NodeJS Application, that's why you need to have NodeJS installed. Once that's done, you can use:

```
npm install purgecss -g
```
__Hint:__ with the "g" flag you can install Purgecss globally to use it in any kind of project.

So after that, go grab a project of yourself and add some unused CSS properties to it. I've already created some for you here:

```css
#test1 {
  margin: 300px;
  background-color: red;
}

.xl\:align-middle {
    vertical-align: middle;
}

.xl\:align-bottom {
    vertical-align: bottom;
}
```

Still here with me? Fine! So now you can begin to scan your files. Open your Command Prompt and type in:

```
purgecss --css style.css --content *.html
```
Purgecss now will scan your CSS file named „style.css“. In this example, we want to analyze every HTML file with Purgecss.
</p><br></br>

## Wooha! That's quite a lot of output coming back!<br></br>

<p style = "line-height: 1.5;">
I know! And because nobody like such a confusing output in a tiny CLI window, we can modify our command. First, we have to create a folder to save the outcoming results. An obvious name for this job would be "results". So go in your project folder, create the results folder and customize your command with the following:

```
purgecss --css style.css --content *.html --out result
```

Now you have your file cleaned up in your results folder. Easy as that, right?


If you want to check out the Purgecss project, I refer you to https://www.purgecss.com/.
</p><br></br>

