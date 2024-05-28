
import  Router  from 'express';
import * as PC from './product.controller.js';
const router= Router()

router.get('/',PC.getProduct);
router.post('/',PC.addProduct);
router.put('/',PC.updateProduct);
router.delete('/',PC.deleteProduct);

export default router