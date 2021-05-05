import { GetProjectsController } from "./GetProjectsController";
import { GetProjectsUseCase } from "./GetProjectsUseCase";

const getProjectsUseCase = new GetProjectsUseCase()
const getProjectsController = new GetProjectsController(getProjectsUseCase)

export { getProjectsUseCase, getProjectsController }
