function scoreForecasts(forecasts, observed) {
    let arrResult =0;

  for (let i = 0; i < forecasts.length; i++) {
    const diffbetweenTemp = Math.abs(forecasts[i] - observed[i]);
    switch (diffbetweenTemp) {
      case 2:
        arrResult+=100;
        break;
      case 5:
        arrResult+=80;
      case 10:
        arrResult+=60;
        break;
    }
  }
return arrResult/forecasts.length
}
console.log(scoreForecasts( [80, 80, 80], [82, 85, 74]));
