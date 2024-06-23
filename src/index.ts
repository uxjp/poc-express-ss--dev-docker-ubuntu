import express, { Request, Response } from 'express';

const app = express();
const port = 3000;
const host = '0.0.0.0';

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
