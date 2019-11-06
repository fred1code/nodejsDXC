import router from "../routes/routes";

function success(req: any, res: any, message: any, status: any) {
    res.status(status || 200).send({
        response: {
            data: operaciones(message), error: [],
        },

    });
}

function error(req: any, res: any, message: any, status: any) {
    //console.log(details);
    res.status(status || 500).send({
        data: '',
        error: [message],
    });
}


const operaciones = (array: any) => {
    const suma = array.reduce((curr: any, acc: any) => (curr + acc));
    const resta = array.reduce((curr: any, acc: any) => (curr - acc));
    const division = array.reduce((curr: any, acc: any) => (curr / acc));
    const multiplicacion = array.reduce((curr: any, acc: any) => (curr * acc));
    return {
        suma: suma,
        resta: resta,
        multiplicacion: multiplicacion,
        division: division,
    }

};

export = {error: error, success: success};
