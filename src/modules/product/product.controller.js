
import connection from './../../../db/models/connectionDb.js';

////    getProduct    //////////
export const getProduct= (req,res,next)=>{
    const quary= `select * from product`
    connection.execute(
       quary,(err,result)=>{
        if(err){
          return  res.status(500).send({msg:"server error",err})
        }
        else{
          return  res.status(200).send(result)
        }
       }

        
    )
}


////    addProduct    //////////
export const addProduct= (req,res,next)=>{
const {name,Category,Price,Count,discription} = req.body
    const quary=` insert into product(name,Category,Price,Count,discription) values ("${name}","${Category}","${Price}","${Count}","${discription}")`
    connection.execute(
       quary,(err,result)=>{
        if(err){
            res.status(500).send({msg:"server error",err})
        }
            console.log(result);
            if (!result.affectedRows) {
                return res.status(400).json({msg:"failed",err})
            }
          return  res.status(200).send({msg:"done",result})
       }
    )
}

////    updateProduct    //////////
export const updateProduct= (req,res,next)=>{
    const {name,Category,id,Price,Count,discription} = req.body
   
        const quary=`update product set name="${name}",Category="${Category}",Price="${Price}",Count="${Count}",discription="${discription}"
         where id="${id}" `
        connection.execute(
           quary,(err,result)=>{
            if(err){
                res.status(500).send({msg:"server error",err})
            }
                console.log(result);
                if (!result.affectedRows) {
                    return res.status(400).json({msg:"failed",err})
                }
              return  res.status(200).send({msg:"done",result})
           }
        )
    }
    
    ////    deleteProduct    //////////
export const deleteProduct= (req,res,next)=>{
    const {id} = req.body
        const quary=`delete from product where id="${id}"`
        connection.execute(
           quary,(err,result)=>{
            if(err){
                res.status(500).send({msg:"server error",err})
            }
                console.log(result);
                if (!result.affectedRows) {
                    return res.status(400).json({msg:"failed",err})
                }
              return  res.status(200).send({msg:"done",result})
           }
        )
    }



    