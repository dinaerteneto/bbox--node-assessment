import { Router } from 'express'
import { createProjectController } from '../useCases/projects/CreateProject'
import { deleteProjectController } from '../useCases/projects/DeleteProject'
import { getProjectController } from '../useCases/projects/GetProject'
import { getProjectsController } from '../useCases/projects/GetProjects'

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

projectsRouter.get('/', async (request, response) => {
    return getProjectsController.handle(request, response)
})

export { projectsRouter }