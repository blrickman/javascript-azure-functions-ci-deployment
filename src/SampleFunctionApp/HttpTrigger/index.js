module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if ((req.query && req.query.name) || (req.body && req.body.name)) {
        let name = (req.query && req.query.name) ? req.query.name : req.body.name;

        context.res = {
            status: 200, 
            body: "Hello " + name
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};