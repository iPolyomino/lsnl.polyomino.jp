import next from "next";
import * as Express from "express";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = Express.default();
  server.get("*", (req: Express.Request, res: Express.Response) => {
    return handle(req, res);
  });

  server
    .listen(port, () => {
      console.log(
        `> Ready on ${process.env.CLIENT_URL || `http://localhost:${port}`}`,
      );
    })
    .on("error", console.error);
});
