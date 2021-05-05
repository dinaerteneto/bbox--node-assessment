import { GetProjectController } from "./GetProjectController";
import { GetProjectUseCase } from "./GetProjectUseCase";

const getProjectUseCase = new GetProjectUseCase()
const getProjectController = new GetProjectController(getProjectUseCase)

export { getProjectUseCase, getProjectController }
