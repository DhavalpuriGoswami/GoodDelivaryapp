const mongoose = require("mongoose");
// const mongourl =
//   "mongodb+srv://dhavalpurigoswami:Dhaval123@cluster0.tmnu4zx.mongodb.net/tomatofoodappdb?retryWrites=true&w=majority";
const mongourl =
  "mongodb://dhavalpurigoswami:Dhaval123@ac-l43qvg8-shard-00-00.tmnu4zx.mongodb.net:27017,ac-l43qvg8-shard-00-01.tmnu4zx.mongodb.net:27017,ac-l43qvg8-shard-00-02.tmnu4zx.mongodb.net:27017/tomatofoodappdb?ssl=true&replicaSet=atlas-10ohe7-shard-0&authSource=admin&retryWrites=true&w=majority";
const connetMongo = async () => {
  await mongoose.connect(
    mongourl,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("eerrre", err);
      else {
        console.log("conect");
        const fetchdata = await mongoose.connection.db.collection("food_data");
        fetchdata.find({}).toArray(async function (err, data) {
          const fetchcategory = await mongoose.connection.db.collection(
            "food_category"
          );
          fetchcategory.find({}).toArray(function (err, catData) {
            if (err) console.log(err);
            else {
              global.food_data = data;
              global.food_catData = catData;
            }
          });
        });
      }
    }
  );
  console.log("Mongo connectsed");
};
module.exports = connetMongo;
