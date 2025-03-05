class ApiError{
    constructor(statusCode,message='Something went wrong',error=[],stack=''){
this.statusCode=statusCode,
this.error=error,
this.message=message,
this.data=null,
this.success=false 

if(stack){
    this.stack=stack
}else{
    Error.captureStackTrace(this,this.constructor)
}
    }
}
export {ApiError}