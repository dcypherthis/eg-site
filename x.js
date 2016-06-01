console.log('TRAVIS', process.env.TRAVIS);
console.log('TRAVIS_PULL_REQUEST', process.env.TRAVIS_PULL_REQUEST);
if (process.env.TRAVIS_PULL_REQUEST) {
  process.env.TRAVIS_PULL_REQUEST && console.log('Pull request');
  return ['PhantomJS'];
} else {
  return ['SL_chrome', 'SL_firefox'];
}
