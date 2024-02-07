function analisaFaturamento(faturamentoDiaria) {
    let menorFaturamento = Infinity;
    let maiorFaturamento = 0;
    let diasAcimaMedia = 0;
    let mediaMensal = 0;
    let diasComFaturamento = 0;
  
    for (let dia of faturamentoDiaria) {
      if (dia.faturamento === 0) {
        continue;
      }
  
      menorFaturamento = Math.min(menorFaturamento, dia.faturamento);
      maiorFaturamento = Math.max(maiorFaturamento, dia.faturamento);
      mediaMensal += dia.faturamento;
      diasComFaturamento++;
  
      if (dia.faturamento > mediaMensal / diasComFaturamento) {
        diasAcimaMedia++;
      }
    }
  
    mediaMensal /= diasComFaturamento;
  
    return {
      menorFaturamento,
      maiorFaturamento,
      diasAcimaMedia
    };
  }

  const faturamentoDiaria = [
    { dia: 1, faturamento: 100 },
    { dia: 2, faturamento: 0 },
    { dia: 3, faturamento: 150 },
    { dia: 4, faturamento: 200 },
    { dia: 5, faturamento: 0 },
    { dia: 6, faturamento: 0 },
    { dia: 7, faturamento: 0 },
    { dia: 8, faturamento: 120 },
    { dia: 9, faturamento: 180 },
    { dia: 10, faturamento: 220 },
    { dia: 11, faturamento: 0 },
    { dia: 12, faturamento: 0 },
    { dia: 13, faturamento: 0 },
    { dia: 14, faturamento: 0 },
    { dia: 15, faturamento: 0 },
    { dia: 16, faturamento: 0 },
    { dia: 17, faturamento: 0 },
    { dia: 18, faturamento: 0 },
    { dia: 19, faturamento: 0 },
    { dia: 20, faturamento: 0 },
    { dia: 21, faturamento: 0 },
    { dia: 22, faturamento: 0 },
    { dia: 23, faturamento: 0 },
    { dia: 24, faturamento: 0 },
    { dia: 25, faturamento: 0 },
    { dia: 26, faturamento: 0 },
    { dia: 27, faturamento: 0 },
    { dia: 28, faturamento: 0 },
    { dia: 29, faturamento: 0 },
    { dia: 30, faturamento: 0 },
    { dia: 31, faturamento: 0 }
  ];
  
  console.log(analisaFaturamento(faturamentoDiaria));
 