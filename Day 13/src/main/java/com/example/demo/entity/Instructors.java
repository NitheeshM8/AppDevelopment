<<<<<<< HEAD
package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Instructors {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int instructorId;
	private String instructorName;
	private String qualification;
	private String contact;
}
=======
package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Instructors {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int instructorId;
	private String instructorName;
	private String qualification;
	private String contact;
}
>>>>>>> origin/main
