function Person(n,c)
{
    this.name = n
    this.city =c
    this.show = function()
    {
        console.log(this.name)
    }
}

let p = new Person("qqq","www")
p.show()
console.log(p.city)
p.name