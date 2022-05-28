export interface ValidacionesAuth{
    //user    
    maxLengthUser:number,
    regexUser:RegExp,

    //pass
    maxLengthPass:number,
    regexPass:RegExp,

    //email
    maxLengthEmail:number,
    regexEmail:RegExp,
}