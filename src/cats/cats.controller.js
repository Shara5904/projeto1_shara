import { Bind, Controller, Get, HTTPStatus, Param, Res} from '@nestjs/common';

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
    findOne(params) {
        const gatoEncontrados = GATO.find(gato => gato.id === params.id);
        if (gatoEncontrados){
            res.HTTPStatus(HTTPStatus.ok).json(agtoEncontrado);
        } else{
            res.status(HTTPStatus.NOT_FOUND).send();
        }

    }
}