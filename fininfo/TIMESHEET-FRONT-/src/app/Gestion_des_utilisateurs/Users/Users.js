import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  get_one_user,
  get_users,
} from "../../Redux/Actions/UserActions";
import { Dropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddModal from "../Modals/AddModal";
import MaterialTable from "material-table";

// function Users() {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.UserReducer.users);
//   const oneUser = useSelector(state=> state.UserReducer.oneUser)
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   // -----------------------
//   const [nom, setNom] = useState("")
//   const [prenom, setPrenom]= useState("")
//   const [email, setEmail] = useState("")
//   const [num_tel, setNum_tel] = useState("")
//   const [solde, setSolde] = useState(0)
//   const [roles, setRoles] = useState("")
//   const [age, setAge] = useState(0)
//   const [type_contrat, setTypeContrat] = useState("")
//   const [sexe, setSexe] = useState("")
//   const [date_embauche, setDateEmbauche] = useState()
//   const [date_de_naissance, setDate_de_naissance] = useState()

// // --- hooks for add Modal
// const [modalShow, setModalShow] = React.useState(false);

// // --- hooks for edit modal
// const [smShow, setSmShow] = useState(false);
// const [showEdit, setShowEdit] = useState(false);
// const [modalEditShow, setModalEditShow] = React.useState(false);

// // -------- Component Did Mount
// useEffect(() => {
//   dispatch(get_users());
// }, []);
// useEffect(() => {
//   {
//     setNom(oneUser.nom);
//     setPrenom(oneUser.prenom);
//     setEmail(oneUser.email);
//     setNum_tel(oneUser.num_tel);
//     setSolde(oneUser.solde);
//     setSexe(oneUser.sexe);
//     setDateEmbauche(oneUser.date_embauche)
//     setTypeContrat(oneUser.type_contrat)
//     setAge(oneUser.age);
//     setRoles(oneUser.roles);
//     setDate_de_naissance(oneUser.date_de_naissance)
//   }
// }, [oneUser]);

// // ------- Dispatching Actions ---
// const handleEditUser = () => {
//   dispatch(
//     update_user(oneUser.id, { nom, prenom, email,date_de_naissance, num_tel, solde, roles, type_contrat, age, sexe, date_embauche})
//   );
// };
// const handleAddUser = () => {
//   dispatch(add_user({ nom, prenom, email, num_tel, solde, roles }));
// };

// // -------- Toasts
//   const notify_success = () => toast.success("Wow so easy!");
//   const notify_error = () => toast.error("Wow so easy!");
//   const notify_warn= ()=> toast.info("take care")

// const SuccessToast = ()=> {
//   Swal.fire({
//     position: 'center',
//     icon: 'success',
//     title: 'Your User has been updated',
//     showConfirmButton: false,
//     timer: 3000
//   })
// }
// const DeleteToast =  ()=> {
//   Swal.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, delete it!'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       dispatch(delete_user(oneUser.id))
//       Swal.fire(
//         'Deleted!',
//         'Your file has been deleted.',
//         'success'
//       )
//     }
//   })
// }

//   return (
//     <div>
//       <div >
//         <div >
//         <ToastContainer
//         position="bottom-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         />
//         </div>
//       </div>
//       <div className="col-lg-12 grid-margin stretch-card">
//             <div className="card">
//               <div className="card-body">
//               <div
//               style={{ display: "flex", "justify-content": "space-between" }}
//             >
//               <h4 className="card-title">Gestion des utilisateurs</h4>

//               <Dropdown style={{ marginRight: "55px" }}>
//                 <Dropdown.Toggle
//                   variant="btn btn-dark"
//                   id="dropdownMenuIconButton7"
//                 >
//                   <i className="mdi mdi-account"></i>
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item
//                   onClick={() =>
//                   {
//                   setModalShow(true)
//                   toast.info("Merci de remplir tout les champs !");
//                   }}> Ajouter un utilisateur</Dropdown.Item>
//                   {/* <Dropdown.Item onClick={()=> {setSmShow(true);dispatch(delete_all_user())}}>Effacer tout</Dropdown.Item> */}
//                 </Dropdown.Menu>
//               </Dropdown>
//             </div>
//             <br/>

//                 <div className="table-responsive">
//                   <table className="table table-bordered">
//                     <thead>
//                     <tr>
//                     <th><i  className="mdi mdi-account"/> Nom </th>
//                     <th><i  className="mdi mdi-account"/> Prenom </th>
//                     {/* <th><i  className="mdi mdi-email-variant"/>  Email </th> */}
//                     {/* <th><i  className="mdi mdi-email-variant"/>  Age </th> */}
//                     <th><i  className="mdi mdi-cellphone-android"/> Num_tel </th>
//                     {/* <th><i  className="mdi mdi-cellphone-android"/> Date_de_naissance </th> */}
//                     {/* <th><i  className="mdi mdi-calendar"/> Solde </th> */}
//                     <th><i  className="mdi mdi-cellphone-android"/> Date_embauche </th>
//                     {/* <th><i  className="mdi mdi-cellphone-android"/> Sexe </th> */}
//                     <th><i  className="mdi mdi-cellphone-android"/> Type_contrat </th>
//                     <th><i  className="mdi mdi-worker"/> Role </th>
//                     <th> Actions </th>
//                   </tr>
//                     </thead>
//                     <tbody>
//                     {users.map((el) => (
//                     <>
//                       <tr>
//                         <td><i style={{marginRight:"10px"}} className="mdi mdi-account"/>  {el.nom} </td>
//                         <td> {el.prenom} </td>
//                         {/* <td> {el.email} </td> */}
//                         {/* <td> {el.age} </td> */}
//                         <td> {el.num_tel} </td>
//                         {/* <td> {el.date_de_naissance} </td> */}
//                         {/* <td> {el.solde} </td> */}
//                         <td> {el.date_embauche} </td>
//                         {/* <td> {el.sexe} </td> */}
//                         <td> {el.type_contrat} </td>
//                         <td> {el.roles} </td>
//                         <td>
//                           <Dropdown>
//                             <Dropdown.Toggle
//                               variant="btn btn-success"
//                               id="dropdownMenuIconButton7"
//                               >
//                               <i className="mdi mdi-account"></i>
//                               </Dropdown.Toggle>
//                               <Dropdown.Menu>
//                               <Dropdown.Item
//                               as={Link}
//                               to='/profile'
//                               onClick={()=> dispatch(get_one_user(el.id))}
//                               >
//                               Profile
//                               </Dropdown.Item>
//                               <Dropdown.Item
//                               onClick={()=> {
//                               dispatch(get_one_user(el.id));
//                               toast.info("Merci de remplir tout les champs !");
//                               setModalEditShow(true)
//                               }}
//                               > Edit</Dropdown.Item>
//                               <Dropdown.Item onClick={() =>
//                               {dispatch(get_one_user(el.id));
//                               DeleteToast()}}>
//                               Delete
//                               </Dropdown.Item>
//                               <Dropdown.Divider></Dropdown.Divider>
//                               <Dropdown.Item>Settings</Dropdown.Item>
//                             </Dropdown.Menu>
//                           </Dropdown>
//                           {/* <Dropdown alignRight as="li" className="nav-item d-none d-lg-block">
//                 <Dropdown.Toggle className="nav-link btn btn-success create-new-button no-caret">
//                 Managment
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu className="navbar-dropdown preview-list create-new-dropdown-menu">

//                 <Dropdown.Item  href="!#" onClick={evt =>evt.preventDefault()} className="preview-item">
//                     <div className="preview-thumbnail">
//                       <div className="preview-icon bg-dark rounded-circle">
//                         <i className="mdi mdi-web text-info"></i>
//                       </div>
//                     </div>
//                     <div className="preview-item-content">
//                     <p className="preview-subject ellipsis mb-1"><Trans>Profile</Trans></p>
//                     </div>
//                   </Dropdown.Item>
//                   <Dropdown.Divider />
//                   <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()} className="preview-item">
//                     <div className="preview-thumbnail">
//                       <div className="preview-icon bg-dark rounded-circle">
//                         <i className="mdi mdi-layers text-danger"></i>
//                       </div>
//                     </div>
//                     <div
//                     onClick={()=> {
//                     dispatch(get_one_user(el.id));
//                     toast.info("Merci de remplir tout les champs !");
//                     setModalEditShow(true)
//                     }}
//                     className="preview-item-content">
//                       <p className="preview-subject ellipsis mb-1"><Trans>Edit User</Trans></p>
//                     </div>
//                   </Dropdown.Item>
//                   <Dropdown.Divider />

//                   <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()} className="preview-item">
//                     <div className="preview-thumbnail">
//                       <div className="preview-icon bg-dark rounded-circle">
//                         <i className="mdi mdi-delete"></i>
//                       </div>
//                     </div>
//                     <div
//                     onClick={() =>
//                       {dispatch(get_one_user(el.id));
//                       DeleteToast()}}
//                     className="preview-item-content">
//                       <p className="preview-subject ellipsis mb-1"><Trans>Delete User</Trans></p>
//                     </div>
//                   </Dropdown.Item>

//                 </Dropdown.Menu>
//               </Dropdown> */}
//                         </td>
//                       </tr>
//                     </>
//                   ))}
//                     </tbody>
//                   </table>

//                 </div>
//               </div>
//             </div>
//           </div>

//       <>
//         {/* ----------- Modaaaaaal for edit -------------- */}
//         <>
//           <Modal show={show} onHide={handleClose}>
//             <div className="card">
//               <div className="card-body">
//                 <h4 className="card-title">Information d'utilisateur</h4>
//                 <p className="card-description"> Modifier les informations </p>
//                 <form className="forms-sample">
//                   {/* <Form.Group>
//                     <label htmlFor="exampleInputUsername1">Nom</label>
//                     <Form.Control
//                       type="text"
//                       id="exampleInputUsername1"
//                       placeholder="Nom de l'utilisateur"
//                       onChange={(e)=> setNom(e.target.value)}
//                       value={nom}
//                     />
//                   </Form.Group>
//                   <br/>
//                   <Form.Group>
//                     <label htmlFor="exampleInputEmail1">Prenom</label>
//                     <Form.Control
//                       type="text"
//                       className="form-control"
//                       id="exampleInputEmail1"
//                       placeholder="Prenom de l'utilisateur"
//                       onChange={(e)=> setPrenom(e.target.value)}
//                       value={prenom}
//                     />
//                   </Form.Group>
//                   <br/>
//                   <Form.Group>
//                     <label htmlFor="exampleInputEmail1">Email</label>
//                     <Form.Control
//                       type="email"
//                       className="form-control"
//                       id="exampleInputEmail1"
//                       placeholder="aaaa@gmail.com"
//                       onChange={(e)=> setEmail(e.target.value)}
//                       value={email}
//                     />
//                   </Form.Group>
//                   <br/>
//                   <Form.Group>
//                     <label htmlFor="exampleInputEmail1">Numéro de Telephone</label>
//                     <Form.Control
//                       type="text"
//                       className="form-control"
//                       id="exampleInputEmail1"
//                       placeholder="Num_tel"
//                       onChange={(e)=> setNum_tel(e.target.value)}
//                       value={num_tel}
//                     />
//                   </Form.Group>
//                   <br/>
//                   <Form.Group>
//                     <label htmlFor="exampleInputEmail1">Solde</label>
//                     <Form.Control
//                       type="number"
//                       className="form-control"
//                       id="exampleInputEmail1"
//                       placeholder="Solde de congé"
//                       onChange={(e)=> setSolde(e.target.value)}
//                       value={solde}
//                     />
//                   </Form.Group>
//                   <br/>
//                   <Form.Group>
//                     <label htmlFor="exampleInputEmail1">Role</label>
//                     <Form.Control
//                       type="text"
//                       className="form-control"
//                       id="exampleInputEmail1"
//                       placeholder="Role de l'utilisateur"
//                       onChange={(e)=> setRoles(e.target.value)}
//                       value={roles}
//                     />
//                   </Form.Group> */}
//                   <Form.Group className="row">
//               <label
//                 htmlFor="exampleInputUsername2"
//                 className="col-sm-3 col-form-label"
//               >
//                 Nom
//               </label>
//               <div className="col-sm-9">
//                 <Form.Control
//                   type="text"
//                   className="form-control"
//                   id="exampleInputUsername2"
//                   placeholder="Nom d'utilisateur"
//                   onChange={(e) => setNom(e.target.value)}
//                   value={nom}
//                 />
//               </div>
//             </Form.Group>
//             <br />
//             <Form.Group className="row">
//               <label
//                 htmlFor="exampleInputUsername2"
//                 className="col-sm-3 col-form-label"
//               >
//                 Prenom
//               </label>
//               <div className="col-sm-9">
//                 <Form.Control
//                   type="text"
//                   className="form-control"
//                   id="exampleInputUsername2"
//                   placeholder="Prenom d'utilisateur"
//                   onChange={(e) => setPrenom(e.target.value)}
//                   value={prenom}
//                 />
//               </div>
//             </Form.Group>
//             <br />
//             <Form.Group className="row">
//               <label
//                 htmlFor="exampleInputEmail2"
//                 className="col-sm-3 col-form-label"
//               >
//                 Age
//               </label>
//               <div className="col-sm-9">
//                 <Form.Control
//                   type="number"
//                   className="form-control"
//                   id="exampleInputEmail2"
//                   placeholder="age de l'utilisateur"
//                   onChange={(e) => setAge(e.target.value)}
//                   value={age}
//                 />
//               </div>
//             </Form.Group>
//             <br />
//             <Form.Group className="row">
//               <label
//                 htmlFor="exampleInputUsername2"
//                 className="col-sm-3 col-form-label"
//               >
//                 Num_tel
//               </label>
//               <div className="col-sm-9">
//                 <Form.Control
//                   type="number"
//                   className="form-control"
//                   id="exampleInputUsername2"
//                   placeholder="Num_tel"
//                   onChange={(e) => setNum_tel(e.target.value)}
//                   value={num_tel}
//                 />
//               </div>
//             </Form.Group>
//             <br/>
//             <Form.Group className="row">
//               <label
//                 htmlFor="exampleInputUsername2"
//                 className="col-sm-3 col-form-label"
//               >
//               Date de naissance
//               </label>
//               <div className="col-sm-9">
//                 <Form.Control
//                   type="date"
//                   className="form-control"
//                   id="exampleInputUsername2"
//                   placeholder="Num_tel"
//                   onChange={(e) => setDate_de_naissance(e.target.value)}
//                   value={date_de_naissance}
//                 />
//               </div>
//             </Form.Group>
//             <br/>
//             <Form.Group className="row">
//               <label
//                 htmlFor="exampleInputUsername2"
//                 className="col-sm-3 col-form-label"
//               >
//                 Date Embauche
//               </label>
//               <div className="col-sm-9">
//                 <Form.Control
//                   type="date"
//                   className="form-control"
//                   id="exampleInputUsername2"
//                   placeholder="Num_tel"
//                   onChange={(e) => setDateEmbauche(e.target.value)}
//                   value={date_embauche}
//                 />
//               </div>
//             </Form.Group>
//             <br />
//             <Form.Group className="row">
//               <label
//                 htmlFor="exampleInputUsername2"
//                 className="col-sm-3 col-form-label"
//               >
//                 Email
//               </label>
//               <div className="col-sm-9">
//                 <Form.Control
//                   type="email"
//                   className="form-control"
//                   id="exampleInputUsername2"
//                   placeholder="Num_tel"
//                   onChange={(e) => setEmail(e.target.value)}
//                   value={email}
//                 />
//               </div>
//             </Form.Group>
//             <br/>
//             <Form.Group className="row">
//               <label
//                 htmlFor="exampleInputMobile"
//                 className="col-sm-3 col-form-label"
//               >
//                 Solde
//               </label>
//               <div className="col-sm-9">
//                 <Form.Control
//                   type="number"
//                   className="form-control"
//                   id="exampleInputMobile"
//                   placeholder="Solde de congé"
//                   onChange={(e) => setSolde(e.target.value)}
//                   value={solde}
//                 />
//               </div>
//             </Form.Group>
//             <br />
//             <Form.Group className="row">
//               <label
//                 htmlFor="exampleInputUsername2"
//                 className="col-sm-3 col-form-label"
//               >
//                 Type de Contrat
//               </label>
//               {/* <div className="col-sm-9">
//                 <Form.Control
//                   type="text"
//                   className="form-control"
//                   id="exampleInputUsername2"
//                   placeholder="Role d'utilisateur"
//                   onChange={(e) => setRoles(e.target.value)}
//                   value={roles}
//                 />
//               </div> */}

//               <Form.Group>
//                   <label htmlFor="exampleFormControlSelect2">Default select</label>
//                   <select
//                   onChange={(e) => setTypeContrat(e.target.value)}
//                   value={type_contrat}
//                   className="form-control"
//                   id="exampleFormControlSelect2">
//                     <option>CDI</option>
//                     <option>CDD</option>
//                     <option>CTT</option>
//                     <option>CIVP</option>
//                     <option>Stage</option>
//                   </select>
//                 </Form.Group>
//             </Form.Group>

//             <br/>
//             <Form.Group className="row">
//               <label
//                 htmlFor="exampleInputUsername2"
//                 className="col-sm-3 col-form-label"
//               >
//                 Sexe
//               </label>
//               {/* <div className="col-sm-9">
//                 <Form.Control
//                   type="text"
//                   className="form-control"
//                   id="exampleInputUsername2"
//                   placeholder="Role d'utilisateur"
//                   onChange={(e) => setRoles(e.target.value)}
//                   value={roles}
//                 />
//               </div> */}

//               <Form.Group>
//                   <label htmlFor="exampleFormControlSelect2">Default select</label>
//                   <select
//                   onChange={(e) => setSexe(e.target.value)}
//                   value={sexe}
//                   className="form-control"
//                   id="exampleFormControlSelect2">
//                     <option>Homme</option>
//                     <option>Femme</option>
//                     <option>Autre</option>
//                   </select>
//                 </Form.Group>
//             </Form.Group>
//             <br/>
//             <Form.Group className="row">
//               <label
//                 htmlFor="exampleInputUsername2"
//                 className="col-sm-3 col-form-label"
//               >
//                 Role
//               </label>
//               {/* <div className="col-sm-9">
//                 <Form.Control
//                   type="text"
//                   className="form-control"
//                   id="exampleInputUsername2"
//                   placeholder="Role d'utilisateur"
//                   onChange={(e) => setRoles(e.target.value)}
//                   value={roles}
//                 />
//               </div> */}

//               <Form.Group>
//                   <label htmlFor="exampleFormControlSelect2">Default select</label>
//                   <select
//                   onChange={(e) => setRoles(e.target.value)}
//                   value={roles}
//                   className="form-control"
//                   id="exampleFormControlSelect2">
//                     <option>Admin</option>
//                     <option>Chef_de_projet</option>
//                     <option>Utilisateur</option>
//                     <option>RH</option>
//                   </select>
//                 </Form.Group>
//             </Form.Group>
//                   <br />
//                   <button
//                   onClick={() => {
//                     handleEditUser();
//                     // handleClose()
//                     // SuccessToast();
//                   }}
//                   type="submit"
//                   className="btn btn-primary mr-2">
//                     Submit
//                   </button>
//                   <button onClick={handleClose} className="btn btn-dark">Cancel</button>
//                 </form>
//               </div>
//             </div>
//           </Modal>
//         </>
//         <br/>
//         <br/>
//       </>

//         {/* ------------------ Modaaall for Addd User ------------ */}
//         <AddModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//         />
//         {/* <EditModal
//         show={modalEditShow}
//         onHide={()=> setModalEditShow(false)}
//         /> */}
//     </div>
//   );
// }

// export default Users;

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UserReducer.users);
  const oneUser = useSelector((state) => state.UserReducer.oneUser);

  // -----------------------
  const [setNom] = useState("");
  const [setPrenom] = useState("");
  const [setEmail] = useState("");
  const [setNum_tel] = useState("");
  const [setSolde] = useState(0);
  const [setRoles] = useState("");
  const [setAge] = useState(0);
  const [setTypeContrat] = useState("");
  const [setSexe] = useState("");
  const [setDateEmbauche] = useState();
  const [setDate_de_naissance] = useState();
  const [selectedRow, setSelectedRow] = useState(null);

  // --- hooks for add Modal
  const [modalShow, setModalShow] = React.useState(false);

  // -------- Component Did Mount
  useEffect(() => {
    dispatch(get_users());
  });
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
  });


  // --------- Materiaaaal table---------

  const rows = users.map((el) => ({
    id: el.id,
    nom: el.nom,
    prenom: el.prenom,
    num_tel: el.num_tel,
    date_embauche: el.date_embauche,
    type_contrat: el.type_contrat,
    role: el.roles,
    actions: (
      <>
        <Dropdown>
          <Dropdown.Toggle
            variant="btn btn-primary"
            id="dropdownMenuIconButton6"
          >
            <i className="mdi mdi-account"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              as={Link}
              to="/profile"
              onClick={() => dispatch(get_one_user(el.id))}
            >
              Profile
            </Dropdown.Item>
            <Dropdown.Divider></Dropdown.Divider>
            <Dropdown.Item>Settings</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    ),
  }));


  const [data, setData] = useState(rows);
  useEffect(() => {
    dispatch(get_users());
    setData(data);
  });

  const columns = [
    {
      title: "ID",
      field: "id",
      editable: false,
      sorting: false,
      grouping: false,
      filtering: false,
      cellStyle: {
        backgroundColor: "#039be5",
        color: "#FFF",
      },
      headerStyle: {
        backgroundColor: "#039be5",
      },
    },
    { title: "Nom", field: "nom", align: "start" },
    { title: "Prenom", field: "prenom", align: "start" },
    { title: "Num_tel", field: "num_tel", align: "start" },
    { title: "Date d'embauche", field: "date_embauche", align: "start" },
    { title: "Type de contrat", field: "type_contrat", align: "start" },
    { title: "Role", field: "role", align: "start" },
    { title: "Actions", field: "actions", align: "start",editable: false,
    sorting: false,
    grouping: false,
    filtering: false,
    export: false
  },
  ];

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
      <div style={{ display: "flex", "justify-content": "space-between" }}>
        <h4 id="header" className="card-title">
          Gestion des employés
        </h4>
        <button
          id="addbtn"
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={() => {
            setModalShow(true);
            toast.info("Merci de remplir tout les champs !");
          }}
        >
          <i className="mdi mdi-account"></i>
          Ajouter un utilisateur
        </button>
      </div>
      <MaterialTable
        title="Employés"
        data={rows}
        columns={columns}
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        options={{
          actionsColumnIndex: -1,
          addRowPosition: "first",
          exportButton: true,
          exportAllData: true,
          exportFileName: "Employee Data",
          // filtering:true,
          grouping: true,
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id ? "#EEE" : "#FFF",
          }),
          paging: true,
          pageSize: 10, // make initial page size
          emptyRowsWhenPaging: false, // To avoid of having empty rows
          pageSizeOptions: [12, 20, 50], // rows selection options
        }}
      />

      {/* ------------------ Modaaall for Addd User ------------ */}
      <AddModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Users;
