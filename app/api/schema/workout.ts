import { Exercise } from "./exercise";

export interface Workout {
  /**
   * Unique ID for the workout
   */
  id: number;
  /**
   * The name of the workout
   */
  name: string;
  /**
   * A description of the workout (optional)
   */
  description: string;
  /**
   * Exercises associated with the workout
   */
  exercises: Exercise[];
}

export namespace DTO {
  /**
   * CREATE TABLE workout (
   *   id INT AUTO_INCREMENT,
   *   name VARCHAR(255) NOT NULL,
   *   description VARCHAR(1024),
   *   PRIMARY KEY (id)
   * );
   */
  export interface Workout {
    id: number;
    name: string;
    description: string;
  }
}
