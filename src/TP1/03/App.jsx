export default function App() {
    function calcularMediaAvaliacoes(avaliacoes) {
        
        const somaAvaliacoes = avaliacoes.reduce((total, avaliacao) => total + avaliacao, 0);
    
        const media = somaAvaliacoes / avaliacoes.length;
    
        return media;
    }

    const avaliacoes = [10, 5, 7, 4, 8];

    const media = calcularMediaAvaliacoes(avaliacoes)
    console.log(media)

    return (
        <div>
            <p>Média: {media}</p>
        </div>
    );
}