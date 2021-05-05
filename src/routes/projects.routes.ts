import { Router } from 'express'
import { createProjectController } from '../useCases/projects/CreateProject'
import { deleteProjectController } from '../useCases/projects/DeleteProject'
import { getProjectController } from '../useCases/projects/GetProject'

const projectsRouter = Router()

projectsRouter.post('/', async (request, response) => {
    return createProjectController.handle(request, response)
})

projectsRouter.delete('/:id', async (request, response) => {
    return deleteProjectController.handle(request, response)
})

projectsRouter.get('/:id', async (request, response) => {
    return getProjectController.handle(request, response)
})

export { projectsRouter }