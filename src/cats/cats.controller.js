import { Bind, Controller, Get, HttpStatus, Param, Res, Delete, Post, Body, Put} from '@nestjs/common';

const GATO= [ 
{
    id:1,
    name:'franeudos',
    corDosOlhos:'preto',
    raca:'sphynx'
},
{
    id:2,
    name:'curovo',
    corDosOlhos:'cinza',
    raca:'siamês'
},
{
    id:3,
    name:'franjinha',
    corDosOlhos:'cinza',
    raca:'siamês'
}

];
@Controller('cats')
export class CatsController {

    @Get()
    findALL() {
        return GATO;
    }
    
    @Get(':id')
    @Bind(Param(), Res())
    findOne(params, res) {
        const gatoEncontrados = GATO.find(gato => gato.id === params.id);
        if (gatoEncontrados){
            res.HTTPStatus(HttpStatus.ok).json(gatoEncontrado);
        } else{
            res.status(HttpStatus.NOT_FOUND).send();
        }

    }

    @Delete(':id')
    @Bind(Param('id'), Res())
    remove(id, res){
        const indexgatoEncontrados = GATO.findIndex(gato => gato.id ==id);
        if(indexgatoEncontrados >= 0){
            GATO.splice(indexgatoEncontrados, 1);
            res.status(HttpStatus.NO_CONTENT).send();
        }else{
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post()
    @Bind(Body(), Res())
    create(cat, res){
        GATO.push(cat);
        res.status(HttpStatus.CREATED).json(cat);


    }

    @Put(':id')
    @Bind(Param('id'), Body(), Res())
    update(id, cat, res){
        const indexgatoEncontrados = GATO.findIndex(gato => gato.id ==id);
        if(indexgatoEncontrados >= 0){
            GATO.splice(indexgatoEncontrados, 1, cat);
            res.status(HttpStatus.NO_CONTENT).send();
        }else{
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

}