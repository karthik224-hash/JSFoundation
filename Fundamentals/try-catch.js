const userName = "karthik"
try{
    samefunction();
    console.log(userName);
}catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
    console.log("error occurred")
}finally{
    console.log("finnalyy executed")
}
console.log(userName)