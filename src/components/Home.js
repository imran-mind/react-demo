import React from 'react';
import Profile from './Profile';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            users:[
                {
                    name: "Inam bhai",
                    mobile: "7971960116",
                    occupation:"Front End Engineer",
                    image:"https://thumb.ibb.co/hztdSd/IMG_20180519_134302714_HDR.jpg",
                },
                {
                    name: "imran",
                    mobile: "8871960116",
                    occupation:"Backend Engineer",
                    image:"https://thumb.ibb.co/eYhmfy/6.jpg"
                },
                {
                    name: "Silver MacGrow",
                    mobile: "9771960116",
                    occupation:"Full Stack Engineer",
                    image:"https://thumb.ibb.co/ic11DJ/3.jpg",
                   
                },
                {
                    name: "Bagul sahab",
                    occupation:"Mobile Engineer",
                    mobile: "9671960116",
                    image:"https://thumb.ibb.co/diuGfy/9.jpg",
                   
                },
                {
                    name: "Bhaiyu",
                    mobile: "9671960116",
                    occupation:"Front Engineer",
                    image:"https://thumb.ibb.co/fS6e0y/15.jpg",
                   
                },
                {
                    name: "Amir",
                    mobile: "9671960116",
                    occupation:"Full Stack Engineer",
                    image:"https://thumb.ibb.co/dndOtJ/8fb4e6b0_2548_4858_9c6c_4761b1d87b19.jpg",
                    expense:4500,
                    isApplicable:true
                },
                {
                    name: "Azhar",
                    mobile: "9671960116",
                    occupation:"Mobile Engineer",
                    image:"http://lorempixel.com/400/200/sports/9/",
                   
                },
               
               
                {
                    name: "Mr.Marchant",
                    occupation:"Hr Excutive",
                    mobile: "9971960116",
                    image:"http://lorempixel.com/400/200/sports/10/",
                   
                },
                {
                    name: "Mr KK",
                    mobile: "9671960116",
                    occupation:"Market Researcher",
                    image:"http://lorempixel.com/400/200/sports/5/",
                    
                },
                {
                    name: "Mr.Dalal",
                    occupation:"Market Researcher",
                    mobile: "9671960116",
                    image:"http://lorempixel.com/400/200/sports/1/",
                    
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>Haweli Members</h1>
                {   
                    this.state.users.map((user)=>
                        <Profile 
                         name={user.name}
                         occupation={user.occupation}
                         mobile={user.mobile}
                         image={user.image}
                        
                         />
                        // <li key={user.mobile}>{user.name} :  {user.mobile} </li>
                    )
                }
            </div>
        )
    }

}

export default Home;