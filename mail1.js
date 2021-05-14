const nodemailer=require("nodemailer");
const mailGun=require("nodemailer-mailgun-transport");



const auth={
  auth: {
    api_key:process.env.API_KEY,
    domain:process.env.DOMAIN
  }
}

const transporter=nodemailer.createTransport(mailGun(auth));

const sendMail1=(name, email, phone, date, time, people, message, cb)=>{
  const mailOptions={
    from: email,
    to: "priyansh.1@iitj.ac.in",
    subject:"Book Table",
    text:"these are the booking details Name: "+name+" ,Email: "+email+" ,phone: "+phone+" ,date: "+date+" ,time: "+time+" ,no of people: "+people+" Message: "+message+"."
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

module.exports= sendMail1;
