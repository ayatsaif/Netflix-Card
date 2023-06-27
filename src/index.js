import React from 'react';
import ReactDOM from 'react-dom';
import Card from './component/Card';
import Sdata from "./component/Sdata";
import "./index.css";

// fat arrow function is used 
const nCard = (val) => {
  return (
    <Card
      key={val.id}
      series_name={val.series_name}
      image={val.imgsrc}
      title={val.title}
      link={val.link}
    />
  )
}


ReactDOM.render(

  <React.Fragment>
    <h1 className="heading_style"> Top 10 Netflix  Series/Movies</h1>

    {Sdata.map(nCard)}

  </React.Fragment>,
  document.getElementById("root")



);
