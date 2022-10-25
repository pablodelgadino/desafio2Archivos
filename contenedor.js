const fs = require('fs')
const pathToFile = '.products.json'

class Contenedor{
    async save (product){
        if (!product.name) return {status:"error", message: "missing fields"   } 
        try {
            if (fs.existsSync(pathToFile)) {
                let data = await fs.promises.readFile(pathToFile, 'utf-8')
                let products = JSON.parse(data)
                let id = products[products.length-1].id+1
                product.id = id 
                products.push(product)
                await fs.promises.writeFile(pathToFile,JSON.stringify(products, null, 2))
                return {status:"success", message: "Product Added"}
            } else{
              product.id = 1
              await fs.promises.writeFile(pathToFile, JSON.stringify([product], null , 2)) 
              return {status:"success", message: "Product Added"}
            }
        } catch(err){ 
            return {status:"error", message: err.message}
        }
    }

    async getById (id){
        if (!id) return {status:"error", message: "Id required"}
        if (fs.existsSync (pathToFile)){
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let products = JSON.parse(data)
            let product = products.find(product => product.id === id)
            if (product) return {status:"success", message: product}
        } else
        return {status:"error", message: "Product not found"}    
    }


    async getAll (){
        if (fs.existsSync (pathToFile)){
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let products = JSON.parse(data)
            return {status:"success", message: products}
        } else
        return {status:"error", message: err.message}
    }
    
    async deleteById (id) {
        if (!id) return {status:"error", message: "Id required"}
        if (fs.existsSync (pathToFile)){
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let products = JSON.parse(data)
            let newProducts = products.filter(product => product.id !== id)
            await fs.promises.writeFile(pathToFile, JSON.stringify(newProducts, null , 2)) 
            return {status:"success", message: "Product deleted"}
        } else
        return {status:"error", message: "Product not found"}    
    }

    async deleteAll (){
        if (fs.existsSync (pathToFile)){
            await fs.promises.writeFile(pathToFile, "[ ]")
            return {status:"success", message: "No more products"}
        } else
        return {status:"error", message: "There is no file"}    
    }
    }

module.exports = Contenedor