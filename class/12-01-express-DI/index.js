import express from "express";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import {ProductController} from './mvc/controllers/product.controller'
import { CashService } from "./mvc/controllers/services/cash.service"
import { PointService } from "./mvc/controllers/services/point.service.js";
import { ProductService } from "./mvc/controllers/services/product.service"

const app = express()

const cashService = new CashService() // new 한번으로 모든곳에서 재사용 가능(싱글톤 패턴)
const productService = new ProductService()
const pointService = new PointService() // 쿠폰 구매 방식이 포인트결제로 변경됨

//상품 API
const productController = new ProductController(cashService, productService)
app.post('/products/buy', productController.buyProduct) // 상품 구매하기
app.post('/products/refund', productController.refundProduct)// 상품 환불하기

// 쿠폰 API(상품권)
const couponController = new CouponController(cashService)
app.post('/coupons/buy', couponController.buyCoupon) // 쿠폰 상품권 구매하기

app.listen(3000)