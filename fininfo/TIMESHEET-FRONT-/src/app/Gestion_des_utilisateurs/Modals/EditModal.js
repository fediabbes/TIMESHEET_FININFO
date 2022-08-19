import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { update_user } from "../../Redux/Actions/UserActions";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import {useHistory } from "react-router-dom";

function EditModal(props) {
  const dispatch = useDispatch();
  const oneUser = useSelector((state) => state.UserReducer.oneUser);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [num_tel, setNum_tel] = useState("");
  const [solde, setSolde] = useState(0);
  const [roles, setRoles] = useState("");
  const [age, setAge] = useState(0);
  const [type_contrat, setTypeContrat] = useState("");
  const [sexe, setSexe] = useState("");
  const [date_embauche, setDateEmbauche] = useState();
  const [date_de_naissance, setDate_de_naissance] = useState();

  const notify_add_success = () => toast.success("Informations modifiés !");

  useEffect(() => {
    {
      setNom(oneUser.nom);
      setPrenom(oneUser.prenom);
      setEmail(oneUser.email);
      setNum_tel(oneUser.num_tel);
      setSolde(oneUser.solde);
      setSexe(oneUser.sexe);
      setDateEmbauche(oneUser.date_embauche);
      setTypeContrat(oneUser.type_contrat);
      setAge(oneUser.age);
      setRoles(oneUser.roles);
      setDate_de_naissance(oneUser.date_de_naissance);
    }
  }, [oneUser]);

  // ------- Dispatching Actions ---
  const handleEditUser = () => {
    dispatch(
      update_user(oneUser.id, {
        nom,
        prenom,
        email,
        date_de_naissance,
        num_tel,
        solde,
        roles,
        type_contrat,
        age,
        sexe,
        date_embauche,
      })
    );
  };

  const history = useHistory();

  const routeChange = () => {
    let path = `/users`;
    history.push(path);
  };
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modifier les informations
          </Modal.Title>
          {/* <img src="https://support.lastpass.com/help/lastpass-end-user-toolkit" /> */}
        </Modal.Header>

        <Modal.Body>
          <br />

          <form className="forms-sample">
            <Form.Group className="row">
              <label
                htmlFor="exampleInputUsername2"
                className="col-sm-3 col-form-label"
              >
                Nom
              </label>
              <div className="col-sm-9">
                <Form.Control
                  type="text"
                  className="form-control"
                  id="exampleInputUsername2"
                  placeholder="Nom d'utilisateur"
                  onChange={(e) => setNom(e.target.value)}
                  value={nom}
                />
              </div>
            </Form.Group>
            <br />
            <Form.Group className="row">
              <label
                htmlFor="exampleInputUsername2"
                className="col-sm-3 col-form-label"
              >
                Prenom
              </label>
              <div className="col-sm-9">
                <Form.Control
                  type="text"
                  className="form-control"
                  id="exampleInputUsername2"
                  placeholder="Prenom d'utilisateur"
                  onChange={(e) => setPrenom(e.target.value)}
                  value={prenom}
                />
              </div>
            </Form.Group>
            <br />
            <Form.Group className="row">
              <label
                htmlFor="exampleInputEmail2"
                className="col-sm-3 col-form-label"
              >
                Age
              </label>
              <div className="col-sm-9">
                <Form.Control
                  type="number"
                  className="form-control"
                  id="exampleInputEmail2"
                  placeholder="age de l'utilisateur"
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                />
              </div>
            </Form.Group>
            <br />
            <Form.Group className="row">
              <label
                htmlFor="exampleInputUsername2"
                className="col-sm-3 col-form-label"
              >
                Num_tel
              </label>
              <div className="col-sm-9">
                <Form.Control
                  type="number"
                  className="form-control"
                  id="exampleInputUsername2"
                  placeholder="Num_tel"
                  onChange={(e) => setNum_tel(e.target.value)}
                  value={num_tel}
                />
              </div>
            </Form.Group>
            <br />
            <Form.Group className="row">
              <label
                htmlFor="exampleInputUsername2"
                className="col-sm-3 col-form-label"
              >
                Date de naissance
              </label>
              <div className="col-sm-9">
                <Form.Control
                  type="date"
                  className="form-control"
                  id="exampleInputUsername2"
                  placeholder="Num_tel"
                  onChange={(e) => setDate_de_naissance(e.target.value)}
                  value={date_de_naissance}
                />
              </div>
            </Form.Group>
            <br />
            <Form.Group className="row">
              <label
                htmlFor="exampleInputUsername2"
                className="col-sm-3 col-form-label"
              >
                Date Embauche
              </label>
              <div className="col-sm-9">
                <Form.Control
                  type="date"
                  className="form-control"
                  id="exampleInputUsername2"
                  placeholder="Num_tel"
                  onChange={(e) => setDateEmbauche(e.target.value)}
                  value={date_embauche}
                />
              </div>
            </Form.Group>
            <br />
            <Form.Group className="row">
              <label
                htmlFor="exampleInputUsername2"
                className="col-sm-3 col-form-label"
              >
                Email
              </label>
              <div className="col-sm-9">
                <Form.Control
                  type="email"
                  className="form-control"
                  id="exampleInputUsername2"
                  placeholder="Num_tel"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </Form.Group>
            <br />
            <Form.Group className="row">
              <label
                htmlFor="exampleInputMobile"
                className="col-sm-3 col-form-label"
              >
                Solde
              </label>
              <div className="col-sm-9">
                <Form.Control
                  type="number"
                  className="form-control"
                  id="exampleInputMobile"
                  placeholder="Solde de congé"
                  onChange={(e) => setSolde(e.target.value)}
                  value={solde}
                />
              </div>
            </Form.Group>
            <br />
            <Form.Group className="row">
              <label
                htmlFor="exampleInputUsername2"
                className="col-sm-3 col-form-label"
              >
                Type de Contrat
              </label>
              {/* <div className="col-sm-9">
                <Form.Control
                  type="text"
                  className="form-control"
                  id="exampleInputUsername2"
                  placeholder="Role d'utilisateur"
                  onChange={(e) => setRoles(e.target.value)}
                  value={roles}
                />
              </div> */}

              <Form.Group>
                <label htmlFor="exampleFormControlSelect2">
                  Default select
                </label>
                <select
                  onChange={(e) => setTypeContrat(e.target.value)}
                  value={type_contrat}
                  className="form-control"
                  id="exampleFormControlSelect2"
                >
                  <option>CDI</option>
                  <option>CDD</option>
                  <option>CTT</option>
                  <option>CIVP</option>
                  <option>Stage</option>
                </select>
              </Form.Group>
            </Form.Group>

            <br />
            <Form.Group className="row">
              <label
                htmlFor="exampleInputUsername2"
                className="col-sm-3 col-form-label"
              >
                Sexe
              </label>
              {/* <div className="col-sm-9">
                <Form.Control
                  type="text"
                  className="form-control"
                  id="exampleInputUsername2"
                  placeholder="Role d'utilisateur"
                  onChange={(e) => setRoles(e.target.value)}
                  value={roles}
                />
              </div> */}

              <Form.Group>
                <label htmlFor="exampleFormControlSelect2">
                  Default select
                </label>
                <select
                  onChange={(e) => setSexe(e.target.value)}
                  value={sexe}
                  className="form-control"
                  id="exampleFormControlSelect2"
                >
                  <option>Homme</option>
                  <option>Femme</option>
                  <option>Autre</option>
                </select>
              </Form.Group>
            </Form.Group>
            <br />
            <Form.Group className="row">
              <label
                htmlFor="exampleInputUsername2"
                className="col-sm-3 col-form-label"
              >
                Role
              </label>
              {/* <div className="col-sm-9">
                <Form.Control
                  type="text"
                  className="form-control"
                  id="exampleInputUsername2"
                  placeholder="Role d'utilisateur"
                  onChange={(e) => setRoles(e.target.value)}
                  value={roles}
                />
              </div> */}

              <Form.Group>
                <label htmlFor="exampleFormControlSelect2">
                  Default select
                </label>
                <select
                  onChange={(e) => setRoles(e.target.value)}
                  value={roles}
                  className="form-control"
                  id="exampleFormControlSelect2"
                >
                  <option>Admin</option>
                  <option>Chef_de_projet</option>
                  <option>Utilisateur</option>
                  <option>RH</option>
                </select>
              </Form.Group>
            </Form.Group>

            <br />

            <br />
            <h6 style={{ color: "red" }}>Tous les champs sont obligatoire !</h6>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            className="btn btn-primary mr-2"
            onClick={async () => {
              handleEditUser();
              await notify_add_success();
              // AddToast()
              props.onHide();
              routeChange();
            }}
          >
            Submit
          </button>
          <button onClick={props.onHide} className="btn btn-dark">
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditModal;
