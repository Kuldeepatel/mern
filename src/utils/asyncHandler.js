const asyncHandler = (requestHandler) => {
    return (req,res,next) => {
    Promise.resolve(requestHandler).catch((err) => next(err)).catch((err) => next(err))
    }
}



export {asyncHandler}


