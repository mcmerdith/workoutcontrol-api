/**
 * ```sql
 * CREATE TABLE workout (
 *   id INT AUTO_INCREMENT,
 *   name VARCHAR(255) NOT NULL,
 *   description VARCHAR(1024),
 *   PRIMARY KEY (id)
 * );
 * ```
 */
type Workout = {
  id: number;
  name: string;
  description: string;
};

/**
 * ```sql
 * CREATE TABLE exercise (
 *   id INT AUTO_INCREMENT,
 *   workout_id INT NOT NULL,
 *   name VARCHAR(255) NOT NULL,
 *   description VARCHAR(1024),
 *   PRIMARY KEY (id),
 *   FOREIGN KEY (workout_id) REFERENCES workout(id)
 * );
 * ```
 */
type Exercise = {
  /**
   * Unique ID for the exercise
   */
  id: number;
  /**
   * Foreign key to the associated workout
   */
  workoutId: number;
  /**
   * The name of the exercise
   */
  name: string;
  /**
   * A description of the exercise
   */
  description: string;
};

/**
 * ```sql
 * CREATE TABLE exercise_link (
 *   id INT AUTO_INCREMENT,
 *   exercise_one INT NOT NULL,
 *   exercise_two INT NOT NULL,
 *   PRIMARY KEY (id),
 *   FOREIGN KEY (exercise_one) REFERENCES exercise(id),
 *   FOREIGN KEY (exercise_two) REFERENCES exercise(id)
 * );
 * ```
 */
type ExerciseLink = {
  /**
   * Unique ID for the link
   */
  id: number;
  /**
   * The ID of the first exercise
   */
  exercise_one: number;
  /**
   * The ID of the second exercise
   */
  exercise_two: number;
};

/**
 * ```sql
 * CREATE TABLE exercise_set (
 *   id INT AUTO_INCREMENT,
 *   exercise_id INT NOT NULL,
 *   reps INT NOT NULL,
 *   weight DECIMAL(10,2) NOT NULL,
 *   order INT NOT NULL,
 *   PRIMARY KEY (id),
 *   FOREIGN KEY (exercise_id) REFERENCES exercise(id)
 * );
 * ```
 */
type ExerciseSet = {
  /**
   * Unique ID for the set
   */
  id: string;
  /**
   * Foreign key to the associated exercise
   */
  exerciseId: number;
  /**
   * The number of reps to do
   */
  reps: number;
  /**
   * The weight to be used
   */
  weight: number;
  /**
   * Sort order (0-indexed, lower comes first)
   */
  order: number;
};
