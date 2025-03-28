import { createDirectus, rest } from '@directus/sdk';
import CONFIG from './config';

const directus = createDirectus(CONFIG.directusUrl).with(
    rest({
        onRequest: options => ({ ...options, cache: 'no-store' }),
    })
)

export default directus