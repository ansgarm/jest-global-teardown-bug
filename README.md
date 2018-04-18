# jest teardown example

Minimal example to show that the `globalTeardown` script doesn't get called when the test is cancelled via `crtl + c`.  

## Steps to reproduce
1. `yarn install`
2. `yarn test`
3. cancel with `ctrl + c` before the test finishes (you've 5 seconds)
4. the teardown script doesn't get executed. It will if you don't cancel the test and let it finish.
