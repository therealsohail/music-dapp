import React, { Component } from "react";
import "../StyleSheets/content.css";
import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider || "http://localhost:8080");

class Download extends Component {
  state = {
    name: "Download",
    Download: [],
    singerName: "",
    yourName: "",
    song: "",
    wantToTipSinger: "",
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
  componentDidMount() {
    document.title = `${this.state.name} - POS`;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  Download = async (e) => {
    e.preventDefault();
    const contract = new web3.eth.Contract(this.state.abi, this.state.address);
    await window.ethereum.enable();
    web3.eth.getAccounts().then((accounts) => {
      return contract.methods
        .Download(
          this.state.singerName,
          this.state.yourName,
          this.state.song,
          this.state.wantToTipSinger
        )
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
            <label>Singer Name</label>
            <input
              name="singerName"
              className="form-control"
              onChange={this.handleChange}
              type="text"
            />
            <br />
            <label>Your Name</label>
            <input
              name="yourName"
              className="form-control"
              onChange={this.handleChange}
              type="text"
            />
            <br />
            <label>Song</label>
            <input
              name="song"
              className="form-control"
              onChange={this.handleChange}
              type="text"
            />
            <br />
            <label>Want to Tip Singer</label>
            <input
              name="wantToTipSinger"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.amount}
              type="text"
            />
          </div>

          <button
            onClick={this.Download}
            className="btn btn-outline-warning mr-2"
          >
            Download
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
                placeholder="Search Download.."
              />
            </div>
          </form>
        </nav>
        <div className="container mt-4">
          <h3>{this.state.name} Music</h3>
          {this.showForm()}
        </div>
      </div>
    );
  }
}

export default Download;
