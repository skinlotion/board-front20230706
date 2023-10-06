import ResponseDto from "..";

export default interface SignInResponseDto extends ResponseDto{
    token : String;
    expirationTime : number;
}