export default function App() {
    function filtrarAcimaPreco(produtos, valorMinimo) {
        return produtos.filter(produto => produto.preco > valorMinimo);
    }
    
    const produtos = [
        { nome: "Laptop", preco: 1000 },
        { nome: "Tablet", preco: 400 },
        { nome: "Smartphone", preco: 1500 },
    ];
    
    const produtosFiltrados = filtrarAcimaPreco(produtos, 600);
    
    console.log(produtosFiltrados);

    return (
        <div>Hello World</div>
    )
}