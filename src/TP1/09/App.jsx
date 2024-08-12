export default function App() {
    function agruparPorCategoria(produtos) {
        return produtos.reduce((resultado, produto) => {
            const { categoria, nome } = produto;
            
            if (!resultado[categoria]) {
                resultado[categoria] = [];
            }
    
            resultado[categoria].push(nome);
            return resultado;
        }, {});
    }
    
    const produtos = [
        { nome: "Laptop", categoria: "Eletrônicos" }, 
        { nome: "Camisa", categoria: "Roupas" }, 
        { nome: "Smartphone", categoria: "Eletrônicos" }, 
        { nome: "Calça", categoria: "Roupas" }, 
        { nome: "Fone de Ouvido", categoria: "Eletrônicos" } 
    ];
    
    const resultado = agruparPorCategoria(produtos);
    console.log(resultado);

    return (
        <div>Hello World</div>
    )
}