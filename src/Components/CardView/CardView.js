import React, { Component } from 'react';
import DropDown from '../../utils/DropDown';
import Card from '../Card/Card';
import ExpandCard from '../ExpandCard/ExpandCard';
import ExpandedView from '../ExpandCard/ExpandedView';
import TryItLogo from '../../logo/TryItLogo.png';

import './CardView.css';

export default class CardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTag: 'trending',
      trending: [],
    };
  }

  handleSelectedTag = (e, tag) => {
    e.preventDefault();
    this.setState({
      currentTag: tag,
    });
  };

  filterTags = () => {
    const tries = Object.values(this.props.cards);
    tries.sort((a, b) => b.tries - a.tries);
    console.log(tries);
    return tries.map((card) =>
      card.tags == this.state.currentTag ? (
        <div className="eachCard">
          <ExpandCard>
            <ExpandedView
              id={card.id}
              title={card.title}
              content={card.content}
              tries={card.tries}
              update={this.props.update}
            />
          </ExpandCard>
          <Card title={card.title} tries={card.tries} />
        </div>
      ) : null
    );
  };

  createTrends = () => {
    let tries = Object.values(this.props.cards);
    tries.sort((a, b) => b.tries - a.tries);
    let trends = tries.slice(0, 5);
    return trends.map((card) => (
      <div className="eachCard">
        <ExpandCard>
          <ExpandedView
            id={card.id}
            title={card.title}
            content={card.content}
            tries={card.tries}
            update={this.props.update}
          />
        </ExpandCard>
        <Card title={card.title} tries={card.tries} />
      </div>
    ));
  };

  conditionalRender = () => {
    if (this.state.currentTag === 'trending') {
      return this.createTrends();
    }
    return this.filterTags();
  };

  render() {
    console.log(this.state.currentTag);
    return (
      <section>
        <div className="dropDown">
          <DropDown
            tags={this.props.tags}
            handleSelectedTag={this.handleSelectedTag}
          />
          <div className="add_container">
            <button
              type="button"
              className="addPost"
              onClick={() => this.props.add()}
            >
              <i className="fas fa-plus-circle" />
            </button>
          </div>
        </div>
        <div className="cardHolder">{this.conditionalRender()}</div>
      </section>
    );
  }
}
