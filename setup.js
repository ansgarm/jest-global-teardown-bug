const teardown = require('./teardown');

module.exports = function setup () {
    console.log('global setup function called');

    // process.on('SIGINT', () => { doesn't work / is flaky
    //     console.log('SIGINT', process.pid);
    //     teardown();
    //     console.log('after teardown');
    //     process.exit(1);
    // });
};