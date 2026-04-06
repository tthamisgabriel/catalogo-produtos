import { useState, useEffect } from "react";
import ProdutoCard from "../components/ProdutoCard";

function Home() {

  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          id: 1,
          nome: "Camiseta",
          preco: 50,
          descricao: "Camiseta básica",
          imagem: "https://picsum.photos/100"
        }
      ]);

      setCarregando(false);
    }, 2000);
  }, []);

  function adicionarProduto(e) {
    e.preventDefault();

    if (!nome || !preco || !descricao) {
      alert("Preencha todos os campos");
      return;
    }

    const novoProduto = {
      id: produtos.length + 1,
      nome,
      preco,
      descricao,
      imagem: "https://picsum.photos/100"
    };

    setProdutos([...produtos, novoProduto]);

    setNome("");
    setPreco("");
    setDescricao("");
  }

  function removerProduto(id) {
  const novaLista = produtos.filter((p) => p.id !== id);
  setProdutos(novaLista);
}

  return (
    <div className="container">
      <h1>Produtos</h1>

      {carregando ? (
        <p>Carregando...</p>
      ) : (
        produtos.map((p) => (
          <ProdutoCard
            key={p.id}
            nome={p.nome}
            preco={p.preco}
            descricao={p.descricao}
            imagem={p.imagem}
            onDelete={() => removerProduto(p.id)}
          />
        ))
      )}

      <h2>Adicionar Produto</h2>

      <form className="form" onSubmit={adicionarProduto}>
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />

        <input
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default Home;