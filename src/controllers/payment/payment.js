const PaypackJs = require("paypack-js").default;

const paypack = PaypackJs.config({ 
client_id: "c37f1b12-7e2b-11ee-9d98-deaddb65b9c2", 
client_secret: "d4384a6ae4c20d36b19cef4e2586a90cda39a3ee5e6b4b0d3255bfef95601890afd80709" 
});


export const cashIn =(req, res) => {
    paypack.cashin({
        amount: req.body.amount,
        number: req.body.number,
        environment: "production",
      })
        .then((response) => {
          console.log(response.data);
        res.status(200).json(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      
};

export const cashOut =(req, res) => {
    paypack.cashout({
        amount: req.body.amount,
        number: req.body.number,
        environment: "production",
      })
        .then((response) => {
          console.log(response.data);
        res.status(200).json(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
}


