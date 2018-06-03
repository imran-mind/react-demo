import React from 'react';
import { Modal } from 'react-modal';

class Profile extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <section>
                <div className="row">
                    <div  className="col-sm-4">
                    Name : {this.props.name} <br />
                    Profession :{this.props.occupation} <br />
                    mobile :{this.props.mobile} <br />
                    </div>
                    <div className="col-sm-8">
                    <img src={this.props.image} />
                    </div>
                   
                </div> <br/>
               
            </section>
        )
    }
}

export default Profile;