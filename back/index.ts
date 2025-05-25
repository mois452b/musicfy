import app from "./src/app"
import { DBConnection } from "./src/db/conection"

DBConnection.connect()

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
