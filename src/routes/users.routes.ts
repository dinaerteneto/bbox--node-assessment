import { Router } from 'express'
import { createUserController } from '../useCases/users/CreateUser'
import { deleteUserController } from '../useCases/users/DeleteUser'
import { getUsersController } from '../useCases/users/GetUsers'
import { getUserController } from '../useCases/users/GetUser'

const usersRouter = Router()

usersRouter.post('/', async (request, response) => {
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