import axios from 'axios';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount = async () => {
    const url = 'http://localhost:3067/art'
    const apiData = await axios.get(url);
    this.setState({ data: apiData.data })
    console.log(this.state.data);
  }
  addToFav = async (e) => {
    console.log(e);
    const url = `http://localhost:3067/art/favorite`
    const body = {
      title: e.title,
      thumbnail: e.thumbnail,
      description: e.description,
      artist_name: e.artist_name
    }
    const newItem = await axios.post(`${url}`, body);
    console.log(newItem.data)

  }
  render() {
    return (
      this.state.data.map(i => {
        return (
          <>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={i.thumbnail} />
              <Card.Body>
                <Card.Title>Title :{i.title}</Card.Title>
                <Card.Text>
                  description: {i.description}
                </Card.Text>
                <Card.Title>artist_name :{i.artist_name}</Card.Title>
                <Button onClick={e => this.addToFav(i)}> add to fav</Button>
              </Card.Body>
            </Card>
          </>
        )
      })
    )
  }
}
export default Home
