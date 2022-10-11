import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";


const FLoorPlan = (props) => {
  return (
    <>
      <div><Kitchen /></div>
      <div><LivingRoom /></div>
      <div><Bedroom bedNum="1" /></div>
      <div><Bedroom bedNum="2"/></div>
      <div><Bedroom bedNum="3"/></div>
      <div><Bath /></div>
    </>
);
}

export default FLoorPlan;