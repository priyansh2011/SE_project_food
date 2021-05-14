const nodemailer=require("nodemailer");
const mailGun=require("nodemailer-mailgun-transport");



const auth={
  auth: {
    api_key:process.env.API_KEY,
    domain:process.env.DOMAIN
  }
}

const transporter=nodemailer.createTransport(mailGun(auth));

const sendMail2=(name, email, subject, message, cb)=>{
  const mailOptions={
    from: email,
    to: "priyansh.1@iitj.ac.in",
    subject:subject,
    text:"Name: "+name+"  Message: "+message+"."
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

module.exports= sendMail2;
