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
                    image:"https://thumb.ibb.co/ka0NLy/inambhai.jpg",
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
                    name: "Mr.Collector",
                    occupation:"Mobile Engineer",
                    mobile: "9671960116",
                    image:"https://thumb.ibb.co/cGadtJ/shailesh.jpg",
                   
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
                    image:"https://thumb.ibb.co/ka0NLy/inambhai.jpg",
                    expense:4500,
                    isApplicable:true
                },
                {
                    name: "Azhar",
                    mobile: "9671960116",
                    occupation:"Mobile Engineer",
                    image:"https://thumb.ibb.co/fv9hLy/azhar.jpg",
                   
                },
               
               
                {
                    name: "Mr.Marchant",
                    occupation:"Hr Excutive",
                    mobile: "9971960116",
                    image:"https://thumb.ibb.co/d57rDJ/marchant.jpg",
                   
                },
                {
                    name: "Mr KK",
                    mobile: "9671960116",
                    occupation:"Market Researcher",
                    image:"https://thumb.ibb.co/cdisLy/kk.jpg",
                    
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
                        <Profile key={user.name}
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