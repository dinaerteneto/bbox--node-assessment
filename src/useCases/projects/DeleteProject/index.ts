import { DeleteProjectController } from "./DeleteProjectController";
import { DeleteProjectUseCase } from "./DeleteProjectUseCase";

const deleteProjectUseCase = new DeleteProjectUseCase()
const deleteProjectController = new DeleteProjectController(deleteProjectUseCase)

export { deleteProjectUseCase, deleteProjectController }
