//задача 1
class Worker{
    constructor(name,surname,rate,days){
        this.name=name;
        this.surname=surname;
        this.rate=rate;
        this.days=days;
    }
    getFullName(){
        return `${this.name} ${this.surname}`
    }
    getSalary(){
        let a=this.days*this.rate
        return `${this.getFullName()} получил ${a}`
    }
}
 const FirstWorker=new Worker("Иван","Петров",500,22);
 const SecondWorker=new Worker("Олег", "Сидоров",700,20);
 console.log(FirstWorker.getSalary());
 console.log(SecondWorker.getSalary());