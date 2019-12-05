// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, updateByHash, removeByHash } from './hash';
import { limiter, validator, authenticate } from '../../utils';

// Schema
import { createUser } from '../../schemas';

export const router = express.Router();

router.get('/', [ limiter(5, 60 * 1000), authenticate ], get);
router.post('/', [ validator(createUser), authenticate ], post);

router.get('/:userHash', [ authenticate ], getByHash);
router.put('/:userHash', [ authenticate ], updateByHash);
router.delete('/:userHash', [ authenticate ], removeByHash);

export { router as users };
