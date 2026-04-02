// function ProdutoCard({ nome, preco, descricao, imagem }) {
//   return (
//     <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
//       <img src={imagem} width="100" />
//       <h3>{nome}</h3>
//       <p>Preço: R$ {preco}</p>
//       <p>{descricao}</p>
//     </div>
//   );
// }

// export default ProdutoCard;

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