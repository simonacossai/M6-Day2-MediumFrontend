import React from "react";
import { Link } from 'react-router-dom'
import "./styles.scss";
import { withRouter } from "react-router-dom";

class ArticleItemDetails extends React.Component {

  render() {
    return (
      <div className={"pr-3"}>
        <div className={"d-flex align-center mb-2"}>
          <img
          alt="cover"
            style={{ width: "20px", height: "20px" }}
            src={
              "https://miro.medium.com/fit/c/20/20/1*xF11-TSkpJSCgLc75f-DFw.jpeg"
            }
          />
{this.props.article &&
          <span className={"author"}>
            <a href="/">
              <b>{this.props.article.author.name} </b> in <b>Better Advice</b>
            </a>
          </span>
  }
        </div>
          {this.props.article && 
          <span
            className={"heading"}
            style={{
              fontSize: this.props.headingFont === "small" ? "16px" : "22px",
              lineHeight: this.props.headingFont === "small" ? "20px" : "28px",
            }}
            onClick={() => this.props.article && this.props.history.push('/read/' + this.props.article._id)}
          >
            {this.props.article.headLine} 
          </span>
  }
  

        {this.props.article && (
          <div className={"subheading"}>
            <p>
              <a href="/">{this.props.article.subHead}</a>
            </p>
          </div>
        )}
        <div className={"d-flex align-baseline justify-between mt-2"}>
          <h4 className={"date"}>
            <div className={"d-flex"}>
              <span>Oct 16, 2020</span>
              <div>
                <span>
                  <span>·</span>
                </span>
              </div>

              <span>
                <span>4 min read</span>
              </span>
            </div>
          </h4>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleItemDetails);
