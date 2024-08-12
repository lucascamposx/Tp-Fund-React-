export default function App() {
    function encontrarProdutoPorNome(produtos, nome) {
        return produtos.find(produto => produto.nome == nome);
    }
    
    const produtos = [ 
        { nome: "Laptop", preco: 1000 }, 
        { nome: "Tablet", preco: 400 }, 
        { nome: "Smartphone", preco: 1500 } 
    ];
    
    const produtoEncontrado = encontrarProdutoPorNome(produtos, "Laptop");
    
    console.log(produtoEncontrado);

    return (
        <div>Hello World</div>
    )
}