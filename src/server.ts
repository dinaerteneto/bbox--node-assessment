import { app } from "./app";

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://0.0.0.0:${PORT}`);
});