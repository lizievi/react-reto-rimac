import { Bs1Circle } from "react-icons/bs";
// import { Bs1CircleFill } from "react-icons/bs";
// import { Bs2Circle } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";

const Plan = () => {
  return(
  <div>
    <section className="border w-10 h-10">
      <ol className="h-50 bg-pink-500">
        <li>
          <span ><Bs1Circle /></span>
          {/* <span className=""><Bs1CircleFill /></span> */}
          {/* <Link to=''>Datos</Link> */}
          <a href=""></a>
          <p>bienvenidos al plan</p>
          
        </li>

        <li>
          {/* <span><Bs2Circle /></span> */}
          <span><Bs2CircleFill /></span>
          {/* <Link to=''>Arma tu plan</Link> */}
        </li>
      </ol>
    </section>
    <section>

    </section>
    <section></section>
  </div>
  )
}

export default Plan