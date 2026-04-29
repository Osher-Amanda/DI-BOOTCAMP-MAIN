const bookRoutes = require('./server/routes/bookRoutes');

app.use(express.json());
app.use('/api/books', bookRoutes);