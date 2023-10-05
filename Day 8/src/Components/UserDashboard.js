<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import './InstructorDashboard.css'; // Create a CSS file for student styles
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function StudentHomepage() {
  const username = useSelector((state) => state.user.user);
  const userType = useSelector((state) => state.user.userType);
  const [courses, setCourses] = useState([
    // Sample course data for the student
    {
      id: 1,
      title: "Introduction to Programming",
      instructor: "Prof. Smith",
      grade: "A",
      attendance: 85,
    },
    {
      id: 2,
      title: "Web Development Fundamentals",
      instructor: "Dr. Johnson",
      grade: "A-",
      attendance: 92,
    },
    // Add more courses as needed
  ]);

  useEffect(() => {
    // Fetch the student's enrolled courses or other relevant data
    // You can replace this with an API call or fetching data from localStorage
  }, []);

  const barChartData = courses.map((course) => ({
    title: course.title,
    attendance: course.attendance,
    grade: course.grade,
  }));

  return (
    <div id="student-homepage">
      <div className="overview">
        <h2>Welcome, {username}!</h2>
        <p>Your Student Dashboard</p>
      </div>

      <div className="dashboard-section">
        <div className="courses-section">
          <h2>Enrolled Courses</h2>
          <table className="courses-table">
            <thead>
              <tr>
                <th>COURSE TITLE</th>
                <th>Instructor</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.instructor}</td>
                  <td>{course.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="attendance-chart">
          <h2>Attendance Chart</h2>
          <BarChart width={400} height={200} data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="attendance" fill="#8884d8" name="Attendance" />
          </BarChart>
        </div>

        <div className="grade-chart">
          <h2>Grade Chart</h2>
          <BarChart width={400} height={200} data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="grade" fill="#82ca9d" name="Grade" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default StudentHomepage;
=======
import React, { useState, useEffect } from 'react';
import './InstructorDashboard.css'; // Create a CSS file for student styles
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function StudentHomepage() {
  const username = useSelector((state) => state.user.user);
  const userType = useSelector((state) => state.user.userType);
  const [courses, setCourses] = useState([
    // Sample course data for the student
    {
      id: 1,
      title: "Introduction to Programming",
      instructor: "Prof. Smith",
      grade: "A",
      attendance: 85,
    },
    {
      id: 2,
      title: "Web Development Fundamentals",
      instructor: "Dr. Johnson",
      grade: "A-",
      attendance: 92,
    },
    // Add more courses as needed
  ]);

  useEffect(() => {
    // Fetch the student's enrolled courses or other relevant data
    // You can replace this with an API call or fetching data from localStorage
  }, []);

  const barChartData = courses.map((course) => ({
    title: course.title,
    attendance: course.attendance,
    grade: course.grade,
  }));

  return (
    <div id="student-homepage">
      <div className="overview">
        <h2>Welcome, {username}!</h2>
        <p>Your Student Dashboard</p>
      </div>

      <div className="dashboard-section">
        <div className="courses-section">
          <h2>Enrolled Courses</h2>
          <table className="courses-table">
            <thead>
              <tr>
                <th>COURSE TITLE</th>
                <th>Instructor</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.instructor}</td>
                  <td>{course.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="attendance-chart">
          <h2>Attendance Chart</h2>
          <BarChart width={400} height={200} data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="attendance" fill="#8884d8" name="Attendance" />
          </BarChart>
        </div>

        <div className="grade-chart">
          <h2>Grade Chart</h2>
          <BarChart width={400} height={200} data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="grade" fill="#82ca9d" name="Grade" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default StudentHomepage;
>>>>>>> a1900e588f2252b25795fec4df5f5a0ab51fc5d3
