var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/ITISystem');
console.log(mongoose.model('instructor'));