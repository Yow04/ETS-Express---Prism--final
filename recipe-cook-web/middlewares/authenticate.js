import prisma from '../prisma/prisma.js';

export const authenticate = async (req, res, next) => {
  const apiKey = req.header('x-api-key');

  if (!apiKey) {
    return res.status(401).json({ error: 'API Key required' });
  }

  try {
    const keyRecord = await prisma.api_keys.findUnique({
      where: { key: apiKey },
      
    });

    if (!keyRecord) {
      return res.status(401).json({ error: 'Invalid API Key' });
    }

    // Inject user ke dalam request
    req.auth_user = keyRecord.user_id;

    next();
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};
