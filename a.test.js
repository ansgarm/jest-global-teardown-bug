describe('Sample', () => {
    jest.setTimeout(10000);

    test('should wait a bit', done => {
        console.log('waiting a bit in testcase..');
        setTimeout(done, 2000);
    });
});
