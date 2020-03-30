const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/productCtrl');

// @route     GET /product
// @desc      Get all products
// @access    public
router.get('/', productCtrl.getAll);

// @route     GET /product/:id
// @desc      Get one products
// @access    public
router.get('/:id', productCtrl.getOne);

// @route     GET /product/:department
// @desc      Get products departments
// @access    public
router.get('/dep/:department', productCtrl.getDep);

// @route     GET /product/:department/:category
// @desc      Get products departments category
// @access    public
router.get('/dep/:department/:category', productCtrl.getCat);

// @route     POST /product
// @desc      Add product to departments
// @access    private
router.post('/', productCtrl.addProd);

// @route     PUT /product/:id
// @desc      edit product
// @access    private
router.put('/:id', productCtrl.editProd);

// @route   PUT /product/sale/:id
// @desc      sale product
// @access    private
router.put('/sale/:id', productCtrl.setSale);

// @route     DELETE /product/:id
// @desc      Deletes one product
// @access    private
router.delete('/:id', productCtrl.delProd);

module.exports = router;
