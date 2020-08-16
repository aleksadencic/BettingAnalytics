const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const sportRouter = require('./routes/sport_routes');
const teamRouter = require('./routes/team_routes');
const teamPlayerRouter = require('./routes/team_player_routes');
const matchRouter = require('./routes/match_routes');
const countryRouter = require('./routes/country_routes');
const cityRouter = require('./routes/city_routes');
const streetRouter = require('./routes/street_routes');
const streetNumberRouter = require('./routes/street_number_routes');
const paymentPointsRouter = require('./routes/payment_point_routes');
const membersRouter = require('./routes/member_routes');
const ticketsRouter = require('./routes/ticket_routes');
const ticketRowsRouter = require('./routes/ticket_row_routes');
const memberRouterMongoose = require('./routes_mongoose/members_routes');
const financialsRouterMongoose = require('./routes_mongoose/financials_routes');
const etlRouter = require('./etl_jobs/routes/etl_routes');
const cors = require('cors')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors())

app.use('/', indexRouter);
app.use('/sports', sportRouter);
app.use('/teams', teamRouter);
app.use('/teamPlayers', teamPlayerRouter);
app.use('/matches', matchRouter);
app.use('/countries', countryRouter);
app.use('/cities', cityRouter);
app.use('/streets', streetRouter);
app.use('/streetNumbers', streetNumberRouter);
app.use('/paymentPoints', paymentPointsRouter);
app.use('/members', membersRouter);
app.use('/tickets', ticketsRouter);
app.use('/ticketRows', ticketRowsRouter);
app.use('/segmentation', memberRouterMongoose);
app.use('/financial-analytics', financialsRouterMongoose);
app.use('/etl', etlRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;