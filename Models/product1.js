const fs=require("fs")
const path=require("path")
const p=path.join(path.dirname(require.main.filename),"data","product1.json")

const getProductsFromFile=(callback)=>{
   
    fs.readFile(p,(err,fileContent)=>{
        if(err)
        {
            return callback([])
        }
        return callback(JSON.parse(fileContent))
    })
}
module.exports=class Product
{
    constructor(Incommingtitle)
    {
        this.title=Incommingtitle
    }
    save()
    {
        getProductsFromFile(products=>{
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log("err " ,err)
            })
        })
    }
     static fetchAll(callback)
    {
       getProductsFromFile(callback)
    }
}