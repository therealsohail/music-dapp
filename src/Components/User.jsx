import React, { Component } from "react";
import "../StyleSheets/content.css";
import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider || "http://localhost:8080");
class User extends Component {
  state = {
    name: "User",
    User: [],
    userId: "",
    userName: "",
    address: "0xa3bd8270128c5716b66E4B1Ff47D5294420cE30A",
    abi: [
      {
        constant: false,
        inputs: [
          {
            name: "id",
            type: "string",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "song",
            type: "string",
          },
        ],
        name: "addSinger",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "id",
            type: "string",
          },
          {
            name: "name",
            type: "string",
          },
        ],
        name: "addUser",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "Singer_name",
            type: "string",
          },
          {
            name: "Your_name",
            type: "string",
          },
          {
            name: "song",
            type: "string",
          },
          {
            name: "Want_to_tip_singer",
            type: "string",
          },
        ],
        name: "Download",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            name: "deployer",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        payable: true,
        stateMutability: "payable",
        type: "fallback",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: "",
            type: "string",
          },
        ],
        name: "LogUint",
        type: "event",
      },
      {
        constant: true,
        inputs: [
          {
            name: "uname",
            type: "string",
          },
        ],
        name: "getdownloadcount",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "Singer_name",
            type: "string",
          },
        ],
        name: "getSingerTotalDownload",
        outputs: [
          {
            name: "Singer_total_download",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "i",
            type: "string",
          },
        ],
        name: "getSongs",
        outputs: [
          {
            name: "ID",
            type: "string",
          },
          {
            name: "",
            type: "string[]",
          },
          {
            name: "SongsCount",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "User_name",
            type: "string",
          },
        ],
        name: "gettokens",
        outputs: [
          {
            name: "Your_token",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "uname",
            type: "string",
          },
        ],
        name: "my_library",
        outputs: [
          {
            name: "",
            type: "string[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
  };
  async componentDidMount() {
    document.title = `${this.state.name} - POS`;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  addUser = async (e) => {
    e.preventDefault();
    const contract = new web3.eth.Contract(this.state.abi, this.state.address);
    await window.ethereum.enable();
    web3.eth.getAccounts().then((accounts) => {
      return contract.methods
        .addUser(this.state.userId, this.state.userName)
        .send({
          from: accounts[0],
          gas: "3000000",
        })
        .then((tx) => {
          console.log(tx);
          if (tx) {
            alert("Block Created!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  showForm = () => {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Id</label>
            <input
              name="userId"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.amount}
              type="text"
            />
            <br />
            <label>Name</label>
            <input
              name="userName"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.amount}
              type="text"
            />
          </div>

          <button
            onClick={this.addUser}
            className="btn btn-outline-primary mr-2"
          >
            Add
          </button>
        </form>
        <br />
      </div>
    );
  };
  render() {
    return (
      <div className="main">
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                onChange={this.handleSearch}
                placeholder="Search User.."
              />
            </div>
          </form>
        </nav>
        <div className="container mt-4">
          <h3>Add {this.state.name}</h3>
          {this.showForm()}
        </div>
      </div>
    );
  }
}

export default User;
