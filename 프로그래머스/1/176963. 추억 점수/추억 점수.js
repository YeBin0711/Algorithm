function solution(name, yearning, photo) {
    const nyCount = [];
    const answer = [];
    
    for(i=0; i<name.length; i++){
        nyCount[name[i]] = yearning[i];
    }
    
    for(i=0; i<photo.length; i++){
        let sum = 0;
        for(j=0; j<photo[i].length; j++){
            sum += nyCount[photo[i][j]] || 0
      } answer.push(sum);
  }
    return answer;
}