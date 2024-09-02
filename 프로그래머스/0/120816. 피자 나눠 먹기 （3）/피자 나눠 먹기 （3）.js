function solution(s, n) {
    let i = 1;
    while(s*i<n){
        i++;
    }
    return i;
}
/*
    for (let i = 1; i<100; i++)
        if(s*i<n) {
           return i+1;
        }
    
}*/