//const jwt_decode = require("jwt-decode")

import jwt_decode from "jwt-decode";
export default function decode(token){
    var decoded = jwt_decode(token);
    return decoded
}