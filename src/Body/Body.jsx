import Services from '../Components/Services/Services';
import './body.css'
import { FaArrowRight } from "react-icons/fa";
import Card from '../UI/Card';


const Body = () => {
    return ( 
        <div>
       <div className='body'>
        <div className="body-container">
            <h1>Your Dream Place</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, tempora.</p>
            <div className="body-flex">
                <div className='first'>
                    <h1>We Love & Live Architecture</h1>
                    <span><p>Our Story</p>
                 <FaArrowRight/>
                    </span>
                </div>
                <div className='second'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Tempore placeat illum eaque dolore quos, molestiae nesciunt
                 quae! Ratione, magni eaque?
                  <br />
                  <br />
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Amet fuga nostrum deleniti ipsam mollitia, molestiae debitis
                 ea repellat adipisci quasi, veritatis explicabo tempore cupiditate facere alias? Consequatur, alias sapiente? Iusto?
                 </p>
                </div>
            </div>
        </div>
       </div>
       <Services/>
</div>

     );
}
 
export default Body;