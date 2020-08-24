# 3 Musketeers

> RDD, CDD and TDD

![3-musketeers](https://source.unsplash.com/6I7PthWd8BI/800x600)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [🐣 Introduction](#-introduction)
- [🎯 Objectives](#-objectives)
- [👩‍💻 Just tell me what to do](#%E2%80%8D-just-tell-me-what-to-do)
- [🏃‍♀️ Steps to do](#%E2%80%8D-steps-to-do)
  - [RDD and CDD](#rdd-and-cdd)
  - [TDD](#tdd)
    - [About Jest](#about-jest)
- [🛣️ Related course](#-related-course)
- [Licence](#licence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 🐣 Introduction

Being a Good Programmer Isn't Just About Writing Code.

It's also writing documentations, comments and unit tests.

## 🎯 Objectives

1. Write the **README.md**
2. Write useful **comments**
2. Complete the **Unit Tests**

for the library [currency](./currency)

## 👩‍💻 Just tell me what to do

1. Fork the project via `github`

![fork](./fork.png)
</li>

2. Clone your forked repository project `https://github.com/YOUR_USERNAME/3-musketeers`

```sh
❯ cd /path/to/workspace
❯ git clone git@github.com:YOUR_USERNAME/3-musketeers.git
```

2. **Do things: README.md, comments and complete unit tests**

3. Commit your different modifications:


```sh
❯ cd /path/to/workspace/3-musketeers
❯ git add -A && git commit -m "docs(readme): add usage section"
❯ git push origin master
```

4. Don't forget to commit early, commit often and push often

```sh
❯ git push origin master
```

**Note**: if you catch an error about authentication, [add your ssh to your github profile](https://help.github.com/articles/connecting-to-github-with-ssh/).
If you need some helps on git commands, read [git - the simple guide](http://rogerdudler.github.io/git-guide/)

## 🏃‍♀️ Steps to do

### RDD and CDD

Understand first the library features

```sh
❯ cd /path/to/workspace/3-musketeers/currency
❯ npm install # or yarn
❯ node cli.js

# chech what's going on and printed in the console
# ...
```

1. Complete the [currency/README.md](./currency/README.md) file with a complete description of installation, usage... of the library
2. Add block commments (use [JSDoc format](https://dev.to/gmartigny/the-power-of-jsdoc-272d) for instance) for the file [currency/index.js](./currency/index.js) only

### TDD

1. Run unit tests with `npm test`
```sh
❯ npm test # or yarn test

# chech what's going on and printed in the console
# ...
```

2. Complete the unit tests (with Jest as testing framework) file [currency/index.test.js](./currency/index.test.js) to cover at least 80%

#### About [Jest](https://jestjs.io/en/)

* [Getting started](https://jestjs.io/docs/en/getting-started) with Jest
* Jest uses [matchers](https://jestjs.io/docs/en/using-matchers) to let you test values in different ways.
* When you're writing tests, you often need to check that values meet certain conditions. [expect](https://jestjs.io/docs/en/expect) gives you access to a number of `matchers` that let you validate different things.

## 🛣️ Related course

* [Course 6 - 3 Musketeers: RDD, CDD and TDD](https://github.com/92bondstreet/javascript-empire#-course-6---3-musketeers-rdd-cdd-and-tdd)

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)