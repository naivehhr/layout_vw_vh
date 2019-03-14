import React, { Component } from "react"

export default class Card extends Component {
  render() {
    return (
      <div className="card-wrap">
        <div className="card-title">
          【杂谈】高大上的陷阱：总要有人做面子，也总要有人做里子
        </div>
        <div className="img-wrap">
          <img src="http://pic.k73.com/up/article/2016/0617/160644_30328304.jpg" />
        </div>
        <div className="tools-bar">
          <button className="likes">
            <span>赞同</span>
          </button>
          <img src={require("./like.png")} />
        </div>
      </div>
    )
  }
}
