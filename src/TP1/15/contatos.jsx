import './contatos.css'; 

export default function Contatos() {
    return (
        <section className="contatos">
            <h2>Contatos</h2>
            <div className='contatos-info'>
                <p>Email: exemplo@dominio.com</p>
                <p>LinkedIn: <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">Meu Perfil</a></p>
                <p>GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer">Meu GitHub</a></p>
            </div>
        </section>
    );
}
