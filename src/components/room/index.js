import React from 'react'
import { CirclePie } from '../CirclePie'
import ArrowBox from '../ArrowBox'
import VerticallyCenter from '../VerticallyCenter'
import CoolSticky from '../CoolSticky'
import Menu from '../Menu'
import AlertDialog from '../AlertDialog'
import logo from '../../logo.svg'

function Room() {
   const state = {
     size: 120,
     progressArray: [263, 103],
     strokeWidth: 20,
     circleOneStroke: '#d9edfe',
     circleTwoStroke: 'green',
     progress: 39,
   }
 return (
   <>
     <AlertDialog />
     <Menu />
     <header className='App-header'>
       <CoolSticky />
       <VerticallyCenter />
       <ArrowBox />
       <CirclePie {...state} />
       <img src={logo} className='App-logo' alt='logo' />
       <p>
         Edit <code>src/App.js</code> and save to reload.
       </p>
       <a
         className='App-link'
         href='https://reactjs.org'
         target='_blank'
         rel='noopener noreferrer'
       >
         Learn React
       </a>
       <div>docker Exposing Multiple Ports </div>
       <div>docker run -d -p 3000:80 -p 8080:80 nginx:latest</div>
       <div>docker stop id</div>
       <div>docker ps --help </div>
       <div>docker ps -a</div>
       <div>docker rm containerId</div>
       <div>docker ps -aq </div>
       <div>docker rm $(docker ps -aq) </div>
       <div>
         docker run --name website -d -p 3000:80 -p 8080:80 nginx:latest{' '}
       </div>
       <div>docker start website</div>
       <div>docker stop website </div>
       {/* <div>docker ps --format="ID\\t{{.ID}}\nName\\t{{.Names}}\nImage\\t{{.Image}}\nPorts\\t{{.Ports}}\nCommand\\t{{.Command}}\nCreated\\t{{.CreatedAt}}\nStatus\\t{{.Status}}\n”</div> */}
       <div>export format="docker format"</div>
       <div>docker ps --format= $FORMAT </div>
       <div>
         docker run --name website1 -v $(pwd):/usr/share/nginx/html:ro -p
         8080:80 nginx
       </div>
     </header>
   </>
 )
}

export default Room
