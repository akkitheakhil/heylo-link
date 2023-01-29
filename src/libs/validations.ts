import { z } from "zod";

export const urlValidation = z.string().url();
