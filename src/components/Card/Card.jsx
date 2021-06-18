import React, { Component } from "react";
import Avatar from "../../image/avatar.png";
import Clock from "../../image/Clock.svg";

export default class Card extends Component {
  render() {
    const {priority, nickname, text, id, date, onDelete} = this.props;
    return (
      <div className="max-w-xs border-2 p-3 text-gray-600">
          <div className="flex justify-between ">
            <span>{priority}</span>

            <button type="button" onClick={() => onDelete(id)}>Delete</button>
          </div>

          <p className="my-5 font-semibold text-black">{text}</p>

          <div className="flex justify-between">
            <div className="flex items-center ">
              <div className="rounded-full overflow-hidden w-10 h-10">
                <img src={Avatar} alt="avatar" className="" />
              </div>
              <div>
                <p className="pl-3 w-full">{nickname}</p>
              </div>
            </div>

            <div className="flex items-center">
              <img src={Clock} alt="date" className="pr-2" />
              <span>{date}</span>

            </div>
          </div>
      </div>
    );
  }
}
