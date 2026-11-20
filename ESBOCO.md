# Esboço das quatro interfaces — Entrega 1

Os campos e resultados abaixo são **planejamento visual**, não formulários implementados nesta etapa.

## 1. Calculadora de descontos
```text
┌──────────────────────────────────────────────────────┐
│ CALCULADORA DE DESCONTOS                             │
│ Preço original (R$)   [____________]                 │
│ Desconto (%)          [____________]                 │
│ [ Calcular desconto ]                                │
│ RESULTADO                                            │
│ Preço original: R$ ...  Desconto: ...%                │
│ Valor economizado: R$ ...                            │
│ Preço final: R$ ...                                  │
└──────────────────────────────────────────────────────┘
```

## 2. Calculadora de parcelas
```text
┌──────────────────────────────────────────────────────┐
│ CALCULADORA DE PARCELAS                              │
│ Valor total (R$)      [____________]                 │
│ Quantidade de parcelas [___________]                 │
│ [ Calcular parcelas ]                                │
│ RESULTADO                                            │
│ Valor total: R$ ...  Quantidade: ...                  │
│ Valor de cada parcela: R$ ...                        │
└──────────────────────────────────────────────────────┘
```

## 3. Simulador de investimentos
```text
┌──────────────────────────────────────────────────────┐
│ SIMULADOR DE INVESTIMENTOS                           │
│ Investimento inicial [____________]                  │
│ Aporte mensal        [____________]                  │
│ Taxa mensal (%)      [____________]                  │
│ Período (meses)      [____________]                  │
│ [ Simular investimento ]                             │
│ RESULTADO                                            │
│ Total investido: R$ ...                              │
│ Rendimento: R$ ...                                   │
│ Saldo final: R$ ...                                  │
└──────────────────────────────────────────────────────┘
```

## 4. Divisor de despesas
```text
┌──────────────────────────────────────────────────────┐
│ DIVISOR DE DESPESAS                                  │
│ Valor da despesa (R$) [________] [Adicionar]         │
│ Despesas informadas:                                 │
│ - Despesa 1: R$ ...                                  │
│ - Despesa 2: R$ ...                                  │
│ Quantidade de pessoas [________]                     │
│ [ Dividir despesas ]                                 │
│ RESULTADO                                            │
│ Total das despesas: R$ ...                           │
│ Quantidade de pessoas: ...                           │
│ Valor por pessoa: R$ ...                             │
└──────────────────────────────────────────────────────┘
```

**Entrega 1:** as quatro ferramentas já executam os cálculos por `prompt()` e `alert()`. A interface com campos e resultados na página será implementada na Entrega 3.