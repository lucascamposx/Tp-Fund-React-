export default function App() {
    function filtrarPorCategoria(produtos, categoria) {
        return produtos.filter(produto => produto.categoria == categoria);
    }
    
    const produtos = [ 
        { nome: "Laptop", categoria: "Eletrônicos" }, 
        { nome: "Camisa", categoria: "Roupas" }, 
        { nome: "Smartphone", categoria: "Eletrônicos" } 
    ];
    
    const produtosFiltrados = filtrarPorCategoria(produtos, "Eletrônicos");
    
    console.log(produtosFiltrados);

    return (
        <div>Hello World</div>
    )
}