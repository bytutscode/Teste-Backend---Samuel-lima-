import joi from 'joi';

export const createProductSchema = joi.object({
    name: joi.string().min(2).max(250).required().messages({
        'string.required': 'The name is required and must have between 2 and 250 characters',
        'string.min': 'The name is required and must have between 2 and 250 characters',
        'string.max': 'The name is required and must have between 2 and 250 characters',
    }),
    category: joi.string().required(),
    status: joi.string(),
    quantity: joi.number()
})