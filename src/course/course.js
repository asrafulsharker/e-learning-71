import React,{useContext} from 'react';
import {RoomContext} from './context';

const getUnique=(items, value)=>{
    return [...new Set(items.map(item=> item[value]))];
}
export default function Course({rooms}){
    const context = useContext(RoomContext);
    const{
        handleChange,type,price,minPrice,maxPrice
    } = context;

    let types = getUnique(rooms, "type");
     //add all
     types=["all", ...types];
     types = types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    });

    return(
        <section className="filter-container">
            <title title="search rooms"/>
            <form className="filter-form">
            {/* select type */}
            <div className="form-group">
                <label htmlFor="type">room type</label>
            <select 
            name="type" 
            id="type" 
            value={type} 
            className="form-control" 
            onChange={handleChange}>
                {types}
               
            </select>
            </div>

           {/*  end select type */}

                      {/* room price */}
                      <div className="form-group">
               <label htmlFor="price">
                   room price ${price}
               </label>
               <input type="range" 
               name="price" 
               min={minPrice} 
               max={maxPrice} 
               id="price" value={price} 
               onChange={handleChange} 
               className="form-control"/>
           </div>
           {/* end room price */}

            </form>
        </section>    
    )
}
