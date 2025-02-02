function otp() {
  var otp='';
  for(i=0;i<4;i++){
    var no=Math.floor(Math.random()*10);
    otp+=no;
  }
  return otp;
}
module.exports=otp;