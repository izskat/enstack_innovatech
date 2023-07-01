const mongoose = require('mongoose');
const url = 'mongodb+srv://innovatech:jRb1O2GRJSxDme3N@innovatech.6cdiwky.mongodb.net/?retryWrites=true&w=majority'

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
}

const database = {

    connect: function (){
        mongoose.connect(url, options, function(error){
        if (error) throw error;
        console.log ('Connected to: ' + url);
        });
    },

    insertOne: function(model, doc, callback){
        model.create(doc, function(error, result){
        if (error) throw error;
        console.log(' ----- Insert one ');
        console.log('Added: ' + result);
        console.log('----------');
        return callback(true);
        });
    },

    insertMany: function(model, docs, callback){
        model.insertMany(docs, function(error, result){
        if (error) throw error;
        console.log('======== Insert Many');
        console.log('Added:' + result);
        consolge.log('=========');
        return callback(true);
        });
    },

    findOne: function(model, query, projection, callback) {
        model.findOne(query, projection, function(error, result) {
            if(error) throw error;
            console.log('++++++++ FindOne');
            console.log('query:'); console.log(query);
            console.log('Found This: ');
            console.log(result);
            console.log('+++++++++++++');
            return callback(result);
        });
    },

    findMany: function(model, query, sort, projection, limit, callback) {
        model.find(query, projection, function(error, result) {
            if(error) throw error;
            console.log('***************** findMany');
            console.log("Found: " + result.length);
            console.log('query:'); console.log(query);
            console.log('sort:'); console.log(sort);
            console.log('limit:'); console.log(limit);
            console.log("Found, Sorted & Limited: " + result.length);
            console.log(result);
            console.log('****************');
        }).sort(sort).limit(limit).exec(function(err, result){
            if(err) throw err;
            return callback(result);
        });
    },

    updateOne: function(model, filter, update) {
        model.updateOne(filter, update, function(error, result) {
            if(error) throw error;
            console.log('/////////////// updateOne');
            console.log('filter:'); console.log(filter);
            console.log('update:'); console.log(update);
            console.log('Document modified: ' + result.nModified);
            console.log('////////////////');
        });
    },

    updateMany: function(model, filter, update) {
        model.updateMany(filter, update, function(error, result) {
            if(error) throw error;
            console.log('^^^^^^^^^^ updateMany');
            console.log('filter:'); console.log(filter);
            console.log('update:'); console.log(update);
            console.log('Documents modified: ' + result.nModified);
            console.log('^^^^^^^^^^^^^^^');
        });
    },

    deleteOne: function(model, conditions) {
        model.deleteOne(conditions, function (error, result) {
            if(error) throw error;
            console.log('$$$$$$$$$$$$$$$$ deleteOne');
            console.log('conditions:'); console.log(conditions);
            console.log('Document deleted: ' + result.deletedCount);
            console.log('$$$$$$$$$$$$$$$$');
        });
    },

    deleteMany: function(model, conditions) {
        model.deleteMany(conditions, function (error, result) {
            if(error) throw error;
            console.log('######## deleteMany');
            console.log('conditions:'); console.log(conditions);
            console.log('Documents deleted: ' + result.deletedCount);
            console.log('##########')
        });
    }
}

module.exports = database;