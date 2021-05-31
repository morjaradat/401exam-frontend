import axios from 'axios';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from './Form'



export class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showForm: false,
      description: '',
      slug: '',
    }
  }
  showForm = (e) => {
    this.setState({
      showForm: true,
      description: e.description,
      slug: e.slug
    })
  }
  updateDescription = (e) => {
    this.setState({ description: e.target.value })
  }
  componentDidMount = async () => {
    this.getTheData()
  }
  getTheData = async () => {
    const url = 'http://localhost:3067/art/favorite'
    const getTheData = await axios.get(url)
    this.setState({ data: getTheData.data })
    console.log('FAV', this.state.data)
  }
  update = async (e) => {
    e.preventDefault();
    const url = `http://localhost:3067/art/favorite/${this.state.slug}`
    const body = {
      description: this.state.description,
    }
    const update = await axios.put(`${url}`, body)
    this.getTheData()
    console.log(update)

    console.log('updated')
  }
  delete = async (e) => {
    // this.setState({ slug: e.slug })
    // console.log(this.state.slug);
    console.log('deleted 1')

    const url = `http://localhost:3067/art/favorite/${e.slug}`

    const delelteItem = await axios.delete(`${url}`)
    this.getTheData()
    console.log(delelteItem)
    console.log('deleted 2')
  }
  render() {
    return (
      <>
        {this.state.showForm &&
          <Form description={this.state.description}
            updateDescription={this.updateDescription}
            update={this.update}
          />}
        {this.state.data.map(i => {
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
                  <Button onClick={e => this.showForm(i)}> Update </Button>
                  <Button onClick={e => this.delete(i)}> Delete</Button>
                </Card.Body>
              </Card>
            </>
          )
        })}
      </>
    )
  }
}

export default Fav
