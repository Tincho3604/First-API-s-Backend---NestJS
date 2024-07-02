import { Controller, Query, Get, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';

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

    @Post('create/product')
    @HttpCode(HttpStatus.ACCEPTED)
    create(@Body() payload: any){
        if(payload.id === 1) throw Error("Error del id");
        return {
            message: 'Crear Producto',
            payload
        }
    }

    @Get('products/filter')
     getProductFilter() {
        return ' Yo soy un filter';
     }
}
