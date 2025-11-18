class P{
    constructor(i,n,p,c){
        this.i=i;this.n=n;this.p=p;this.c=c;
    }
    d=x=>this.p-=this.p*(x/100)
    s=()=>`${this.n} | ₹${this.p} | ${this.c}`
}
let a=[
    new P(1,"Laptop",50000,"Electronics"),
    new P(2,"Headphones",800,"Accessories"),
    new P(3,"Phone",25000,"Electronics"),
    new P(4,"Bag",600,"Fashion")
];
a.forEach(x=>x.d(10));
a.filter(x=>x.p>1000).forEach(x=>console.log(x.s()));
