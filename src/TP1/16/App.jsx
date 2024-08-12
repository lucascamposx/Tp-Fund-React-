const CartaoProduto = ({ produto }) => {
    return (
      <div className="cartao-produto">
        <img src={produto.imagem} className="imagem-produto" />
        <h2 className="nome-produto">{produto.nome}</h2>
        <p className="descricao-produto">{produto.descricao}</p>
        <p className="preco-produto">{produto.preco}</p>
      </div>
    );
  };

export default function App() {
    const produtos = [
        {
          nome: "Tênis de Corrida",
          descricao: "Tênis confortável para corridas diárias.",
          preco: "R$ 299,90",
          imagem: "https://via.placeholder.com/150"
        },
        {
          nome: "Camisa de Ciclismo",
          descricao: "Camisa respirável para ciclistas.",
          preco: "R$ 129,90",
          imagem: "https://via.placeholder.com/150"
        },
        {
          nome: "Boné Esportivo",
          descricao: "Boné ajustável para proteção solar.",
          preco: "R$ 59,90",
          imagem: "https://via.placeholder.com/150"
        }
      ];
    
      return (
        <div className="lista-produtos">
          {produtos.map((produto, index) => (
            <CartaoProduto key={index} produto={produto} />
          ))}
        </div>
      );
    };