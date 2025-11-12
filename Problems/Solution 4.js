function password(passwd) {
    const uppercase = /[A-Z]/
    const lowercase = /[a-z]/
    const digits = /\d/
    const length = passwd.length>=8;
    const specialChar = /[!@#$%^&*(),."|<>{}_]/
    if (uppercase && lowercase && digits && length && specialChar) {
        console.log("Password is valid")
    }
    else {
        console.log("Password is not valid")
    }
}
password("Darshan007")