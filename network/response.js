exports.success = function (req, res, message, status) {
    res.status(status || 200).send({
        response: {
            data: operaciones(message), error: [],
        },

    });
}

exports.error = function (req, res, message, status, details) {
    console.log(details);
    res.status(status || 500).send({
        data: '',
        error: [message],
    });
}


function operaciones(array) {
    const suma = array.reduce((curr, acc) => (curr + acc));
    const resta = array.reduce((curr, acc) => (curr - acc));
    const division = array.reduce((curr, acc) => (curr / acc));
    const multiplicacion = array.reduce((curr, acc) => (curr * acc));
    return {
        suma: suma,
        resta: resta,
        multiplicacion: multiplicacion,
        division: division,
    }

}

