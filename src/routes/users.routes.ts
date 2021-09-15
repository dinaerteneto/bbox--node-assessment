import { Router } from 'express'
import {
    makeAddUserController,
    makeReadUserController,
    makeReadUsersController,
    makeDeleteUserController,
    makeUpdateUserController
} from '@/main/factories/controllers';

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

    return makeAddUserController(request, response)
})

usersRouter.delete('/:id', async (request, response) => {
    return makeDeleteUserController(request, response)
})

usersRouter.get('/', async (request, response) => {
    return makeReadUsersController(request, response)
})

usersRouter.get('/:id', async (request, response) => {
    return makeReadUserController(request, response)
})

usersRouter.put('/id:', async (request, response) => {
    return makeUpdateUserController(request, response)
})

export { usersRouter }