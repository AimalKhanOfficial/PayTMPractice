const express = require('express');
const { z } = require('zod');
const router = express.Router();

const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5)
});

const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5),
    firstName: z.string().min(1),
    lastName: z.string().min(1)
});

router.post('/sign-in', (req, res) => {
    const parsedSchema = signInSchema.safeParse(req.body);
    if (!parsedSchema.success) {
        return res.json('validation error');
    }
    return res.json('signin endpoint hit');
})

router.post('/sign-up', (req, res) => {
    const parsedSchema = signUpSchema.safeParse(req.body);
    if (!parsedSchema.success) {
        return res.json('validation error');
    }
    return res.json('signup endpoint hit');
})

module.exports = router;