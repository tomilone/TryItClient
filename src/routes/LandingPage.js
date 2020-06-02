import React, {
  Component
} from 'react';
import {
  Route
} from 'react-router-dom';
import CardView from '../Components/CardView/CardView';
import ApiService from '../services/tryit-api-service';
import UserContext from '../Context/UserContext';
import Form from '../utils/Form';




export default class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: [],
      cards: [],
      view: false
    }
  }

  componentDidMount() {
    ApiService.getAllCards().then(cards => this.setState({
      cards
    }))
    ApiService.getAllTags().then(tags => this.setState({
      tags
    }))
  }

  add = () => {
    this.setState({
      view: true
    })
  }

  back = () => {
    this.setState({
      view: false
    });
  }

  createCard = (e, title, content, tag) => {
    e.preventDefault();

    if (!tag) {
      tag = '1'
    }

    let data = {
      title: title,
      content: content,
      tag: tag
    }
    ApiService.createCard(data)
    this.setState({
      view: false
    })
    window.location.reload();
  }

  handleUpdateTries = (e, id, tries, closeModal) => {
    e.preventDefault();
    tries++;
    let data = {
      id: id,
      tries: tries
    }
    let cardToUpdate = this.state.cards.find(c => c.id === id);
    cardToUpdate.tries = tries;
    ApiService.updateTries(data, () => {
      this.setState({
        cards: this.state.cards.map(c => c.id === id ? cardToUpdate : c)
      }, closeModal);
    })
  }

  conditionalRender = () => {
    if (!this.state.view) {
      return ( <
        CardView tags = {
          this.state.tags
        }
        cards = {
          this.state.cards
        }
        add = {
          this.add
        }
        update = {
          this.handleUpdateTries
        }
        />
      )
    } else {
      return ( <
        >
        <
        button onClick = {
          () => this.back()
        } > back < /button> <
        Form back = {
          this.back
        }
        tags = {
          this.state.tags
        }
        handleSubmit = {
          this.createCard
        }
        noTrend = {
          true
        }
        /> <
        />
      )
    }
  }


  render() {
    console.log(this.state.cards)
    return (
      this.conditionalRender()
    )
  }
}