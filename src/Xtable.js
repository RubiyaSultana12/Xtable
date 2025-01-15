import { useState } from 'react';
import './App.css';
const datatable=
  [
  
      { date: "2022-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-02", views: 150, article: "Article 2" },
  
      { date: "2023-09-02", views: 120, article: "Article 3" },
  
      { date: "2020-09-03", views: 200, article: "Article 4" }
  
  ]
function Xtable() {

  const[sorteddata, setSorteddata]=useState([...datatable]);

  const sortdate=()=>{
    let data=[...sorteddata];
   
    data.sort((a,b) => {
      if(a.date !== b.date) return new Date(b.date)- new Date(a.date);
      // console.log(data)
      return b.views-a.views
  });
  setSorteddata([...data])
  };

  const sortview=()=>{
    let data=[...sorteddata];
    data.sort((a,b) => {
      if(a.views !== b.views) return b.views-a.views;
      // console.log(data)
      return new Date(b.date)- new Date(a.date);

  });
  setSorteddata([...data])
  };


  return (
    <div className="App">
       <h1>Date and Views Table</h1>
       <button onClick={sortdate}>Sort by Date</button>
       <button onClick={sortview}>Sort by Views</button>
       <div className='tabledata'>
        <table>
          <thead>
          <tr>
          <th>Date</th>
            <th>Views</th>
            <th>Article</th>
            
          </tr>
          </thead>
          <tbody>
            {sorteddata.map((item, index)=>(
              <tr key={index}>
          <td>{item.date}</td>
          <td>{item.views}</td>
          <td>{item.article}</td>
          </tr>
            ))}
          
         
           
         
          </tbody>
        </table>
       </div>
    </div>
  );
}

export default Xtable;
