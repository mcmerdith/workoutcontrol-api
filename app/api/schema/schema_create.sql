CREATE TABLE workout (
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(1024),
  PRIMARY KEY (id)
);

CREATE TABLE exercise (
  id INT AUTO_INCREMENT,
  workout_id INT NOT NULL,
  link_id INT,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(1024),
  PRIMARY KEY (id),
  FOREIGN KEY (link_id) REFERENCES exercise(id),
  FOREIGN KEY (workout_id) REFERENCES workout(id)
);

CREATE TABLE exercise_set (
  id INT AUTO_INCREMENT,
  exercise_id INT NOT NULL,
  reps INT NOT NULL,
  weight DECIMAL(10,2) NOT NULL,
  order INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (exercise_id) REFERENCES exercise(id)
);

CREATE TABLE exercise_link (
  id INT AUTO_INCREMENT,
  workout INT NOT NULL,
  exercise_one INT NOT NULL,
  exercise_two INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (workout) REFERENCES workout(id),
  FOREIGN KEY (exercise_one) REFERENCES exercise(id),
  FOREIGN KEY (exercise_two) REFERENCES exercise(id),
  UNIQUE (workout, exercise_one),
  UNIQUE (workout, exercise_two)
);

-- Signals:
-- 45000: Exercise is already linked
-- 45001: Exercise cannot link to itself

CREATE TRIGGER trg_exercise_link_check_insert
BEFORE INSERT ON exercise_link
FOR EACH ROW
BEGIN
  -- Check if the exercise is linking to itself
  IF NEW.exercise_one = NEW.exercise_two THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Exercise cannot link to itself';
  END IF;
  -- Check if the exercise is part of a link in the other column
  -- Same column check is handled by the UNIQUE constraint
  IF EXISTS (SELECT 1 FROM exercise_link WHERE workout = NEW.workout AND (exercise_one = NEW.exercise_two OR exercise_two = NEW.exercise_one)) THEN
    SIGNAL SQLSTATE '45001' SET MESSAGE_TEXT = 'Exercise is already linked';
  END IF;
END;