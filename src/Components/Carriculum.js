import React, { useState } from 'react'
//  npm install axios
 import axios from 'axios';
//  import 
import * as XLSX from "xlsx";
export default function Carriculum() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [data, setdata] = useState({});
      function addfile(event) {
        let file = event.target.files[0];
        let fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = (event) => {
          let arrayBuffer = fileReader.result;
          var workbook = XLSX.read(arrayBuffer, { type: "binary" });
          var first_sheet_name = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[first_sheet_name];
          console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
          var arraylist = XLSX.utils.sheet_to_json(worksheet, { raw: true });
          setdata(arraylist)
        }
      }
    function showOpenFileDialog () {
            var input = document.createElement('input');
            input.type = 'file';
            input.onchange = (e) => {
                let files = input.files; 
                setSelectedFile(files[0].name);
                const file = e.target.files[0];
                addfile(e);
            }
            input.click();
    }
    function uploadFile() {
          const url = 'http://127.0.0.1:5000/getDataFromReact';
          const progressing=document.getElementById('progressbarvalue');
          const progressblue=document.getElementById('progressBlue');
          var formData=new FormData();
          formData.append('fileName',JSON.stringify(selectedFile))
          formData.append('ArrayList',JSON.stringify(data))
          const config={
            onUploadProgress: function(progressEvent) 
            {
              const percentCompleted=Math.round(progressEvent.loaded/ progressEvent.total)*100; 
              progressblue.setAttribute('value',percentCompleted);
              progressing.textContent=percentCompleted;
              if(percentCompleted===100){
                 progressing.textContent='Upload Completed!';
              }
            }
          }
          axios.post(url, formData,config)
               .then(res => console.log(res))
               .catch(err =>alert(err + "  OOPS! BAD REQUEST  "))
        };
  return (
    <>
      <nav className="container navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02" >
              <button type="button" className="btn btn-dark"  style={{margin: 8}}>All</button>
              <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal" style={{margin: 8}}>Upload Carriculum</button>
              <button type="button" className="btn btn-secondary">Large button</button>
              <form className="form-inline my-2 my-lg-0" style={{margin: 100}}>
                  <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
          </div>
      </nav>
      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Upload Carriculum</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <label >Degree</label>
                    <select  className="form-select" aria-label="Default select example">
                      <option value="1">CS</option>
                      <option value="2">IT</option>
                    </select>
                    <label>Upload Your File </label>
                    <div className="container" id='modell'>
                            <div id='browsing'>
                                <h1><i className="fa fa-download" aria-hidden="true"></i></h1> 
                                <button className="btn btn-primary" onClick={showOpenFileDialog}>Import Data</button>
                            </div>
                    </div>
                    <div>
                      <p>Your File Name: {selectedFile} </p>
                    </div>
                    <div>
                      <label id='progressbarvalue' htmlFor='progressBar'>0 %</label>
                      <progress id='progressBlue' value='0' max='100'></progress>
                    </div>
                </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button className="btn btn-primary" onClick={uploadFile}>Upload</button>
              </div>
            </div>
          </div>
      </div>
      {/* <table className="container">
        <thead>
          <tr>
            <th scope="col">x</th>
            <th scope="col">PhoneNo</th>
          </tr>
        </thead>
        <tbody>
         {items.map((d) => (
            <tr key={{d[0].data}}>
              <td>{d[1].x}</td>
              <td>{d[2].PhoneNo}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </>
  )
}
