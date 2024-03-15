const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler).catch((err) => next(err)).catch((err) => next(err))
    }
}



export {asyncHandler}


// for above sample code
// const asyncHandler = (fn) => async(req,res,next) => {
// try{
//     await fn(req,res,next)
// }catch(error){
//     res.status(err.code || 500).json({
//         success : false,
//         message : err.message
//     })
// }
// }