<Book job="developer"/>
<Book job="developer" title=‘random title’/>
const Book = (props)=>{
 {props.job}
 {props.chirldren}
}
const firstBook = {
 img:'',
 title:'title'
}
<Book firstBook={firstBook.img}/>
const {img,title,author} =props
const Book = ({img,title,author,chirldren}) =>{
 return (
  <article>
    <h1>{title}</h1>
    {chirldren}  ==========>props.chirldren
  </article>
 )
}
<Book title='title'>
 <p>loremmmmmm</p> ========(chirldren)
</Book>
============================
BookList

const names = ['dragon','peter'];
const newName= names.map(name)=>{
 console.log(name)
 return <h1>{name}</h1>
}
{books.map((book,index)=>{
 const {img, title,author} = book;
 return(
  //<Book img={img}></Book>
  <Book key={index}  book={book}</Book> ======>      props.book
  <Book key={index}  {...book}</Book>  ======> props
 )
})}
======Events========
const clickHandler = (e) =>{
  alert('hello world');
  console.log(e);
  console.log(e.target);
}
const clickHandler = (author) =>{
  alert('hello world' + author);
}
const Book = ({img,title,author,chirldren}) =>{
 //attribute,eventHandler
//onClick,OnMouseOver
 
 return (
  <article>
    <h1>{title}</h1>
    {chirldren}  ==========>props.chirldren
   <button type='button' onClick={clickHandler}>click me</button>
   <button type='button' onClick={()=>console.log(title))}>click me</button>
   <button type='button' onClick={(()=>complexExample(author)))}>click me</button>

  </article>
 )
}
===============UseState======================
import React,{useState} from 'react'

const UseStateBasics=()=>{
 console.log(useState('helloWorld'));
 const [text,setText] = useState('random title');
 let filteredPeople = people.filter((person)=>person.id!==id);
const [person,setPerson] = useState({name:'dragon',age:28})
const changeMessage= () =>{
 setPerson(...person,name:'little dragon');
}







const handleClick = () =>{
 if(text === 'random ttiel'){
 setText('hello world')
 }
 else{
  setText('set TExt');
 }
}
 return (<div>
 <h2>hello world</h2>
 <button onClick={handleClick}>Change me </button>
  <button onClick={()=>setPeople([])}>Change me </button>

 </div>)
}
   2s
setTimeout(()=>{
  setValue(value+1);
  setValue((prevState)=>{
    return prevState +1;
    
  })
},2000)
============useEffect===================
const [value,setValue] = useState(0);
useEffect(()=>{
 document.title='dragon(${value})'
},[value]);

return <> 
  <h1>value</h1>
  <button onClick={()=>setValue(value+1)}>click me</button>
 </>
 const checkSize = ()=>{
  setSize(window.innerWidth);
 }
 useEffect(()=>{
  window.addEventListener('resize',checkSize)
 })
 const [users,setUsers] = useState([]);
const getUser = async()=>{
 const response = await fetch(url);
 const users = await response.json();
 //setUsers(users)
 console.log(users);
}
useEffect(
 ()=>{
   getUser();

 },[]
)
{users.map((user)=>{
 return <li></li>
})}
