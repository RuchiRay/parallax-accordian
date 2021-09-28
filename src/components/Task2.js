import React,{useState} from 'react'
import { FiChevronDown ,FiChevronRight} from 'react-icons/fi'
export const Task2 = () => {
    const [week1, setWeek1] = useState(true)
    const [week2, setWeek2] = useState(true)
    const [week3, setWeek3] = useState(true)
    const handleArrow1 = ()=>{
      setWeek1(!week1)
    }
    const handleArrow2 = ()=>{
      setWeek2(!week2)
    }
    const handleArrow3 = ()=>{
      setWeek3(!week3)
    }
    return (
        <div className='task2'>
            <div className="table">
                <button onClick={()=>handleArrow1()}>Week 1 {week1?<FiChevronDown className='key'/>: <FiChevronRight className='key'/>}</button> 
                <ul className={week1?'open':'close'}>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                </ul>
                <button onClick={()=>handleArrow2()}>Week 2 {week2?<FiChevronDown className='key'/>: <FiChevronRight className='key'/>}</button>
                <ul  className={week2?'open':'close'}>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                </ul>
                <button onClick={()=>handleArrow3()}>Week 3 {week3?<FiChevronDown className='key'/>: <FiChevronRight className='key'/>}</button>
                <ul  className={week3?'open':'close'}>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                </ul>
            </div>
        </div>
    )
}
