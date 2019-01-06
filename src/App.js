import React, { Component } from 'react';
import Background from './Banner.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import Mailto from 'react-protected-mailto';
import firebase from './firebase.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
    this.handleClickOneFive = this.handleClickOneFive.bind(this);

    this.state = {
      displayInfoZero: true,
      displayInfoOne: false,
      displayInfoOneFive: false,
      displayInfoTwo: false,
      displayInfoThree: false
    }
  }

    handleClickZero() {
      this.setState({displayInfoZero: false, displayInfoOne: true})
    }

    handleClickOne() {
      this.setState({displayInfoOne: false, displayInfoOneFive: true});
    }

    handleClickOneFive() {
      this.setState({displayInfoOneFive: false, displayInfoOne: false, displayInfoTwo: true})
    }

    handleClickTwo() {
      this.setState({displayInfoTwo: false, displayInfoThree: true});
    }

    handleClickThree() {
      this.setState({displayInfoTwo: false, displayInfoThree: true});
    }
    render() {
      const displayInfoZero = this.state.displayInfoZero;
      const displayInfoOne = this.state.displayInfoOne;
      const displayInfoTwo = this.state.displayInfoTwo;
      const displayInfoThree = this.state.displayInfoThree;
      const displayInfoOneFive = this.state.displayInfoOneFive;
      let button;

      return (
        <div className="App" style = { { backgroundImage: 'url(' + Background + ')' } }>
          <header className="App-header">
            <h1>
              Sunny Side Web Consultation
            </h1>
            {this.state.displayInfoZero && <div>
              <Button color="primary"
                outline color ="secondary"
                size = "lg" block
                onClick={(e) => this.handleClickZero(e)}>Start here!</Button>
              </div>
            }

            {this.state.displayInfoOne &&
              <div>
              <p>
                At Sunny Side Web Consultation, we've been waiting to give you the cost effective
                web marketing solutions that will bring your business just what you need. We focus on simplicity, with
                intuitive web designs centred on accessibility that turn passing visitors
                into active clients.
              </p>
              <Button color= "primary"
                outline color ="secondary"
                size = "lg" block onClick={(e) => this.handleClickOne(e)}>
                I'm intrigued. . .</Button>
              </div>
            }
            {this.state.displayInfoOneFive &&
              <div>
              <p>
                Is your business just scraping by without web presence? Are you having
                a hard time bringing in new customers?
              </p>
              <p>
                In the competetive market, it's important to stay on the cutting
                edge of technology to maintain viability. We can help with that.
              </p>
              <Button color= "primary"
                outline color ="secondary"
                size = "lg" block onClick={(e) => this.handleClickOneFive(e)}>
                You make a compelling point. . .</Button>
              </div>
            }

            {this.state.displayInfoTwo &&
             <div>
              <p>Ever wonder just how much the web can do for you? Ever think about
                how much business you could bring if you had a way to tap into the
                vast network of clients on the web?
              </p>
              <Button color="primary"
                outline color = "secondary"
                size = "lg" block onClick={(e) => this.handleClickThree(e)}>Yes! That's me! </Button>
            </div>
          }

              {this.state.displayInfoThree &&
              <div>
                <p>
                  In that case, we're glad to help you find your place on the web. Send
                  us an email at &nbsp;
                <Mailto className="Mailto"
                email='SunnySideWebConsulting@gmail.com'
                headers={
                  {subject: 'Question from the website'}
                }/>
                &nbsp;or give us a call at <Mailto tel='831-884-3386' /> to get started.
                </p>
              </div>
            }
          </header>
        </div>
      );
    }
  }

  export default App;
