class Response {
    response(res, message, status, success, data) {
        return res.status(status).send({
            code: status,
            msg: message,
            records: data
        })
    }
    internalServerError(res, message  = ' Internal server error') {
        return this.response(res, message, 500, false, [])
    }
    sendError(res, {message, status = 400, data = null}) {
        return this.response(res, message, status, false, data)
    }

    sendSuccess(res, {message, status = 200, data = null}) {
        return this.response(res, message, status, true, data)
    }
}

const response = ()  => {
    return new Response()
}
module.exports = response()