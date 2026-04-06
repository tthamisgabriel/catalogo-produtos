function ProdutoCard({ nome, preco, descricao, imagem, onDelete }) {
  return (
    <div className="card">
      <img src={imagem} width="80" />
      <div>
        <h3>{nome}</h3>
        <p>R$ {preco}</p>
        <p>{descricao}</p>
        <button onClick={onDelete}>Excluir</button>
      </div>
    </div>
  );
}

export default ProdutoCard;