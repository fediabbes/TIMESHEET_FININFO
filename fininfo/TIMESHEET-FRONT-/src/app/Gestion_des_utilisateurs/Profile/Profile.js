import React, { useEffect} from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import userPic from "./user.png";
import PostePic from "./poste.png";
import EditModal from "../Modals/EditModal";
import { delete_user, get_one_user } from "../../Redux/Actions/UserActions";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

function Profile() {
  const oneUser = useSelector((state) => state.UserReducer.oneUser);
  const dispatch = useDispatch();
  const [modalEditShow, setModalEditShow] = React.useState(false);

  useEffect(() => {
    dispatch(get_one_user());
  });

  const history = useHistory();

  const routeChange = () => {
    let path = `/users`;
    history.push(path);
  };

  const DeleteToast = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(delete_user(oneUser.id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        routeChange();
      }
    });
  };
  return (
    <div>
      <div className="col-12 grid-margin">
        <br />
        <br />
        <div className="card">
          <img id="userPic" src={userPic} alt='free' />
          <div className="card-body">
            <h4 className="card-title">Profile</h4>
            <form className="form-sample">
              {/* +---------------------------------- */}
              <br />
              <br />
              <br />
              <p className="card-description"> Informations personelles </p>
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Nom</label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="text"
                        placeholder={oneUser.nom}
                        readOnly
                      />
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Prenom</label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="text"
                        placeholder={oneUser.prenom}
                        readOnly
                      />
                    </div>
                  </Form.Group>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="email"
                        placeholder={oneUser.email}
                        readOnly
                      />
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Age</label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="number"
                        placeholder={oneUser.age}
                        readOnly
                      />
                    </div>
                  </Form.Group>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">
                      Date de naissance
                    </label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="text"
                        placeholder={oneUser.date_de_naissance}
                        readOnly
                      />
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Num_tel</label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="number"
                        placeholder={oneUser.num_tel}
                        readOnly
                      />
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Sexe</label>
                    <div className="col-sm-4">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="ExampleRadio4"
                            id="membershipRadios1"
                            defaultChecked
                          />{" "}
                          {oneUser.sexe}
                          <i className="input-helper"></i>
                        </label>
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </div>
              {/* ---------------------------------- */}
              <br />
              <br />
              <p className="card-description"> Informations du poste </p>
              <img id="postePic" src={PostePic} alt="free" />
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">
                      Date d'embauche{" "}
                    </label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="text"
                        placeholder={oneUser.date_embauche}
                        readOnly
                      />
                    </div>
                  </Form.Group>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Role</label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="number"
                        placeholder={oneUser.roles}
                        readOnly
                      />
                    </div>
                  </Form.Group>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">
                      Type de contrat
                    </label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="number"
                        placeholder={oneUser.type_contrat}
                        readOnly
                      />
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Solde</label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="number"
                        placeholder={oneUser.solde}
                        readOnly
                      />
                    </div>
                  </Form.Group>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="ProfileDivBtns">
        <button
          type="button"
          id="profileEditBtn"
          className="btn btn-outline-primary btn-fw"
          onClick={() => setModalEditShow(true)}
        >
          Modifier
        </button>
        <button
          onClick={() => {
            dispatch(get_one_user(oneUser.id));
            DeleteToast();
          }}
          type="button"
          className="btn btn-outline-danger btn-fw"
        >
          Supprimer
        </button>
      </div>

      <EditModal show={modalEditShow} onHide={() => setModalEditShow(false)} />
    </div>
  );
}

export default Profile;
