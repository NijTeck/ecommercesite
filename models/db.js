const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/ecommerceOrders', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));
require('./order.model');