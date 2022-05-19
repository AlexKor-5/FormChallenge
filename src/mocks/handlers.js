import { rest } from 'msw'

export const handlers = [
    rest.post('/overview', (req, res, ctx) => {
        return res(ctx.status(200))
    }),
]
