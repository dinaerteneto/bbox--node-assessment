import { GetUsersController } from "./GetUsersController";
import { GetUsersUseCase } from "./GetUsersUseCase";

const getUsersUseCase = new GetUsersUseCase()
const getUsersController = new GetUsersController(getUsersUseCase)

export { getUsersUseCase, getUsersController }
