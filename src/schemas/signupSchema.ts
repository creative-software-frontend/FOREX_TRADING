import { z } from 'zod'

export const signupSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
})

export type SignupForm = z.infer<typeof signupSchema>
