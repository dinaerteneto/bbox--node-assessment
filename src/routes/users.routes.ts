import { Router } from 'express'
import { makeCreateUserController } from '../main/factories/user/user-controller-factory';

import { yup, validate } from './validator';

const usersRouter = Router()

usersRouter.post('/', async (request, response) => {
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required(),
        phoneNumber: yup.string()
    });
    const errors = await validate(schema, request.body)
    if (errors) {
        return response.json(errors)
    }    

    return makeCreateUserController(request, response)
})
/*
usersRouter.delete('/:id', async (request, response) => {
    return deleteUserController.handle(request, response)
})

usersRouter.get('/', async (request, response) => {
    return getUsersController.handle(request, response)
})

usersRouter.get('/:id', async (request, response) => {
    return getUserController.handle(request, response)
})
*/

export { usersRouter }