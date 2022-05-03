const Order = require('../Models/Order');

exports.saveOrderDetails = (req, res) => {
    const { email, firstName, lastName, phNumber, address } = req.body;
    const ordersobj = new Order({
        email,
        firstName,
        lastName,
        phNumber,
        address
    });
    ordersobj.save()
     .then(response =>{
        res.status(200).json({
            message : "Orders Placed Successfully",
            Orders : response
        })
    })
    .catch(err =>{
        res.status(500).json({
            erroe : err
        })
    })
};