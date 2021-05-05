import { Router } from 'express'
import { createProjectController } from '../useCases/projects/CreateProject'
import { deleteProjectController } from '../useCases/projects/DeleteProject'

const projectsRouter = Router()

projectsRouter.post('/', async (request, response) => {
    return createProjectController.handle(request, response)
})

projectsRouter.delete('/:id', async (request, response) => {
    return deleteProjectController.handle(request, response)
})

export { projectsRouter }