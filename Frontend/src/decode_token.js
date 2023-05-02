const jwt_decode  =require("jwt-decode")
module.exports = function decode(token){
    var decoded = jwt_decode(token);
    return decoded
}