import { Bind, Controller, Get, HttpStatus, Param, Res} from '@nestjs/common';

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
@Controller('cat')
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
}