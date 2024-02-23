import database from "../db";
import { procedure, router } from "../trpc";
import { z } from "zod";

export const appRouter = router({
  workoutList: procedure.query(async () => {
    // const workouts = await database
    //   .connection()
    //   .execute("SELECT * FROM workouts");
    return [{ test: 1 }, { test: 2 }];
  }),
  workoutById: procedure.input(z.number()).query(async (opts) => {
    const id = opts.input;
    // const workout = await database
    //   .connection()
    //   .execute("SELECT * FROM workouts WHERE id = ?", [id]);
    return { test: id }; //workout.rows[0];
  }),
  workoutCreate: procedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      const { name } = opts.input;
      // await database
      //   .connection()
      //   .execute("INSERT INTO workouts (name) VALUES (?)", [name]);
      return { name };
    }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
