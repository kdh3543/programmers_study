function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++){
    answer.push(array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b).filter((a,index)=>index===commands[i][2]-1)[0])
  }
  return answer;
}
