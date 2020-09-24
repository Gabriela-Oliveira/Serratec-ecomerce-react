export default class Pedido {
    constructor(obj){
        obj = obj ? obj : {};
        this.descricao = obj.descricao;
    }
}