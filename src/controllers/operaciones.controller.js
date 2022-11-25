export function sumar(req, res){
    const number1 = req.body.number1;
    const number2 = req.body.number2;

    const result= number1+number2

    return res.send({result});
}

export function restar(req, res){
    const number1 = req.body.number1;
    const number2 = req.body.number2;

    const result= number1-number2

    return res.send({result});
    
}

export function multiplicar(req, res){
    const number1 = req.body.number1;
    const number2 = req.body.number2;

    const result= number1*number2

    return res.send({result});
    
}

export function dividir(req, res){
    const number1 = req.body.number1;
    const number2 = req.body.number2;

    const result= number1/number2

    return res.send({result});
    
}

