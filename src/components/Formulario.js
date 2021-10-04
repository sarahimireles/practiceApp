import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PostsList from './PostsList';

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: '', 
        title: '',
        body: ''
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.simpleUniqueId = this.simpleUniqueId.bind(this);
  }

  simpleUniqueId(prefix) {
    return (prefix || '').concat([
      Math.random().toString(16).slice(-4)
    ].join(''));
  }

  handleChange(event) {
    const name = event.target.name;

    if(name.includes('title') ) {
      this.setState({
        title: event.target.value,
        id: this.simpleUniqueId('post')
      });
    } else {
      this.setState({body: event.target.value});
    }
  }

  handleSubmit(event) {
    this.props.addPost({
      title: this.state.title,
      body: this.state.body,
      userId: 1,
      id: this.state.id
    });
    this.state.title = '';
    this.state.body = '';
    event.preventDefault();
  }

  render() {
    return (
      <Box
        component="form"
        sx={{
          
          '& > :not(style)': { m: 4, width: 300, textAlign: 'center', display: 'flex'},
        }}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <Typography variant="h5" component="div">
          Add a new post
        </Typography>
        <TextField name="title-txt" label="Title" variant="standard" value={this.state.title} onChange={this.handleChange}  />
        <TextField
          name="content-txt"
          label="Content"
          placeholder="Placeholder"
          multiline
          variant="standard"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <Button variant="contained" type="submit" >Contained</Button>
      </Box>
    );
  }
}

export default Formulario;