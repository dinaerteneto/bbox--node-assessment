import { Router } from 'express'
import { createProjectController } from '../useCases/projects/CreateProject'
import { deleteProjectController } from '../useCases/projects/DeleteProject'
import { getProjectController } from '../useCases/projects/GetProject'
import { getProjectsController } from '../useCases/projects/GetProjects'
import { yup, validate } from './validator';

const projectsRouter = Router()

projectsRouter.post('/', async (request, response) => {
    const schema = yup.object().shape({
        description: yup.string().required(),
        userId: yup.string().required()
    });
    const errors = await validate(schema, request.body)
    if (errors) {
        return response.json(errors)
    }        
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