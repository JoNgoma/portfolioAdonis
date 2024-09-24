/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import profileController from '#controllers/profiles_controller'


router.on('/').render('pages/home')

router.get('homePage', [profileController, 'homePage']).as('homePage')
router.get('homePage/contact', [profileController, 'contact']).as('contact')
router.get('homePage/cv', [profileController, 'cv']).as('cv')
