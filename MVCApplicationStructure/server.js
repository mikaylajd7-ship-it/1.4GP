// Student: Mikayla Dickerson
// Assignment: Guided Practice - MVC Application Structure

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configureExpress = require('./config/express');
const app = configureExpress();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;
