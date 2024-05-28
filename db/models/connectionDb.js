import  mysql  from "mysql2";

const connection = mysql.createConnection("mysql://ufqnogjaedlei8sk:A2KLVWZwJ2pjGriI2oL5@bzuctesekdooztusfdau-mysql.services.clever-cloud.com:3306/bzuctesekdooztusfdau");
  connection.connect((err, res) => {

    if (err) {
      console.log(err);
    }
    else{
        console.log("successfully connected");
        
    }
  })
  export default connection;