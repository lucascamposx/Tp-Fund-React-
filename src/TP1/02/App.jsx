export default function App() {
    function filtrarDisponiveis(produtos) {
        return produtos.filter(produto => produto.disponivel);
    }

    const produtos = [ 
        { nome: "Laptop", disponivel: true }, 
        { nome: "Tablet", disponivel: false }, 
        { nome: "Smartphone", disponivel: true } 
        ];

    const produtosDisponiveis = filtrarDisponiveis(produtos);

    console.log(produtosDisponiveis);

    return (
        <div>
            <h1>Produtos Disponíveis:</h1>
            <ul>
                {produtosDisponiveis.map((produto, index) => (
                    <li key={index}>{produto.nome}</li>
                ))}
            </ul>
        </div>
    );
}