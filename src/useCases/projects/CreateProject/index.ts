import { CreateProjectController } from "./CreateProjectController";
import { CreateProjectUseCase } from "./CreateProjectUseCase";

const createProjectUseCase = new CreateProjectUseCase()
const createProjectController = new CreateProjectController(createProjectUseCase)

export { createProjectUseCase, createProjectController }
