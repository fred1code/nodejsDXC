function operaciones(array): object {
    const suma: number = array.reduce((curr, acc) => (curr + acc));
    const resta: number = array.reduce((curr, acc) => (curr - acc));
    const division: number = array.reduce((curr, acc) => (curr / acc));
    const multiplicacion: number = array.reduce((curr, acc) => (curr * acc));
    return {
        suma: suma,
        resta: resta,
        multiplicacion: multiplicacion,
        division: division,
    }

}

export function success(req, res, message, status) {

    res.status(status || 200).send({
        response: {
            data: operaciones(message), error: [],
        },

    });
}


export function error(req, res, message, status, details) {
    console.log(details);
    res.status(status || 500).send({
        data: '',
        error: [message],
    });
}

