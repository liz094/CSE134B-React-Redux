import React from 'react';
import {IndexLink} from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>DejaDelivery is a client-side web application created by Christine Dai, Yi Yang and Lin Zhou in Winter 2018</p>

        <IndexLink to ="/">Back</IndexLink>
      </div>
    );
  }
}

export default AboutPage;
