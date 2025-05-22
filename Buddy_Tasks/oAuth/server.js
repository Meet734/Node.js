const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const CLIENT_ID = '405863668606-jedvtto1pafqh8il2as7l1k6nmbj1iro.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.post('/verify-token', async (req, res) => {
  const token = req.body.token;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });

    console.log(ticket);

    const payload = ticket.getPayload();

    console.log("Payload: ", payload);
    const { name, email, picture } = payload;

    res.json({ name, email, picture });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: 'Invalid token' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
