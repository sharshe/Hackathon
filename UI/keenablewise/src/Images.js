import React, { Component } from 'react';

class Images extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         UserId:'',
         Title:'',
         Body:''         
      };
    };
    
  render() {
      const { UserId, Title, Body } = this.state;
    return (
      <div>
          <form>
            <div>
                <input type="text" name="UserId" value={UserId} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type="text" name="Title" value={Title} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type="text" name="Body" value={Body} onChange={this.changeHandler}/>
            </div>

          </form>
      </div>
    );
  }
}

export default Images;
