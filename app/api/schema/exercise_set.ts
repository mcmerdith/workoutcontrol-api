export interface ExerciseSet {
  /**
   * Unique ID for the set
   */
  id: number;
  /**
   * The number of reps to do
   */
  reps: number;
  /**
   * The weight to be used
   */
  weight: number;
}

export namespace DTO {
  /**
   * CREATE TABLE exercise_set (
   *   id INT AUTO_INCREMENT,
   *   exercise_id INT NOT NULL,
   *   reps INT NOT NULL,
   *   weight DECIMAL(10,2) NOT NULL,
   *   order INT NOT NULL,
   *   PRIMARY KEY (id),
   *   FOREIGN KEY (exercise_id) REFERENCES exercise(id)
   * );
   */
  export interface ExerciseSet {
    id: number;
    exerciseId: number;
    reps: number;
    weight: number;
    order: number;
  }
}
