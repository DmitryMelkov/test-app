import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Mock data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

const stats = {
  totalUsers: 42,
  totalOrders: 156,
  revenue: 12500.5,
};

// Routes
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/stats', (req, res) => {
  res.json(stats);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
