import mongoose from "mongoose";

const databaseConnection = async () => {
  try {
    const conexao = await mongoose.connect(
      "mongodb+srv://doriacruz2021:8f9b61123@leos-mern-blog.5g3qxte.mongodb.net/?retryWrites=true&w=majority&appName=LEOS-MERN-BLOG"
    );
    console.log(`Database succefully connected: ${conexao.connection.host}`);
  } catch (error) {
    console.log(`Database connection failed: ${error}`);
  }
};

export default databaseConnection;
