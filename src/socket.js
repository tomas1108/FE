import io from "socket.io-client"; // Add this
let socket;

const connectSocket = (user_id) => {
  // socket = io("localhost:3001", {
  //   query: `user_id=${user_id}`,
  // });
    socket = io("http://bechat-env.eba-csvanjsa.ap-southeast-1.elasticbeanstalk.com", {
    query: `user_id=${user_id}`,
  });
} // Add this -- our server will run on port 4000, so we connect to it from here

export {socket, connectSocket};
