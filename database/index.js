const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

module.exports.connect = async () => {
    try{
      await mongoose
      .connect(
        'mongodb+srv://jeanquintana:paTIGO06XNOeOStx@imee.wdtzgoy.mongodb.net/?retryWrites=true&w=majority/test'
      )
      console.log('Conectado a Atlas')
    }catch (error) {
      console.log(error)
    }
};
