import './projetos.css';

export default function Projetos() {
    
    const projetos = [
        { 
            titulo: "Projeto 1", 
            descricao: "Descrição do Projeto 1.", 
            imagem: "https://via.placeholder.com/300x200?text=Projeto+1" 
        },
        { 
            titulo: "Projeto 2", 
            descricao: "Descrição do Projeto 2.", 
            imagem: "https://via.placeholder.com/300x200?text=Projeto+2" 
        },
        { 
            titulo: "Projeto 3", 
            descricao: "Descrição do Projeto 3.", 
            imagem: "https://via.placeholder.com/300x200?text=Projeto+3" 
        }
    ];

    return (
        <section className="projetos">
            <h2>Projetos</h2>
            <ul>
                {projetos.map((projeto, index) => (
                    <li key={index}>
                        <img src={projeto.imagem} alt={projeto.titulo} />
                        <div className="projeto-info">
                            <h3>{projeto.titulo}</h3>
                            <p>{projeto.descricao}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}