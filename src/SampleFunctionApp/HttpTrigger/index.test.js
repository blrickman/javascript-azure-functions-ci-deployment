const httpFunction = require('./index');
const context = require('../testing/defaultContext')

test('Http trigger should return query name text', async () => {

    const request = {
        query: { name: 'Bill' }
    };

    await httpFunction(context, request);

    expect(context.res.body).toEqual('Hello Bill');
    expect(context.res.status).toEqual(200);
});
test('Http trigger should return body name text', async () => {

    const request = {
        body: { name: 'Bob' }
    };

    await httpFunction(context, request);

    expect(context.res.body).toEqual('Hello Bob');
    expect(context.res.status).toEqual(200);

});
test('Http trigger should fail when missing input', async () => {

    const request = {
        query: { person: 'Bill' }
    };

    await httpFunction(context, request);

    expect(context.res.status).toEqual(400);
});