function scoreExams(studentAnswers, correctAnswers) {

  let arrofScore = [];
  for (const student of studentAnswers) {
    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      if (student[i] == correctAnswers[i]) {
       // console.log("correct answer", correctAnswers[i]);
        score++};
    }
    console.log(score,"ssssssssssssss");
    arrofScore.push(score);
  }
  return arrofScore;
}
console.log(scoreExams( [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]], [3, 1, 2,4]));
