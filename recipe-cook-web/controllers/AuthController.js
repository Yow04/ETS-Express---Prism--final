import bcrypt from 'bcrypt';
import prisma from '../prisma/prisma.js';

// Fungsi generate API key sederhana
function generateApiKey() {
  const randomStr = Math.random().toString(36).substring(2);
  const timestamp = Date.now().toString(36);
  return randomStr + timestamp;
}

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      status: 'error',
      message: 'Name, email, and password are required.'
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      status: 'error',
      message: 'Password must be at least 6 characters.'
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.users.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    });

    res.status(201).json({
      status: 'success',
      message: 'Register successful'
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Register failed'
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.users.findUnique({
      where: { email }
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid email or password'
      });
    }

    const apiKey = generateApiKey();

    await prisma.api_keys.deleteMany({
      where: { user_id: user.id }
    });

    await prisma.api_keys.create({
      data: {
        user_id: user.id,
        key: apiKey
      }
    });

    res.json({
      status: 'success',
      message: 'Login successful',
      apiKey: apiKey
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Login failed'
    });
  }
};
