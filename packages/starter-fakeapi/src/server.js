import jsonServer from 'json-server';
import { isAuthenticated, createToken, verifyToken } from './jwt';

const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

server.post('/auth/login', (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (isAuthenticated({ email, password }) === false) {
    const status = 401;
    const message = 'Incorrect email or password';
    res.status(status).json({ status, message });
    return;
  }
  const accessToken = createToken({ email, password });
  res.status(200).json({ accessToken });
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(' ')[0] !== 'Bearer'
  ) {
    const status = 401;
    const message = 'Error in authorization format';
    res.status(status).json({ status, message });
    return;
  }
  try {
    verifyToken(req.headers.authorization.split(' ')[1]);
    next();
  } catch (err) {
    const status = 401;
    const message = 'Error accessToken is revoked';
    res.status(status).json({ status, message });
  }
});

server.use(router);

server.listen(3000, () => {
  console.log('Run Auth API Server');
});
