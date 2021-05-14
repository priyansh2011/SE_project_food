const nodemailer=require("nodemailer");
const mailGun=require("nodemailer-mailgun-transport");



const auth={
  auth: {
    api_key:process.env.API_KEY,
    domain:process.env.DOMAIN
  }
}

const transporter=nodemailer.createTransport(mailGun(auth));

const sendMail3=(fname, lname, email, address, phone, country, state, zip, payment, items, totalPrice, cb)=>{
  const mailOptions={
    from: email,
    to: "priyansh.1@iitj.ac.in",
    subject:"Order Details",
    text:"these are the order details Name: "+fname+" "+lname+" ,Email: "+email+" ,phone: "+phone+" ,country: "+country+" ,state: "+state+" ,zip: "+zip+" Payment: "+payment+" Items: "+items.toString()+" Total Price: "+totalPrice+"."
  }


  transporter.sendMail(mailOptions, function(err, data){
    if(err){
      cb(err, null);
    }
    else{
    cb(null, data);
    }
  })
}

module.exports= sendMail3;
