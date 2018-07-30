import React from 'react';

class LeftCol extends React.Component {
  constructor (props) {
    super (props);
  }

  formatHours () {
    let str = '';
    for (let key in this.props.hours) {
      str += key + ' \n';
      str += this.props.hours[key] + ' \n';
      str += `\n`;
    }

    return str;
  }

  render () {
    return (
      <div id="leftcol">
        <div id="private">
          <h2> Private dining </h2>
          <a href={this.props.private_url}>
            {this.props.private_url}
          </a>
        </div>

        <div id="style">
          <h2> Dining Style </h2>
          <div>{this.props.style}</div>
        </div>

        <div id="cuisines">
          <h2> Cuisines </h2>
          <div>{this.props.cuisines.join (', ')}</div>
        </div>

        <div id="hours">
          <h2> Hours of operation </h2>
          <div>{this.formatHours ()}</div>
        </div>

        <div id="telephone">
          <h2> Phone number </h2>
          <div>{this.props.telephone}</div>
        </div>

        <div id="website">
          <h2> Website </h2>
          <div> {this.props.website} </div>
        </div>

        <div id="paymentOptions">
          <h2> Payment options </h2>
          <div>{this.props.payment_options.join (', ')}</div>
        </div>

        <div id="dressCode">
          <h2> Dress code </h2>
          <div>{this.props.dress_code}</div>
        </div>

        <div id="execChef">
          <h2> Executive chef </h2>
          <div>{this.props.chef}</div>
        </div>

        <div id="catering">
          <h2> Catering </h2>
          <div>{this.props.catering}</div>
        </div>
      </div>
    );
  }
}

export default LeftCol;
