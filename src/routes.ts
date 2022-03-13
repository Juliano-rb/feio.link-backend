import { Router } from 'express'
import { HelloWorldController } from './controllers/HelloWorldController'

const helloWorldController = new HelloWorldController()

const routes = Router()

routes.get('/', (req, res) => helloWorldController.hello(req, res))


export { routes }
