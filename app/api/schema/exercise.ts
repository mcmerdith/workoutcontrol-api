import { ExerciseSet } from "./exercise_set";

export interface Exercise {
  /**
   * Unique ID for the exercise
   */
  id: number;
  /**
   * The name of the exercise
   */
  name: string;
  /**
   * A description of the exercise (optional)
   */
  description: string | null;
  /**
   * The sets
   */
  sets: ExerciseSet[];
}

export namespace DTO {
  /**
   * CREATE TABLE exercise (
   *   id INT AUTO_INCREMENT,
   *   workout_id INT NOT NULL,
   *   name VARCHAR(255) NOT NULL,
   *   description VARCHAR(1024),
   *   PRIMARY KEY (id),
   *   FOREIGN KEY (workout_id) REFERENCES workout(id)
   * );
   */
  export interface Exercise {
    id: number | null;
    workoutId: number;
    name: string;
    description: string;
    link_id: number | null;
  }
}
