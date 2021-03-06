import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'


export class GetStarted extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };
    render(){
        const { values, handleChange } = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                     title="Personal Details"
                     style={{textAlign:'center' }}
                     showMenuIconButton={false}
                     />
                    <div style={styles.fields}>
                    <TextField
                     style={styles.fields}
                     hintText="Enter your first name"
                     floatingLabelText="First Name"
                     onChange={handleChange('firstName')}
                     defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                     hintText="Enter your last name"
                     floatingLabelText="Last Name"
                     onChange={handleChange('lastName')}
                     defaultValue={values.emaile}
                    />
                    <br/>
                    <TextField
                     hintText="Enter your number"
                     floatingLabelText="Phone No"
                     onChange={handleChange('phone no')}
                     defaultValue={'xxxxxxxxxx'}
                    />
                    </div>
                    <br/>
                    <div className='button'style={{textAlign:'center'}}>
                    <RaisedButton
                     label="Continue"
                     primary={true}
                     style={styles.button}
                     onClick={this.continue}
                    />
                    </div>


                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}
const styles = {
    button:{
        margin: 15,
        textAlign:'center',
    },
    fields:{
        textAlign: 'center',
    }

}