export default function App() {
    function verificarEstoque(produtos) {
        return produtos.filter(produto => produto.quantidadeEmEstoque > 0);
    }
    
    const produtos = [ 
        { nome: "Laptop", quantidadeEmEstoque: 5 }, 
        { nome: "Tablet", quantidadeEmEstoque: 0 }, 
        { nome: "Smartphone", quantidadeEmEstoque: 3 } 
    ];
    
    const produtosEmEstoque = verificarEstoque(produtos);
    
    console.log(produtosEmEstoque);

    return (
        <div>Hello World</div>
    )
}