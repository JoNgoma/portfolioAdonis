import type  {HttpContext}  from '@adonisjs/core/http'

export default class ProfilesController {
    async index({view}:HttpContext){
        return view.render('pages/homePage')
    }
}