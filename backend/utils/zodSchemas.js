const { z } = require("zod");

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

module.exports = {
    signInSchema,
    signUpSchema
}