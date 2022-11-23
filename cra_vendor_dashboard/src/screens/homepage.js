import { useState } from "react";
//import NavBar from "../components/navBar";
export default function HomePage() {
  const [toCreate, setToCreate] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
    <>
      <div class="container">
        <div class="row">
          <button class="col-sm m-2" onClick={() => setToCreate(true)}>
            Create Entry
          </button>
          <button class="col-sm m-2">Delete Data</button>
        </div>
        {toCreate && (
          <div class="row m-5">
            <button
              type="button"
              class="w-25 mw-100 p-3 h-10 d-inline-block btn btn-outline-secondary btn-sm"
              onClick={() => setToCreate(false)}
            >
              Close
            </button>
            <form>
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="uname">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  class="form-control"
                  id="uname"
                  placeholder="Enter name"
                />
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  class="form-control"
                  id="address"
                  placeholder="Enter name"
                />
              </div>
              <div className="text-center">
                <button class="m-2 btn btn-primary btn-lg">Submit</button>
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="container">FROM FIREBASE</div>
    </>
  );
}
