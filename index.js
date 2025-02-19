import cliente from "./Model/cliente";

var cliente = new cliente("111.111.111-11",
                            );
cliente.telefone = "(11) 2222-2222"

console.log(cliente.toJSON())

console.log("")