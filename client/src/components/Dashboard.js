// This component will display logged in user's account info
// Will also route to other user-specific pages (wardrobe, history)
import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route, Link } from 'react-router-dom';
import Wardrobe from './Wardrobe';
import AccountInfo from './AccountInfo';
import Loading from './Loading';

class Dashboard extends Component {

  render() {
    console.log('this is Dashboard: ', this.props.sqlUser)
    return (
      <BrowserRouter>
        <div className='dashboard'>
          <div className='col-md-3'>
            <div className='dashboard-wrap my-account-section'>
              <div className='dashboard-title'>
                <span>MY ACCOUNT</span>
              </div>
              <div> 
                <NavLink exact activeClassName="active" className="dashboard-link" to='/account' >
                  Dashboard
                </NavLink>
                <NavLink exact activeClassName="active" className="dashboard-link" to='/wardrobe' >
                  Wardrobe
                </NavLink>
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='dashboard-wrap'>
              <div className='dashboard-title'>
                <span>MY DASHBOARD</span>
              </div>
              <div>
                {!this.props.sqlUser ? <Route render={function() {
                alert('You are not login!')
								return <p> Please login!</p>}} /> : <Route exact path='/account' component={() => (<AccountInfo sqlUser={this.props.sqlUser} />)} /> }
                <Route exact path='/wardrobe' component={() => (<Wardrobe />)} />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Dashboard;