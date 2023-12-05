const mongoose=require('mongoose')

const uri = 'mongodb+srv://9766Jitesh:Jityadav1996@newtondemods.rqv3pqk.mongodb.net/?retryWrites=true&w=majority&ssl=true';



const connectToDatabase = async () => {

  await mongoose.connect(uri, { useNewUrlParser: true})
  .then(() => {
    console.log('Connected to the database');
    const fetched_data= mongoose.connection.db.collection('Newtondemods')
      fetched_data.find({}).toArray((err,data)=>{
        if(err)console.log(err)
        else console.log(data)
      })
    })
  .catch((error) => {
    console.error('Error connecting to the database:', error.message);
  });
  }

module.exports = connectToDatabase;