export default function App() {

    function calcularPrecoTotal(preco, quantidade) {
        return preco * quantidade;
    }

    const preco = 75; 
    const quantidade = 4; 
    const precoTotal = calcularPrecoTotal(preco, quantidade);

    return (
        <div>
            <p>Preço: R$ {preco}</p>
            <p>Quantidade: {quantidade}</p>
            <p>Preço total: R$ {precoTotal}</p>
        </div>
    )
}
