import React from 'react';

class SearchBar extends React.Component {
    state={term:''};

    onInputChange = (event) => {
        this.setState({term:event.target.value})
    };

    onFormSubmit = (event) => {
        event.preventDefault();
    // TODO: Make sure u call
    // callback from parent component

        this.props.onFoSubmit(this.state.term);

    };



    render() {
        return(
            <div className="ui segment" >
              <form onSubmit={this.onFormSubmit} className="ui form">
                  <div className="field">
                      <label>search videos</label>
                      <input
                       type="text"
                       value={this.state.term}
                       onChange={this.onInputChange}

                       />
                  </div>
              </form>
                  
              </div>
            
        );
    }
}

export default SearchBar;
