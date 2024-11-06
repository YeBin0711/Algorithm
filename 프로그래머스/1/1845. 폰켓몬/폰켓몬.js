function solution(nums) {
    var numsSet = new Set(nums);
    const number = numsSet.size;
    const count = nums.length;
    let answer = 0;
    if(count/2 < number){
        answer = count/2
    } else{
        answer = number;
    }
    return answer;
}