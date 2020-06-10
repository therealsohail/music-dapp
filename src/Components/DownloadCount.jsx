import React, { Component } from "react";
import "../StyleSheets/content.css";

import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider || "http://localhost:8080");
class DownloadCount extends Component {
  state = {
    name: "Download Count",
    uname: "",
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
  getCount = async (e) => {
    e.preventDefault();
    const contract = new web3.eth.Contract(this.state.abi, this.state.address);
    let count = await contract.methods.getdownloadcount(this.state.uname).call({
      gas: "30000",
    });
    try {
      console.log(count);
    } catch (error) {
      console.log(error);
    }
  };
  showForm = () => {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              name="uname"
              className="form-control"
              onChange={this.handleChange}
              type="text"
            />
          </div>

          <button
            onClick={this.getCount}
            className="btn btn-outline-primary mr-2"
          >
            Get
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
                placeholder="Search Employee.."
              />
            </div>
          </form>
        </nav>
        <div className="container mt-4">
          <h3>Get {this.state.name}</h3>
          {this.showForm()}
        </div>
      </div>
    );
  }
}

export default DownloadCount;
