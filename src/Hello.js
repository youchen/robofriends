import React, { Component } from 'react';
import 'tachyons'
import './Hello.css'

// class Hello extends Component {
//     render () {
//         return (
//             <div className='tc'>
//                 <h1>Hello</h1>
//                 <p>{this.props.greetings}</p>
//             </div>
//         );
//     }
// }

const Hello = (props) => {
        return (
            <div className='tc'>
                <h1>Hello</h1>
                <p>{props.greetings}</p>
            </div>
        );
}

export default Hello;