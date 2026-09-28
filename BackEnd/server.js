const mongoose = require("mongoose");
const app = require("./src/app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB");
    
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});