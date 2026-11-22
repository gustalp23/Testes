// Projeto Integrador - Central de Utilidades
// Programação Web I

function moeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

// Pede um número e confere se ele foi informado corretamente.
function solicitarNumero(mensagem, minimo = 0, maximo = Infinity, inteiro = false) {
  let valor;

  while (true) {
    const resposta = prompt(mensagem);

    if (resposta === null) {
      return null;
    }

    let texto = resposta.trim();

    if (texto === "") {
      alert("Esse campo não pode ficar vazio. Tente novamente.");
      continue;
    }

    // Aceita valores com vírgula ou ponto como separador decimal.
    texto = texto.replace(/\s/g, "");
    if (texto.includes(",")) {
      texto = texto.replace(/\./g, "").replace(",", ".");
    }

    valor = Number(texto);

    if (!Number.isFinite(valor)) {
      alert("Digite um número válido.");
      continue;
    }

    if (valor < minimo || valor > maximo) {
      alert("O valor precisa estar entre " + minimo + " e " +
        (maximo === Infinity ? "um número permitido" : maximo) + ".");
      continue;
    }

    if (inteiro && !Number.isInteger(valor)) {
      alert("Digite uma quantidade inteira.");
      continue;
    }

    return valor;
  }
}

// Calculadora de descontos
function calcularPrecoFinal(preco, desconto) {
  return preco - (preco * desconto / 100);
}

function ferramentaDesconto() {
  const preco = solicitarNumero("Informe o preço original do produto (R$):", 0.01);
  if (preco === null) return;

  const desconto = solicitarNumero("Informe o desconto em porcentagem (0 a 100):", 0, 100);
  if (desconto === null) return;

  const economia = preco * desconto / 100;
  const precoFinal = calcularPrecoFinal(preco, desconto);

  alert(
    "CALCULADORA DE DESCONTOS\n\n" +
    "Preço original: " + moeda(preco) + "\n" +
    "Desconto: " + desconto + "%\n" +
    "Valor economizado: " + moeda(economia) + "\n" +
    "Preço final: " + moeda(precoFinal)
  );
}

// Calculadora de parcelas sem juros
function calcularParcela(total, quantidade) {
  return total / quantidade;
}

function ferramentaParcelas() {
  const total = solicitarNumero("Informe o valor total da compra (R$):", 0.01);
  if (total === null) return;

  const quantidade = solicitarNumero("Em quantas parcelas deseja dividir?", 1, 1200, true);
  if (quantidade === null) return;

  const valorParcela = calcularParcela(total, quantidade);

  alert(
    "CALCULADORA DE PARCELAS\n\n" +
    "Valor total: " + moeda(total) + "\n" +
    "Quantidade de parcelas: " + quantidade + "\n" +
    "Valor de cada parcela: " + moeda(valorParcela) + "\n\n" +
    "Parcelamento sem juros."
  );
}

// Simulador de investimentos
function simularInvestimento(inicial, aporte, taxa, meses) {
  let saldo = inicial;
  const rendimentoMensal = taxa / 100;

  for (let mes = 1; mes <= meses; mes++) {
    saldo = saldo + (saldo * rendimentoMensal);
    saldo = saldo + aporte;
  }

  const totalInvestido = inicial + (aporte * meses);
  const rendimento = saldo - totalInvestido;

  return {
    saldoFinal: saldo,
    totalInvestido: totalInvestido,
    rendimento: rendimento
  };
}

function ferramentaInvestimentos() {
  const inicial = solicitarNumero("Informe o valor inicial do investimento (R$):", 0);
  if (inicial === null) return;

  const aporte = solicitarNumero("Informe o valor do aporte mensal (R$):", 0);
  if (aporte === null) return;

  const taxa = solicitarNumero("Informe a taxa de rendimento mensal (%):", 0, 100);
  if (taxa === null) return;

  const meses = solicitarNumero("Por quantos meses deseja investir?", 1, 1200, true);
  if (meses === null) return;

  const resultado = simularInvestimento(inicial, aporte, taxa, meses);

  alert(
    "SIMULADOR DE INVESTIMENTOS\n\n" +
    "Período: " + meses + " meses\n" +
    "Taxa mensal: " + taxa + "%\n" +
    "Total investido: " + moeda(resultado.totalInvestido) + "\n" +
    "Rendimento obtido: " + moeda(resultado.rendimento) + "\n" +
    "Saldo final: " + moeda(resultado.saldoFinal) + "\n\n" +
    "Os aportes são feitos ao final de cada mês."
  );
}

// Divisor de despesas
function dividirDespesa(total, pessoas) {
  return total / pessoas;
}

function ferramentaDespesas() {
  let total = 0;
  let valorDespesa;
  let quantidadeDespesas = 0;

  // O usuário informa 0 quando terminar de lançar as despesas.
  do {
    valorDespesa = solicitarNumero(
      "Informe o valor de uma despesa (R$). Digite 0 para terminar:",
      0
    );

    if (valorDespesa === null) return;

    if (valorDespesa > 0) {
      total = total + valorDespesa;
      quantidadeDespesas++;
    }
  } while (valorDespesa !== 0);

  if (quantidadeDespesas === 0) {
    alert("Nenhuma despesa foi informada.");
    return;
  }

  const pessoas = solicitarNumero("Quantas pessoas vão dividir as despesas?", 1, 100000, true);
  if (pessoas === null) return;

  const valorPorPessoa = dividirDespesa(total, pessoas);

  alert(
    "DIVISOR DE DESPESAS\n\n" +
    "Despesas informadas: " + quantidadeDespesas + "\n" +
    "Total das despesas: " + moeda(total) + "\n" +
    "Quantidade de pessoas: " + pessoas + "\n" +
    "Valor por pessoa: " + moeda(valorPorPessoa)
  );
}

// Escolhe qual ferramenta será executada.
function executarFerramenta(opcao) {
  switch (opcao) {
    case 1:
      ferramentaDesconto();
      break;
    case 2:
      ferramentaParcelas();
      break;
    case 3:
      ferramentaInvestimentos();
      break;
    case 4:
      ferramentaDespesas();
      break;
    default:
      alert("Opção inválida.");
  }
}
