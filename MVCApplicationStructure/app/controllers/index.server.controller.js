// Student: Mikayla Dickerson
// MVC controller for the home page.

exports.render = function (req, res) {
    if (req.session.lastVisit) {
        console.log('Previous visit:', req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    res.render('index', {
        title: 'Hello, Mikayla Dickerson!'
    });
};
