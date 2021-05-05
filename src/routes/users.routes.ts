import { Router } from 'express'
import { createUserController } from '../useCases/users/CreateUser'
import { deleteUserController } from '../useCases/users/DeleteUser'
import { getUsersController } from '../useCases/users/GetUsers'
import { getUserController } from '../useCases/users/GetUser'

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

    return createUserController.handle(request, response)
})

usersRouter.delete('/:id', async (request, response) => {
    return deleteUserController.handle(request, response)
})

usersRouter.get('/', async (request, response) => {
    return getUsersController.handle(request, response)
})

usersRouter.get('/:id', async (request, response) => {
    return getUserController.handle(request, response)
})

export { usersRouter }