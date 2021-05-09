import React,{ Component } from 'react'

export default class col4 extends Component {

    state={
        title: this.props.title,
        time: this.props.time,
        name: this.props.name,
        area: this.props.area,
        email: this.props.email,
        day: this.props.day,
        phone: this.props.phone,
    }

    render() {
        return (
            <div className="Footer-Column4">
                <h2>
                    {this.state.title}
                </h2>
                <hr/>
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
                <p>{this.state.day}</p>
                <p>{this.state.time}</p>
                <p>{this.state.area}</p>
                <p>{this.state.phone}</p>
            </div>
        )
    }
}