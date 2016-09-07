export default function fetchData (param, currentUser, callback){
  fetch('http://localhost:3000/data', {
    method: 'GET'
  }).then(response => {
      return response.json();
    }).then(responseJSON => {
        param.setState({users: responseJSON.users, chats: responseJSON.chats});
        localStorage.setItem( 'users', responseJSON.users );
        localStorage.setItem( 'chats', responseJSON.chats );
      }).catch(err => console.log(err));
}