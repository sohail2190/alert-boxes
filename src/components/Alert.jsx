import React from 'react';

class Alert extends React.Component{
    constructor(props){
        super(props);
        this.state = {isdismissed:false};
        this.dismissedAlert = this.dismissedAlert.bind(this);
    }

    dismissedAlert(){
        this.setState({
            isdismissed:true
        })
    }

    render(){

        const {children, title, type, id} = this.props;

        return this.state.isdismissed ? null : (
            <>
            <div className={ ` toast toast--${type?type : 'info'} ` }>
            <h1 id={id}> {title} </h1>
            <p>{children}</p>
            <button className='toast-button' onClick={this.dismissedAlert}>
                <span>x</span>
            </button>

            </div>
            </>
        )
    }

}

export default Alert;