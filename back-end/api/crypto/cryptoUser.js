const crypto = require("crypto");

function cryptoPassword(password) {
    return crypto.createHash("sha256").update(password).digest('hex')
}


class CryptoUser {
    constructor(user, email, cpf, password){
        this.user =  user,
        this.email = email,
        this.cpf = cpf,
        this.password = cryptoPassword(password)
    }

}

module.exports = cryptoPassword;
module.exports = CryptoUser;

