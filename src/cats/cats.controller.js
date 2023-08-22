import { Bind, Controller, Get, HttpStatus, Param, Res, Delete, Post, Body, Put, Dependencies} from '@nestjs/common';
import{CatsService} from './cats.service'


@Controller('cats')
@Dependencies(CatsService)
export class CatsController {
    
    constructor(catsService){
        this.catsService = catsService;
    }

    @Get()
    findALL() {
        return this.catsService.findAll();
        
    }
    
    @Get(':id')
    @Bind(Param(), Res())
    findOne(params, res) {
        const gatoEncontrado = this.catsService.findById(params.id);
        if (gatoEncontrado){
            res.status(HttpStatus.OK).json(gatoEncontrado);
        } else{
            res.status(HttpStatus.NOT_FOUND).send();
        }

    }

    @Delete(':id')
    @Bind(Param('id'), Res())
    remove(id, res){
        const indexGatoEncontrado = this.catsService.findIndexById(id);
        if(indexGatoEncontrado >= 0){
            this.catsService.deleteByIndex(indexGatoEncontrado);
            // GATO.splice(indexgatoEncontrados, 1);
            res.status(HttpStatus.NO_CONTENT).send();
        }else{
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post()
    @Bind(Body(), Res())
    create(cat, res){
        this.catsService.create(cat);
        // GATO.push(cat);
        res.status(HttpStatus.CREATED).json(cat);


    }

    @Put(':id')
    @Bind(Param('id'), Body(), Res())
    update(id, cat, res){
        const indexgatoEncontrados = this.catsService.findIndexById(id);
        if(indexgatoEncontrados >= 0){
            this.catsService.update(indexgatoEncontrados, cat);
            res.status(HttpStatus.NO_CONTENT).send();
        }else{
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

}