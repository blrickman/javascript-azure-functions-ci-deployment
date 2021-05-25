const httpFunction = require('./index');
const context = require('../testing/defaultContext')

test('Http trigger should return query name text', async () => {

    const request = {
        query: { name: 'Bill' }
    };

    await httpFunction(context, request);

    expect(context.log.mock.calls.length).toBe(1);
    expect(context.res.status).toEqual(200);
    expect(context.res.body).toEqual('Hello Bill');
});
test('Http trigger should return body name text', async () => {

    const request = {
        body: { name: 'Bob' }
    };

    await httpFunction(context, request);

    expect(context.log.mock.calls.length).toBe(1);
    expect(context.res.status).toEqual(200);
    expect(context.res.body).toEqual('Hello Bob');
});
test('Http trigger should fail when missing input', async () => {

    const request = {
        query: { person: 'Bill' }
    };

    await httpFunction(context, request);

    expect(context.log.mock.calls.length).toBe(1);
    expect(context.res.status).toEqual(200);
    //expect(context.res.body).toEqual('Please pass a name on the query string or in the request body');
});