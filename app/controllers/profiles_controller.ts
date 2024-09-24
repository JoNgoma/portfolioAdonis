import type  {HttpContext}  from '@adonisjs/core/http'

export default class ProfilesController {
    async homePage({view}:HttpContext){
        return view.render('pages/homePage')
    }
}