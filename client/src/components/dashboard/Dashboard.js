import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Alert from '../layout/alert';
const Dashboard = ({ getCurrentProfile, auth: {user}, profile: {profile, loading}}) => {

  useEffect(()=> {
    getCurrentProfile()
  },[getCurrentProfile])
  return  (<Fragment>
    <section className='container'>
    <Alert/>
     {loading && profile === null?<Spinner/> :<><h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome { user && user.name }
      </p>
      { !loading && profile?(user && <Fragment><DashboardActions profile={profile} id={user._id}/></Fragment>):<Fragment>
        <p>You have not yet setup a profile, please add some info</p>
        <Link to='/create-profile' className='btn btn-primary my-1'>
          Create Profile
        </Link>
        </Fragment>}</> } 
      
    </section>
   
  </Fragment>) 

 
  
};


Dashboard.protoTypes={
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})



export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
