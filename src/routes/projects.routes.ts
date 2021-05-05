import { Router } from 'express'
import { createProjectController } from '../useCases/projects/CreateProject'

const projectsRouter = Router()

projectsRouter.post('/', async (request, response) => {
    return createProjectController.handle(request, response)
})

export { projectsRouter }