export default function dinheiro(valor, moeda) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: moeda,
    });
  }