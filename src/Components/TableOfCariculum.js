import React, { useEffect, useState} from 'react'
import axios from 'axios';
import Pagination from './Pagination';
//import FormPdf from './FormPdf';
import { useNavigate } from 'react-router-dom';
import {createStackNavigator} from 'react-navigation';
// import FormPdf from './FormPdf';
export default function TableOfCariculum(props) {
  const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);// No of Records to be displayed on each page   
    const [recordsPerPage] = useState(10);
    const [data_list, setData] = useState([]);
    const [courseId,setId]=useState([])
    useEffect(() => {
      async function fetchData() {
        const response = await axios.get('http://127.0.0.1:5000/set_data');
        setData(response.data);
      }
      fetchData();
    }, []);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    //Records to be displayed on the current page
    const currentRecords = data_list.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data_list.length / recordsPerPage);

    function sendIdToFlask(id) {
      axios.post("http://127.0.0.1:5000/send_data",{ "id": id })
        .then(response => console.log(setId(response.data)))
        .catch(error => console.log(error));
        // alert(id);
        this.props.navigation.navigate('/FormPdf',{ "id": id });
    }
  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <td>ID</td>
            <td>Department</td>
            <td>Semester</td>
            <td>Year</td>
            <td>Course Code</td>
            <td>Course Name</td>
            <td>Course Detail & PDF</td>
          </tr>
        </thead>
        <tbody>
          {data_list ? 
          data_list.map(item => (
            <tr key={item[0]}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
              <td>{item[3]}</td>
              <td>{item[4]}</td>
              <td>{item[5]}</td>
              <td><button onClick={() => sendIdToFlask(item[0])}>Show Details</button></td>
            </tr>
          )): 'Loading...'}
        </tbody>
      </table>
       <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Pagination>
      </div>
  )
}
