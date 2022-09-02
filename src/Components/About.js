import React, {useState} from 'react'

export default function About(props) {
    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor : 'white'
    // });
  //   const [btn, setbtn] = useState('Enable dark mode')

  //  const togglestate = ()=>{
  //    if(myStyle.color==="black"){
  //       setmyStyle({
  //           color: 'white',
  //           backgroundColor : 'black' 
  //       })
  //       setbtn('enable light mode');
  //    }
  //    else{
  //       setmyStyle({
  //           color: 'black',
  //           backgroundColor : 'white' 
  //       })
  //       setbtn('enable dark mode');
  //    }
  //   }
  return (
    
    <div style={{color:props.mode==='dark'?'white':'black'}} className="container my-4">
   
     <h2>About Me</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum animi quod temporibus enim eos nobis earum sit. Vero numquam fugit debitis delectus veritatis explicabo tempore accusamus culpa minima hic reiciendis libero, atque consequatur facere laudantium, ad veniam. Dicta quos veritatis, voluptates quod pariatur aspernatur enim. Hic, quia consequatur. Iusto qui illo rerum dolorum reprehenderit at assumenda culpa voluptatibus earum! Nam voluptatibus, expedita sit ad cumque possimus at, rerum consectetur, nobis molestias iure quam id minima architecto voluptate? Reiciendis, velit quidem obcaecati blanditiis natus illo vel? Perspiciatis minus ad voluptate? Id, temporibus dolorum est doloremque doloribus vitae ut voluptas ipsam recusandae!

      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nesciunt sequi necessitatibus, iure accusantium facilis vel explicabo? Ullam laboriosam optio dicta laborum pariatur voluptates facilis veniam saepe, quae, deleniti vitae qui totam nesciunt ad unde! Aliquam, natus. Nam saepe quia soluta animi vero delectus ea, beatae adipisci velit rem distinctio, vel itaque quos quo doloremque ipsum fuga nisi consequuntur accusamus amet in! Sapiente, perspiciatis dolor. Sit tenetur illo expedita labore similique recusandae mollitia iusto, aut debitis nesciunt reiciendis doloremque impedit, iure pariatur quis fuga tempore vel corrupti? Quasi laborum optio, error sapiente ipsam ipsum voluptatem a excepturi nulla, quae ab!
     </p>
    </div>
    
   
  )
}
