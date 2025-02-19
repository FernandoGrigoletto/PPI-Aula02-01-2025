import mysql from "mysql12/promise";

export default function conectar(){
    //criar um pool de conce
    if(globalThis.poolConexoes){
        return await global.poolConexoes.getConnection();
    }else{
        gl

    }
    

}