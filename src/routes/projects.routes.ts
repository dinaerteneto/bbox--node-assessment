import { makeAddProjectController, makeDeleteProjectController } from '@/main/factories';
import { Router } from 'express'
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
    return makeAddProjectController(request, response)
})

projectsRouter.delete('/:id', async (request, response) => {
    return makeDeleteProjectController(request, response)
})

/*
projectsRouter.get('/:id', async (request, response) => {
    return getProjectController.handle(request, response)
})

projectsRouter.get('/', async (request, response) => {
    return getProjectsController.handle(request, response)
})
*/

export { projectsRouter }
