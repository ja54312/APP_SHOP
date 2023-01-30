import React from 'react'
import Card from "../Card/Card";
import './List.css'

const List = () => {
    const data = [
        {
            id:1,
            img:'https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg',
            img2:'https://images.pexels.com/photos/899740/pexels-photo-899740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:"Vestido Asiatico",
            isNew:true,
            oldPrice:19,
            price:12
        },
        {
            id:2,
            img:'https://images.pexels.com/photos/691234/pexels-photo-691234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2:'https://images.pexels.com/photos/2496451/pexels-photo-2496451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:"Vestido de Seda",
            isNew:true,
            oldPrice:23,
            price:18
        },
        {
            id:3,
            img:'https://images.pexels.com/photos/1149837/pexels-photo-1149837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2:'https://images.pexels.com/photos/1435438/pexels-photo-1435438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:"Top Femenino",
            isNew:false,
            oldPrice:10,
            price:8
        },
        {
            id:4,
            img:'https://images.pexels.com/photos/2205415/pexels-photo-2205415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2:'https://images.pexels.com/photos/2496427/pexels-photo-2496427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:"Ropa Juvenil",
            isNew:false,
            oldPrice:10,
            price:7
        }
    ]

  return (
    <div className="list">
    {data?.map((item) => <Card item={item} key={item.id} />)}
  </div>
  )
}

export default List