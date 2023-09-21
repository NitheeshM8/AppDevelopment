import React from 'react';
import './Admin.css';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
function AdminDashboard() {
  return (
    <div id="main">
  <div>
  <h2 id="h2">OVERVIEW </h2>
  </div>
        <div>
        <div id="overview">
        <div className="one">
        <img id="truck" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_qNlEpGck3EgtxAwXRZkDPrworH9YnAMe6QtJINOdbN7abJ4Z64lMjvlN-FtDZMXNq8&usqp=CAU"/>
        <h5>Total number of Students Enrolled</h5>
        <h6>500</h6>
        </div>
        </div>   
        <div id="overview">
        <div className="two">
        <img id="truck" src="https://icon-library.com/images/subject-icon/subject-icon-18.jpg"/>
        <h5>Total Number of Subjects offered</h5>
        <h6>200</h6>
        </div>
        </div>   
        <div id="overview">
        <div className="three">
        <img id="truck" src="https://img.favpng.com/8/3/7/apprendimento-online-computer-icons-course-educational-technology-learning-png-favpng-7B4Dqihzd05XStsSBK7Sdvqiy.jpg"/>
      
        
        <h5>Enrolled Courses by Students</h5>
        <h6>100</h6>
        </div>
        </div>   
        <div id="overview">
        <div className="four">
        <img id="truck" src="https://cdn3.iconfinder.com/data/icons/team-management/136/28-512.png"/>
        <h5>Total number of Instructors</h5>
        <h6>90 </h6>
        </div>
        </div>
        </div>  
        
        <div id="div2">
        <div className="booking-list">
        <h3 id="det">ENROLLED STUDENT DETAILS</h3>     
        <table id="home-table">
        <tr id="home-tr">
        <th id="home-th">STUDENT ID</th>
        <th id="home-th">DEPT</th>
        <th id="home-th">ENROLLED COURSES</th>
        <th id="home-th">GRADE</th>
        </tr>
        <tr>
        <td id="home-td">727821tuit127</td>
        <td id="home-td">RUPA</td>
        <td id="home-td"> Java</td>
        <td id="home-td">A</td>
        </tr>
        <tr>
        <td id="home-td">727821tuit139</td>
        <td id="home-td">SIVA</td>
        <td id="home-td"> RDBMS</td>
        <td id="home-td">O</td>
        </tr>
        <tr>
        <td id="home-td">727821tuit110</td>
        <td id="home-td">NITHEESH</td>
        <td id="home-td"> C++</td>
        <td id="home-td">A+</td>
        </tr>
        
        </table>
        </div>
        </div>
        <div className="divMine">
        <h4 id="hp">COURSES ENROLLED CHART</h4>    
        <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['Course 1', 'Course 2', 'Course 3'],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [2, 5, 3],
        },
      ]}
      width={500}
      height={300}
    />
    </div>
        <div className="divMine1">
        <h4 id="hp1">SUBJECTS ENROLLED CHART</h4>    
        <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: 'Theory' },
              { id: 1, value: 15, label: 'Practical' },
              { id: 2, value: 20, label: 'Both' },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </div>
        
    </div>
  );
}

export default AdminDashboard;