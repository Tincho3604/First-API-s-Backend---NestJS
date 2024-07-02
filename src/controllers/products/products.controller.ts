import { Controller, Query, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get('products')
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        return `products limit=> ${limit} offsert=> ${offset} brand=> ${brand}`
    }
    
    @Get('products/filter')
     getProductFilter() {
        return ' Yo soy un filter';
     }
}
