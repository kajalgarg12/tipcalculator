import React,{useState} from 'react'
    function Tip() {
      const [state,setState]=useState([]);
      const [data,setData]=useState({
        name:'',totalamount:0,tip:0,service:0
      });
      const [Noofcustomers,setNoofcustomers]=useState(0);
      
      function Handlechange(e){
       setData({
         ...data,[e.target.name]:e.target.value

       })
       //console.log(data);
      }
      function addcustomer(){
        
      
          data.tip = data.totalamount*data.service;
          setState([...state,data]);
          
      }
      function countcustomer(){
        setNoofcustomers(state.length);
        //Noofcustomers=state.length;

        console.log(Noofcustomers);
      }
      
    return (
       <>
       <main className='container'>
           <div>
           <div className="details container"><br/>
           <h2>Enter the bill amount here</h2>
           
           <div className="input-group mb-3"><br/>
  <input type="number" className="form-control"name="totalamount"  placeholder="bill amount" onChange={Handlechange} aria-label="Username" aria-describedby="basic-addon1" />
</div>
<hr  className="py-1"/>
<div className="input-group mb-3 "><br/> 
            <h6>How Was the Service</h6><br/><br/>  
           <select onChange={Handlechange} name="service" id="tip-percentage">
                <option disabled selected value="0">-- Choose an Option --</option>
                <option value="0.3">30&#37; &#45; Excellent</option>
                <option value="0.15">15&#37; &#45; It was OK</option>
                <option value="0.05">5&#37; &#45; Too Bad</option>
            </select>
            <br/>
            <input type="text" name="name" id=""  placeholder="customer Name" onChange={Handlechange}className="mx-3"/>
           <button onClick={addcustomer}>Add Customer </button>
           </div>
           </div>
           <hr  className="py-1"/>
           <div className="customersList">
               <h5>CUSTOMERS LIST</h5>
               <div name="" id="" >
                 <table >
                   <tr>
                     <th>NAME</th>
                     <th>TIP</th>
                     <th>TOTALBILL</th>
                   </tr>
                   {
                     state.map((ele)=>(
                       <tr>
                         <td>{ele.name}</td>
                         <td>{ele.tip}</td>
                         <td>{ele.totalamount}</td>
                       </tr>
                       
                     ))
                   }
                     
                  
                 </table>
                 </div>   
           </div>
           <hr  className="py-1"/>
           <button  id ="addcustomer"onClick={countcustomer}>NO. OF CUSTOMERS </button>
           <div className="output container my-4 ">
           <div className="w-25 p-1 mx-3">{Noofcustomers} </div>         
           {/* <div type="text" name="" placeholder="tip amount of all" className="w-25 p-1  mx-3" id="" onChange={Handlechange}>1 </div>           
           <div type="text" name="" placeholder="total bill" id="" className="w-25 p-1  mx-3" onChange={Handlechange} > 2</div><br />
           <div type="number" name="" id="" onChange={Handlechange} className="w-25 p-1  mx-3">3</div> 
           <div type="number" name="" id=""  onChange ={Handlechange}className="w-25 p-1  mx-3">4</div> 
           <div type="number" name="" id="" onChange={Handlechange} className="w-25 p-1  mx-3">5</div>  */}
           </div>
           </div>  
       </main>
       
    
 </>
    ) 
}

export default Tip
