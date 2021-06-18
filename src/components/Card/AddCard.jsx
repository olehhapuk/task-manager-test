import React, { Component } from "react";
import Avatar from "../../image/avatar.png";
import {v4} from "uuid"
export default class AddCard extends Component {
  state = {
    priority: "Medium",
    nickname: "",
    text: "",
  };

  
  handleChange = (e) => {
      this.setState({
       [e.target.name] : e.target.value
      })
  };

  handleSubmit =(e)=> {
      e.preventDefault()
      const cardData ={
          ...this.state, date:new Date().toLocaleDateString(),
          id : v4()
      }
      
      this.props.onAddCard(cardData)
  }
  
  

  render(){

    const {priority,nickname,text} = this.state;


    return (
      <div className="max-w-xs border-2 p-3 text-gray-600 ">
        <form onSubmit={this.handleSubmit}>
          <div className="flex justify-between ">
            <select 
             value = {priority}
             onChange={this.handleChange}
             name="priority"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            {/* <button type="button">Options</button> */}
          </div>

          <input
            type="text"
            className="my-5 font-semibold text-black border border-black rounded"
            placeholder="Content"
            value = {text}
            onChange={this.handleChange}
            name="text"
          />

          <div className="flex justify-between">
            <div className="flex items-center ">
              <div className="rounded-full overflow-hidden w-10 h-10">
                <img src={Avatar} alt="avatar" className="" />
              </div>
              <div>
                <input
                  type="text"
                  className="pl-3 w-full "
                  placeholder="Name"
                  name ="nickname"
                  value = {nickname}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="flex items-center">
              {/* <img src={Clock} alt="date" className="pr-2" />
              <span>{new Date().toLocaleDateString()}</span> */}
              <button type="submit">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
