import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { firestore } from "../initializeFirebase";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "@firebase/firestore";
//import NavBar from "../components/navBar";
export default function HomePage() {
  const [toCreate, setToCreate] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [successfeedback, setSuccessFeedback] = useState(false);
  const [anEmptyFields, setEmptyFields] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [firestoreData, setFirestoreData] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const ref = collection(firestore, "Users");
  const createInFirebase = () => {
    if (name !== "" && email !== "" && address !== "") {
      addDoc(ref, {
        Name: name,
        Email: email,
        Address: address,
        Status: "Not Activated",
      })
        .then(uploadComplete(), setToCreate(false))
        .catch((e) => {
          console.log(e);
        });
    } else {
      emptyFields();
    }
  };
  const uploadComplete = () => {
    return setSuccessFeedback(true);
  };
  const emptyFields = () => {
    const element = document.getElementById("emptyWarning");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    return setEmptyFields(true);
  };
  const getData = async () => {
    const querySnapshot = await getDocs(ref);
    const fetchedData = [];
    querySnapshot.forEach((doc) => {
      const { Name, Email, Address, Status } = doc.data();
      fetchedData.push({
        id: doc.id,
        Name,
        Email,
        Address,
        Status,
      });
    });
    setFirestoreData(fetchedData);
  };
  const deleteData = async (id) => {
    await deleteDoc(doc(firestore, "Users", id)).then(() => {
      setDeleted(true);
    });
  };
  const updateData = async (id) => {
    await updateDoc(doc(firestore, "Users", id), { Status: "Activated" }).then(
      () => {
        setUpdated(true);
      }
    );
  };

  useEffect(() => {
    getData();
  }, [deleted, toCreate, updated]);
  return (
    <>
      <div className="container">
        {deleted && (
          <div className="alert alert-danger" role="alert">
            Entry Deleted
            <button
              className="btn btn-outline-danger d-flex justify-content-between"
              onClick={() => {
                setDeleted(false);
              }}
            >
              {" "}
              <FaTimes />
            </button>
          </div>
        )}
        {successfeedback && (
          <div className="alert alert-primary" role="alert">
            Entry Created
            <button
              className="btn btn-outline-primary d-flex justify-content-between"
              onClick={() => {
                setSuccessFeedback(false);
              }}
            >
              {" "}
              <FaTimes />
            </button>
          </div>
        )}
        {anEmptyFields && (
          <div className="alert alert-warning" id="emptyWarning" role="alert">
            Please make sure all fields are not empty{" "}
            <button
              className="btn btn-outline-warning d-flex justify-content-between"
              onClick={() => {
                setEmptyFields(false);
              }}
            >
              {" "}
              <FaTimes />
            </button>
          </div>
        )}
        {updated && (
          <div className="alert alert-success" id="updateSuccess" role="alert">
            User has been activated
            <button
              className="btn btn-outline-success d-flex justify-content-between"
              onClick={() => {
                setUpdated(false);
              }}
            >
              {" "}
              <FaTimes />
            </button>
          </div>
        )}
        <div className="row">
          <button
            className="col-sm m-4 btn btn-primary btn-lg"
            onClick={() => {
              setToCreate(true);
              setEmail("");
              setAddress("");
              setName("");
            }}
          >
            Create Entry
          </button>
        </div>

        {toCreate && (
          <div className="row m-5 border rounded ">
            <div className="text-center">
              <button
                type="button"
                className="w-25 d-inline-block btn btn-outline-secondary btn-sm"
                onClick={() => setToCreate(false)}
              >
                <FaTimes />
              </button>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="uname">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="uname"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                id="address"
                placeholder="Enter name"
              />
            </div>
            <div className="text-center">
              <button
                className="m-2 btn btn-primary btn-lg"
                onClick={() => createInFirebase()}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="container">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {firestoreData.map((element) => {
              return (
                <tr key={element.id}>
                  <th scope="row">{element.id}</th>
                  <td>{element.Email}</td>
                  <td>{element.Name}</td>
                  <td>{element.Address}</td>

                  <td>
                    {" "}
                    <div
                      style={{
                        backgroundColor:
                          element.Status === "Activated" ? "green" : "red",
                        padding: 2,
                        borderRadius: 100,
                        width: 10,
                        height: 10,
                      }}
                    ></div>
                    {element.Status}
                  </td>
                  <td>
                    <button
                      className="m-1 btn btn-danger"
                      onClick={() => deleteData(element.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="m-1 btn btn-success"
                      onClick={() => updateData(element.id)}
                    >
                      Activate
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
