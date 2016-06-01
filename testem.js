/* jshint node:true */
/* eslint-disable */

var launchInCI = function() {
  console.log('TRAVIS', process.env.TRAVIS);
  console.log('TRAVIS_PULL_REQUEST', process.env.TRAVIS_PULL_REQUEST);
  if (!process.env.TRAVIS || process.env.TRAVIS_PULL_REQUEST) {
    process.env.TRAVIS_PULL_REQUEST && console.log('Pull request');
    return ['PhantomJS'];
  } else {
    return ['SL_chrome', 'SL_firefox'];
  }
};


module.exports = {
  "framework": "qunit",
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "launch_in_ci": launchInCI(),
  "launch_in_dev": [
    "PhantomJS",
    "Chrome"
  ],
  "launchers": {
    "SL_chrome": {
      "exe": "./node_modules/.bin/ember-cli-sauce",
      "args": [
        "-b",
        "chrome",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
    "SL_firefox": {
      "exe": "./node_modules/.bin/ember-cli-sauce",
      "args": [
        "-b",
        "firefox",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
    "SL_safari": {
      "exe": "./node_modules/.bin/ember-cli-sauce",
      "args": [
        "-b",
        "safari",
        "-p",
        "Mac 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    }
  }
};
