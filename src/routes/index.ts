import { Router } from 'express'

import { usersRouter } from './users.routes'
import { projectsRouter } from './projects.routes'

const router = Router()

router.use('/users', usersRouter);
router.use('/projects', projectsRouter);

export { router }