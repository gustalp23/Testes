// Projeto Integrador — Central de Utilidades — Entrega 1
// Programação Web I | Gustavo Lourenço de Paula

const moeda = valor => valor.toLocaleString("pt-BR", {style:"currency",currency:"BRL"});

// Retorna null se o usuário cancelar ou informar um número inválido.
function solicitarNumero(mensagem, minimo = 0, maximo = Infinity, inteiro = false) {
  const entrada = prompt(mensagem);
  if (entrada === null) return null;
  const texto = entrada.trim().replace(/\s/g, "");
  if (texto === "") { alert("Informe um valor válido."); return null; }
  const normalizado = texto.includes(",") ? texto.replace(/\./g, "").replace(",", ".") : texto;
  const valor = Number(normalizado);
  if (!Number.isFinite(valor) || valor < minimo || valor > maximo || (inteiro && !Number.isInteger(valor))) {
    alert("Valor inválido. Informe " + (inteiro ? "um número inteiro" : "um número") + " entre " + minimo + " e " + (maximo === Infinity ? "um valor permitido" : maximo) + ".");
    return null;
  }
  return valor;
}

function calcularPrecoFinal(preco, percentual) {
  return preco * (1 - percentual / 100);
}
function calcularParcela(total, quantidade) {
  return total / quantidade;
}
function simularInvestimento(inicial, aporte, taxaPercentual, meses) {
  let saldo = inicial;
  const taxa = taxaPercentual / 100;
  for (let mes = 1; mes <= meses; mes++) {
    saldo = saldo * (1 + taxa);
    saldo += aporte; // aporte no final do mês, depois do rendimento
  }
  const totalInvestido = inicial + aporte * meses;
  return {saldo, totalInvestido, rendimento: saldo - totalInvestido};
}
function dividirDespesa(total, pessoas) {
  return total / pessoas;
}

function ferramentaDesconto() {
  const preco = solicitarNumero("Qual é o preço original do produto (R$)?", 0);
  if (preco === null) return;
  const percentual = solicitarNumero("Qual é o percentual de desconto (0 a 100)?", 0, 100);
  if (percentual === null) return;
  const final = calcularPrecoFinal(preco, percentual);
  const economia = preco - final;
  alert("CALCULADORA DE DESCONTOS\n\nPreço original: " + moeda(preco) + "\nDesconto: " + percentual + "%\nValor economizado: " + moeda(economia) + "\nPreço final: " + moeda(final));
}

function ferramentaParcelas() {
  const total = solicitarNumero("Qual é o valor total da compra (R$)?", 0);
  if (total === null) return;
  const quantidade = solicitarNumero("Em quantas parcelas deseja dividir? (número inteiro maior que zero)", 1, 1200, true);
  if (quantidade === null) return;
  const parcela = calcularParcela(total, quantidade);
  alert("CALCULADORA DE PARCELAS\n\nValor total: " + moeda(total) + "\nQuantidade: " + quantidade + "\nValor de cada parcela: " + moeda(parcela) + "\nSem juros.");
}

function ferramentaInvestimentos() {
  const inicial = solicitarNumero("Qual é o investimento inicial (R$)?", 0);
  if (inicial === null) return;
  const aporte = solicitarNumero("Qual é o aporte mensal (R$)?", 0);
  if (aporte === null) return;
  const taxa = solicitarNumero("Qual é a taxa de rendimento mensal (%)? (ex.: 1 para 1%)", 0, 100);
  if (taxa === null) return;
  const meses = solicitarNumero("Por quantos meses deseja investir?", 1, 1200, true);
  if (meses === null) return;
  const resultado = simularInvestimento(inicial, aporte, taxa, meses);
  alert("SIMULADOR DE INVESTIMENTOS\n\nPeríodo: " + meses + " meses\nTaxa mensal: " + taxa + "%\nTotal investido: " + moeda(resultado.totalInvestido) + "\nRendimento obtido: " + moeda(resultado.rendimento) + "\nSaldo final: " + moeda(resultado.saldo) + "\n\nSimulação com taxa constante e aportes ao fim de cada mês.");
}

function ferramentaDespesas() {
  let total = 0;
  let valor;
  let quantidadeDespesas = 0;
  do {
    valor = solicitarNumero("Informe o valor da despesa (R$). Digite 0 para encerrar.", 0);
    if (valor === null) return;
    if (valor > 0) {
      total += valor;
      quantidadeDespesas++;
    }
  } while (valor !== 0);
  if (quantidadeDespesas === 0) { alert("Nenhuma despesa foi informada."); return; }
  const pessoas = solicitarNumero("Quantas pessoas participarão da divisão?", 1, 100000, true);
  if (pessoas === null) return;
  alert("DIVISOR DE DESPESAS\n\nDespesas informadas: " + quantidadeDespesas + "\nTotal: " + moeda(total) + "\nQuantidade de pessoas: " + pessoas + "\nValor por pessoa: " + moeda(dividirDespesa(total, pessoas)));
}

// O switch seleciona a ferramenta escolhida na página.
function executarFerramenta(opcao) {
  switch (opcao) {
    case 1: ferramentaDesconto(); break;
    case 2: ferramentaParcelas(); break;
    case 3: ferramentaInvestimentos(); break;
    case 4: ferramentaDespesas(); break;
    default: alert("Ferramenta inválida.");
  }
}