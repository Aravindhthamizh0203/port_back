const { ErrorCode } = require('../Errorcode')
const errorhanddler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case ErrorCode.VALIDATION_ERROR:
            res.json(
                { title: "validation error", message: err.message, stackTrace: err.stack, })
            break;
        case ErrorCode.NOT_FOUND:
            res.json(
                { title: "not found", message: err.message, stackTrace: err.stack, })
            break;
        case ErrorCode.FORBIDDEN_ERROR:
            res.json(
                { title: "forbidden error", message: err.message, stackTrace: err.stack, })
            break;
        case ErrorCode.SERVER_ERROR:
            res.json(
                { title: "server error", message: err.message, stackTrace: err.stack, })
            break;
        default:
            console.log("no error :all good!")
            break;
    }

}

module.exports = errorhanddler;