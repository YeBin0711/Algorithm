function solution(price) {
    return (100000<=price && price<300000) ? Math.floor(price-price*0.05) 
    : (300000<= price&&price<500000) ? Math.floor(price-price*0.1)
    : (500000<= price) ? Math.floor(price-price*0.2)
    : price;
}