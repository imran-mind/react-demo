import React from 'react';
import { Modal } from 'react-modal';

class Profile extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <section>
                <div>
                    Name : {this.props.name} <br/>
                    Profession :{this.props.occupation} <br/>
                    mobile :{this.props.mobile} <br/>
                </div>
                <div>
                    <img src={this.props.image} />
                </div>
            </section>
        )
    }
}

export default Profile;