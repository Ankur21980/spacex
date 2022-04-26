
import './Card.css';

function Card(props) {
  const var1 =props.launchSuccess;
  const var2 = props.landSuccess;
  return (<>
  
 <div className='container'>
 <div className="Banner">
<img src={props.imgUrl} style={{height:"200px"}}></img>
  </div>
  <div className="Heading">{props.missionName} #{props.flightNumber} </div>
  <div className="generic">
    Mission Ids :{props.missionId}
  </div>
  <div className="generic">
  Launch Year :{props.launchYear}
  </div>
  <div className="generic">
    Successful Launch : {
      var1 ? (<div className='truefalse'>True</div>):(<div className='truefalse'>false</div>)
    }
  </div>
  <div className="generic">
    {  console.log(var2,props.imgurl)}
    Successful Landing :{
    var2 ? (<div className='truefalse'>True</div>):(<div className='truefalse'>false</div>)
}
  </div>
 </div>
  </>
  );

}

export default Card;
