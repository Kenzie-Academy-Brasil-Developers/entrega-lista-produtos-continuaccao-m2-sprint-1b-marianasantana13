// ELEMENTO UL NO HTML
const list = document.querySelector("ul");
const listCar = document.querySelector(".containerCarrinho ul ");
const valorCarrinho = document.querySelector("#precoTotal");

// LISTA DE PRODUTOS
function listaProdutos(produtos) {
  list.innerHTML = "";

  produtos.forEach((prod) => {
    const { nome, preco, secao, img, componentes, id } = prod;
    const li = document.createElement("li");
    const image = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const span = document.createElement("span");
    const ol = document.createElement("ol");
    const button = document.createElement("button");

    componentes.forEach((value) => {
      const li = document.createElement("li");
      li.innerText = value;

      ol.appendChild(li);
    });
    button.setAttribute("data-id", id);

    // Adicionando dados do produto aos elementos
    image.src = img;
    h3.innerText = nome;
    p.innerText = preco;
    span.innerText = secao;
    button.innerText = "Adicionar ao carrinho";

    // Adicionando o elementos para o li
    li.appendChild(image);
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(span);
    li.appendChild(ol);
    li.appendChild(button);

    // Adicionando li ao HTML
    list.appendChild(li);
  });

  const button = document.querySelectorAll(
    ".containerListaProdutos ul li button"
  );

  adicionarBotao(button);
}

// ADICIONAR PRODUTOS NO CARRINHO
function adicionarBotao(buttons) {
  buttons.forEach((prod) => {
    prod.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id");
      adicionarCarrinho(id);
    });
  });
}

let somaTotal = [];

// CARRINHO
function adicionarCarrinho(ident) {
  let adicionarProduto = {};
  produtos.forEach((prod) => {
    const { id } = prod;
    if (id == ident) {
      adicionarProduto = { ...prod };
    }
  });
  const { img, nome, preco, secao } = adicionarProduto;
  const itemadd = document.createElement("li");
  const image = document.createElement("img");
  const name = document.createElement("p");
  const price = document.createElement("p");
  const section = document.createElement("p");

  price.setAttribute("class", "price");

  image.src = img;
  name.innerText = nome;
  price.innerText = preco;
  section.innerText = secao;

  itemadd.appendChild(image);
  itemadd.appendChild(name);
  itemadd.appendChild(price);
  itemadd.appendChild(section);
  listCar.appendChild(itemadd);

  const value = Number(preco);
  somaTotal.push(value);
  const result = somaTotal.reduce((a, b) => a + b);

  valorCarrinho.innerHTML = result + ".00";
}

// BOTÕES
const botaoTodosOsProdutos = document.querySelector(
  ".estiloGeralBotoes--mostrarTodos"
);
const botaoHortiFruti = document.querySelector(
  ".estiloGeralBotoes--filtrarHortifruti"
);
const botaoPanificadora = document.querySelector(
  ".estiloGeralBotoes--filtrarPanificadora"
);
const botaoLaticinio = document.querySelector(
  ".estiloGeralBotoes--filtrarLaticinio"
);
const botaoInputSearch = document.querySelector(
  ".estiloGeralBotoes--botaoBuscaPorNome"
);
const inputSearch = document.querySelector(".campoBuscaPorNome");

// FUNÇÕES
const filtrarTudo = () => {
  return listaProdutos(produtos);
};
botaoTodosOsProdutos.addEventListener("click", filtrarTudo);

// HORTI FRUTI
const filtrarHortifruti = () => {
  const hortifruti = produtos.filter((prod) => {
    const { secao } = prod;
    if (secao === "Hortifruti") {
      return prod;
    }
  });

  return listaProdutos(hortifruti);
};
botaoHortiFruti.addEventListener("click", filtrarHortifruti);

// PANIFICADORA
const filtrarPanificadora = () => {
  const panificadora = produtos.filter((prod) => {
    const { secao } = prod;
    if (secao === "Panificadora") {
      return prod;
    }
  });

  return listaProdutos(panificadora);
};
botaoPanificadora.addEventListener("click", filtrarPanificadora);

// LATICINIOS
const filtrarLaticinio = () => {
  const laticinio = produtos.filter((prod) => {
    const { secao } = prod;
    if (secao === "Laticinio") {
      return prod;
    }
  });

  return listaProdutos(laticinio);
};
botaoLaticinio.addEventListener("click", filtrarLaticinio);

// iNPUT
const filterInput = () => {
  const inputValue = inputSearch.value.toLowerCase();
  const output = produtos.filter((prod) => {
    const { nome, secao } = prod;
    if (
      nome.toLowerCase() === inputValue ||
      secao.toLowerCase() === inputValue
    ) {
      return prod;
    }
  });
  return listaProdutos(output);
};
botaoInputSearch.addEventListener("click", filterInput);
