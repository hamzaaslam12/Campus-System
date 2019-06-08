import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getPost } from '../STORE/ACTION/action';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
          container: {
            display: 'flex',
            flexWrap: 'wrap',
          },
          button: {
            margin: theme.spacing.unit,
          },
          root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
          },
          card: {
            minWidth: 275,
          },
          bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
          },
          title: {
            fontSize: 14,
          },
          pos: {
            marginBottom: 12,
          },
        });

        
class Jobs extends Component {
      constructor(){
        super();
          this.state = {}
}

componentDidMount() {
          console.log("event runnig")
          this.props.getPostR();
}
      
postJob1 = () => {

console.log('posting job');
this.props.postJob2(this.state);
}  
    

  render() {
    return (
      <div>
        <h1>JOBS</h1>

        {this.props.wer ? (
    this.props.wer.map(row => {
    return(
      <Card className={this.props.card}>
            <CardContent>
              <Typography className={this.props.title} color="textSecondary" gutterBottom>
                JOB FOR {row.post}
              </Typography>
              <Typography variant="h5" component="h2">
               COMPANY : {
                  row.coName  
               }
               </Typography>
              <br />
              <Typography className={this.props.pos} color="textSecondary">
              EMAIL: {
                 row.email
               }

            <br />
            <br />

               SALARY : {
                 row.salary
               }
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">APPLY</Button>
            </CardActions>
          </Card>
      
    )
  })
) : (<h3>NO JOB IS POSTED</h3>) 
}

      </div>
    );
  }
}

function mapStateToProp(state) {
          return ({
            xyz: state.root.users,
            wer: state.root.post,
        
          })
        }
        
        function mapDispatchToProps(dispatch) {
          return ({
            getPostR: () => {
              dispatch(getPost())
            },
          });
        };
        
export default withStyles(styles)(connect(mapStateToProp, mapDispatchToProps)(Jobs));