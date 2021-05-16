var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://ophelia:Pa$$word@cluster0.mfjzw.mongodb.net/weather?retryWrites=true&w=majority',
    options,
    function(err){
        console.log(err);
    }
)
