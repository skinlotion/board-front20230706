export default interface SignUpRequestDto{
    email : String;
    password : String;
    nickname : String;
    telNumber : String;
    address : String;
    addressDetail : String | null;
    agreedPersonal : boolean;
}