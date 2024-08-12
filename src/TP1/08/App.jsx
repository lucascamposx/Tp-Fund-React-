export default function App() {
    function calcularTotalItens(itens) {
        return itens.reduce((total, item) => {
            return total + item.quantidade * item.precoUnitario;
        }, 0);
    }
    
    const itens = [
        { nome: "Laptop", quantidade: 1, precoUnitario: 1000 }, 
        { nome: "Tablet", quantidade: 2, precoUnitario: 400 }, 
        { nome: "Smartphone", quantidade: 1, precoUnitario: 1500 } 
    ];
    
    console.log(calcularTotalItens(itens)); 

    return (
        <div>Hello World</div>
    )
}