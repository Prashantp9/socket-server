import "dotenv/config";

import Express from "express";

// main const
const app = Express();

app.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
});
