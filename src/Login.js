

// import './App.css';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
// import { useEffect, useState } from 'react';
import React from "react";

// const isEmpty = value => value.trim().length === '';
// const isSixChars = value =>value.trim().length === 5;


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: {},
            isLoggedIn: false
        };
    }




    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    formValidation = () => {


        if (!this.state.username) {
            // this.setState({ 
            //     errors:{username : "Enter username" }});
            // this.setState({ errors: { username: "error" } });

              this.state.errors.username = "Enter username";
            // this.setState({ [this.state.errors] : {[this.state.errors.username]: "Enter username" }});
            console.log(this.state.errors);

        } else if (this.state.username.trim().length < 6) {
            this.state.errors.username = "Enter atleast 6 characters";
            // this.setState({ username :  "Enter atleast 6 characters" });

        }


        if ((this.state.username.trim().length > 0) && (!this.state.password)) {
            this.state.errors.password = "Hello " + this.state.username + " please enter Password";

        }
        else if (!this.state.password) {
            this.state.errors.password = "Enter password";

        } else if (this.state.password !== '123') {
            this.state.errors.password = "Enter correct password  ";

        }

        if ((this.state.username.trim().length >= 6) && (this.state.password === "123")) {
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }

        this.setState({ errors: this.state.errors });
        console.log(this.state.errors.username);

    }

    onSubmit = (e) => {
        e.preventDefault();
        this.formValidation();



    }

    render() {

        return (

            this.isLoggedIn ?
                <div>Welcome {this.state.username}</div> :
                <div>

                    <form onSubmit={this.onSubmit}>


                        <div
                            className="App"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                            }}
                        >
                            <Card
                                variant="outlined"
                                maxWidth="sm"
                                sx={{
                                    p: 5,
                                    bgcolor: "info.main",
                                    display: "flex",
                                    boxShadow: 24,
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                    maxWidth: 250,
                                    borderRadius: 5,

                                    m: 1,
                                }}
                            >
                                <Box component="span" sx={{ p: 0, bgcolor: "info.main" }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            p: 1,
                                            m: 1,

                                            borderRadius: 1,
                                        }}
                                    >
                                        <Typography variant="h5" component="legend" sx={{ color: "white" }}>
                                            Login Form
                                        </Typography>
                                    </Box>
                                    <TextField
                                        sx={{
                                            borderRadius: 1,
                                            boxShadow: 14,
                                            bgcolor: "white",
                                        }}
                                        id="outlined-basic"
                                        label="UserName"
                                        fullWidth
                                        margin="dense"
                                        name="username"

                                        variant="filled"
                                        value={this.state.username}
                                        onChange={this.onChange}
                                    />
                                    <span>{this.state.errors.username}</span>

                                    <TextField
                                        sx={{
                                            bgcolor: "white",
                                            boxShadow: 14,
                                            borderRadius: 1,

                                            color: "text.primary",
                                        }}

                                        name="password"
                                        fullWidth
                                        id="password-input"
                                        label="Password"
                                        margin="dense"
                                        variant="filled"
                                        type="password"

                                        value={this.state.password}
                                        onChange={this.onChange}

                                        autoComplete="current-password"
                                    />

                                    <span>{this.state.errors.password}</span>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            p: 1,
                                            m: 1,

                                            borderRadius: 1,
                                        }}
                                    >

                                        <Button
                                            variant="contained"
                                            margin="dense"
                                            type='submit'
                                            sx={{
                                                boxShadow: 20,
                                                justifyContent: "center",
                                                bgcolor: "success.main",
                                            }}
                                        >
                                            Login
                                        </Button>

                                    </Box>
                                </Box>

                            </Card>

                        </div>
                    </form>

                    {/* {Object.keys(this.state.errors).map((key) => {
          return <div key={key}> {this.state.errors[key]}
          </div>
        })
        } */}




                </div>
        )
        // )

    }

}


// export default Login;



// function Login2() {

//   const initialValues = { username: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);



//   const handleChange = (e) => {
//     // console.log(e.target);
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });

//     console.log(formValues);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   }

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }

//   }, [formErrors])

//   const validate = (values) => {
//     const errors = {}
//     if (!values.username) {
//       errors.username = "Username is required";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     }
//     return errors;
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* <pre>{JSON.stringify(formValues, undefined, 2)} </pre> */}
//       <div
//         className="App"
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//         }}
//       >
//         <Card
//           variant="outlined"
//           maxWidth="sm"
//           sx={{
//             p: 5,
//             bgcolor: "info.main",
//             display: "flex",
//             boxShadow: 24,
//             flexWrap: "wrap",
//             justifyContent: "center",
//             maxWidth: 250,
//             borderRadius: 5,

//             m: 1,
//           }}
//         >
//           <Box component="span" sx={{ p: 0, bgcolor: "info.main" }}>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 p: 1,
//                 m: 1,

//                 borderRadius: 1,
//               }}
//             >
//               <Typography variant="h5" component="legend" sx={{ color: "white" }}>
//                 Login Form
//               </Typography>
//             </Box>
//             <TextField
//               sx={{
//                 borderRadius: 1,
//                 boxShadow: 14,
//                 bgcolor: "white",
//               }}
//               id="outlined-basic"
//               label="UserName"
//               fullWidth
//               margin="dense"
//               name="username"
//               // required
//               variant="filled"
//               value={formValues.username}
//               onChange={handleChange}
//             />
//             <span>{formErrors.username}</span>

//             <TextField
//               sx={{
//                 bgcolor: "white",
//                 boxShadow: 14,
//                 borderRadius: 1,

//                 color: "text.primary",
//               }}
//               // required
//               name="password"
//               fullWidth
//               id="password-input"
//               label="Password"
//               margin="dense"
//               variant="filled"
//               type="password"
//               value={formValues.password}
//               onChange={handleChange}

//               autoComplete="current-password"
//             />

//             <span>{formErrors.password}</span>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 p: 1,
//                 m: 1,

//                 borderRadius: 1,
//               }}
//             >

//               <Button
//                 variant="contained"
//                 margin="dense"
//                 type='submit'
//                 sx={{
//                   boxShadow: 20,
//                   justifyContent: "center",
//                   bgcolor: "success.main",
//                 }}
//               >
//                 Login
//               </Button>

//             </Box>
//           </Box>

//         </Card>

//       </div>
//     </form>
//   );
// }







// // import './App.css';
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Card from "@mui/material/Card";
// import Typography from "@mui/material/Typography";
// import React from 'react';
// // import React, { useEffect, useState } from 'react';
// // const isEmpty = value => value.trim().length === '';
// // const isSixChars = value =>value.trim().length === 5;

// class Login extends React.Component {


//   constructor(props) {
//     super(props);


//     this.state = {

//       username: 'e',
//       password: '',

//       errors: {},
//       isSubmit: false,



//     };
//   }


//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.targetvalue });
//     // console.log(e.target.value);
//   }

//   formValidation = () => {
//     console.log("inside form validation");
//     console.log("state => ");
//     console.log(this.state);
//     const { username, password } = this.state;
//     let isValid = true;
//     const errors = {};
//     if (username.trim().length < 6) {
//       errors.usernameLength = "Username must be of length 6 or higher";
//       isValid = false;
//     }

//     this.setState({ errors });
//     return isValid;


//   }



//   onSubmit = (e) => {
//     console.log(e.target.value);
//     e.preventDefault();
//     const isValid = this.formValidation();
//   }


//   // console.log(this.state.username);

//   //  this.setState(  {formValues: this.state });

//   // this.setState({formErrors:{}});
//   // this.setState({isSubmit:false});

//   // const [formValues, setFormValues] = useState(initialValues);
//   // const [formErrors, setFormErrors] = useState({});
//   // const [isSubmit, setIsSubmit] = useState(false);


//   // }

//   // componentDidMount(props) {

//   // }


//   render() {

//     const { username, password, errors } = this.state;
//     return (
//       <form onSubmit={this.onSubmit}>
//         {/* <pre>{JSON.stringify(formValues, undefined, 2)} </pre> */}
//         <div
//           className="App"
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//           }}
//         >
//           <Card
//             variant="outlined"
//             maxwidth="sm"
//             sx={{
//               p: 5,
//               bgcolor: "info.main",
//               display: "flex",
//               boxShadow: 24,
//               flexWrap: "wrap",
//               justifyContent: "center",
//               maxwidth: 250,
//               borderRadius: 5,

//               m: 1,
//             }}
//           >
//             <Box component="span" sx={{ p: 0, bgcolor: "info.main" }}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   p: 1,
//                   m: 1,

//                   borderRadius: 1,
//                 }}
//               >
//                 <Typography variant="h5" component="legend" sx={{ color: "white" }}>
//                   Login Form
//                 </Typography>
//               </Box>
//               <TextField
//                 sx={{
//                   borderRadius: 1,
//                   boxShadow: 14,
//                   bgcolor: "white",
//                 }}
//                 id="outlined-basic"
//                 label="UserName"
//                 fullWidth
//                 margin="dense"
//                 name="username"
//                 // required
//                 variant="filled"
//                 // value={username}
//               value={this.state.username}

//                 onChange={this.onChange}

//               // defaultValue={this.state.formValues.username}

//               // onChange={this.handleChange}
//               />
//               {Object.keys(errors).map((key) => {
//                 return <div key={key}>{errors[key]}</div>

//               })}
//               <TextField
//                 sx={{
//                   bgcolor: "white",
//                   boxShadow: 14,
//                   borderRadius: 1,

//                   color: "text.primary",
//                 }}
//                 // required
//                 name="password"
//                 fullWidth
//                 id="password-input"
//                 label="Password"
//                 margin="dense"
//                 variant="filled"
//                 type="password"
//                 value={password}
//                 onChange={this.onChange}
//                 // value={this.state.password}
//                 // onChange={this.handleChange}

//                 autoComplete="current-password"
//               />
//             </Box>


//             {/* <span>{this.state.formErrors.password}</span> */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 p: 1,
//                 m: 1,

//                 borderRadius: 1,
//               }}
//             >

//               <Button
//                 variant="contained"
//                 margin="dense"
//                 type='submit'
//                 sx={{
//                   boxShadow: 20,
//                   justifyContent: "center",
//                   bgcolor: "success.main",
//                 }}
//               >
//                 Login
//               </Button>

//             </Box>
//             {/* </Box> */}

//           </Card>

//         </div>
//       </form >
//     );
//   }
// }



// export default Login; 



// // import './App.css';
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Card from "@mui/material/Card";
// import Typography from "@mui/material/Typography";
// // import { useEffect, useState } from 'react';
// import React from "react";

// // const isEmpty = value => value.trim().length === '';
// // const isSixChars = value =>value.trim().length === 5;


// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//       errors: {}
//     };
//   }
 
 


//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   formValidation = () => {
//     const { username, password } = this.state;
//     let isValid = true;
//     const errors = {};

//     if (!username) {
//       errors.username = "Enter username";
//       isValid = false;
//     } else    if (username.trim().length < 6) {
//       errors.username = "Enter atleast 6 characters";
//       isValid = false;
//     }

//     if (!password) {
//       errors.password = "Enter password";
//       isValid = false;
//     } else    if (password !== 'password') {
//       errors.password = "Enter correct password  ";
//       isValid = false;
//     }


//     this.setState({ errors });
//     console.log(this.state.errors.username);
//     return isValid;
//   }

//   onSubmit = (e) => {
//     e.preventDefault();
//     const isValid = this.formValidation();
//   }

//   render() {

//     return (

//       <div>
//         <form onSubmit={this.onSubmit}>


//          <div
//             className="App"
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               justifyContent: "center",
//             }}
//           >
//             <Card
//               variant="outlined"
//               maxWidth="sm"
//               sx={{
//                 p: 5,
//                 bgcolor: "info.main",
//                 display: "flex",
//                 boxShadow: 24,
//                 flexWrap: "wrap",
//                 justifyContent: "center",
//                 maxWidth: 250,
//                 borderRadius: 5,

//                 m: 1,
//               }}
//             >
//               <Box component="span" sx={{ p: 0, bgcolor: "info.main" }}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     p: 1,
//                     m: 1,

//                     borderRadius: 1,
//                   }}
//                 >
//                   <Typography variant="h5" component="legend" sx={{ color: "white" }}>
//                     Login Form
//                   </Typography>
//                 </Box>
//                 <TextField
//                   sx={{
//                     borderRadius: 1,
//                     boxShadow: 14,
//                     bgcolor: "white",
//                   }}
//                   id="outlined-basic"
//                   label="UserName"
//                   fullWidth
//                   margin="dense"
//                   name="username"
//                   // required
//                   variant="filled"
//                   value={this.state.username}
//                   onChange={this.onChange}
//                 // value={formValues.username}
//                 // onChange={handleChange}
//                 />
//                 <span>{this.state.errors.username}</span>

//                 <TextField
//                   sx={{
//                     bgcolor: "white",
//                     boxShadow: 14,
//                     borderRadius: 1,

//                     color: "text.primary",
//                   }}
//                   // required
//                   name="password"
//                   fullWidth
//                   id="password-input"
//                   label="Password"
//                   margin="dense"
//                   variant="filled"
//                   type="password"
                  
//                   value={this.state.password}
//                   onChange={this.onChange}
//                   // value={formValues.password}
//                   // onChange={handleChange}

//                   autoComplete="current-password"
//                 />

//                 <span>{this.state.errors.password}</span>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     p: 1,
//                     m: 1,

//                     borderRadius: 1,
//                   }}
//                 >

//                   <Button
//                     variant="contained"
//                     margin="dense"
//                     type='submit'
//                     sx={{
//                       boxShadow: 20,
//                       justifyContent: "center",
//                       bgcolor: "success.main",
//                     }}
//                   >
//                     Login
//                   </Button>

//                 </Box>
//               </Box>

//             </Card>

//           </div>
//         </form>

//         {/* {Object.keys(this.state.errors).map((key) => {
//           return <div key={key}> {this.state.errors[key]}
//           </div>
//         })
//         } */}




//       </div>
//     )

//   }

// }

// =======================================
// function Login2() {

//   const initialValues = { username: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);



//   const handleChange = (e) => {
//     // console.log(e.target);
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });

//     console.log(formValues);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   }

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }

//   }, [formErrors])

//   const validate = (values) => {
//     const errors = {}
//     if (!values.username) {
//       errors.username = "Username is required";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     }
//     return errors;
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* <pre>{JSON.stringify(formValues, undefined, 2)} </pre> */}
//       <div
//         className="App"
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//         }}
//       >
//         <Card
//           variant="outlined"
//           maxWidth="sm"
//           sx={{
//             p: 5,
//             bgcolor: "info.main",
//             display: "flex",
//             boxShadow: 24,
//             flexWrap: "wrap",
//             justifyContent: "center",
//             maxWidth: 250,
//             borderRadius: 5,

//             m: 1,
//           }}
//         >
//           <Box component="span" sx={{ p: 0, bgcolor: "info.main" }}>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 p: 1,
//                 m: 1,

//                 borderRadius: 1,
//               }}
//             >
//               <Typography variant="h5" component="legend" sx={{ color: "white" }}>
//                 Login Form
//               </Typography>
//             </Box>
//             <TextField
//               sx={{
//                 borderRadius: 1,
//                 boxShadow: 14,
//                 bgcolor: "white",
//               }}
//               id="outlined-basic"
//               label="UserName"
//               fullWidth
//               margin="dense"
//               name="username"
//               // required
//               variant="filled"
//               value={formValues.username}
//               onChange={handleChange}
//             />
//             <span>{formErrors.username}</span>

//             <TextField
//               sx={{
//                 bgcolor: "white",
//                 boxShadow: 14,
//                 borderRadius: 1,

//                 color: "text.primary",
//               }}
//               // required
//               name="password"
//               fullWidth
//               id="password-input"
//               label="Password"
//               margin="dense"
//               variant="filled"
//               type="password"
//               value={formValues.password}
//               onChange={handleChange}

//               autoComplete="current-password"
//             />

//             <span>{formErrors.password}</span>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 p: 1,
//                 m: 1,

//                 borderRadius: 1,
//               }}
//             >

//               <Button
//                 variant="contained"
//                 margin="dense"
//                 type='submit'
//                 sx={{
//                   boxShadow: 20,
//                   justifyContent: "center",
//                   bgcolor: "success.main",
//                 }}
//               >
//                 Login
//               </Button>

//             </Box>
//           </Box>

//         </Card>

//       </div>
//     </form>
//   );
// }

export default Login;






// // import './App.css';
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Card from "@mui/material/Card";
// import Typography from "@mui/material/Typography";
// import React from 'react';
// // import React, { useEffect, useState } from 'react';
// // const isEmpty = value => value.trim().length === '';
// // const isSixChars = value =>value.trim().length === 5;

// class Login extends React.Component {


//   constructor(props) {
//     super(props);


//     this.state = {

//       username: 'e',
//       password: '',

//       errors: {},
//       isSubmit: false,



//     };
//   }


//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.targetvalue });
//     // console.log(e.target.value);
//   }

//   formValidation = () => {
//     console.log("inside form validation");
//     console.log("state => ");
//     console.log(this.state);
//     const { username, password } = this.state;
//     let isValid = true;
//     const errors = {};
//     if (username.trim().length < 6) {
//       errors.usernameLength = "Username must be of length 6 or higher";
//       isValid = false;
//     }

//     this.setState({ errors });
//     return isValid;


//   }



//   onSubmit = (e) => {
//     console.log(e.target.value);
//     e.preventDefault();
//     const isValid = this.formValidation();
//   }


//   // console.log(this.state.username);

//   //  this.setState(  {formValues: this.state });

//   // this.setState({formErrors:{}});
//   // this.setState({isSubmit:false});

//   // const [formValues, setFormValues] = useState(initialValues);
//   // const [formErrors, setFormErrors] = useState({});
//   // const [isSubmit, setIsSubmit] = useState(false);


//   // }

//   // componentDidMount(props) {

//   // }


//   render() {

//     const { username, password, errors } = this.state;
//     return (
//       <form onSubmit={this.onSubmit}>
//         {/* <pre>{JSON.stringify(formValues, undefined, 2)} </pre> */}
//         <div
//           className="App"
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//           }}
//         >
//           <Card
//             variant="outlined"
//             maxwidth="sm"
//             sx={{
//               p: 5,
//               bgcolor: "info.main",
//               display: "flex",
//               boxShadow: 24,
//               flexWrap: "wrap",
//               justifyContent: "center",
//               maxwidth: 250,
//               borderRadius: 5,

//               m: 1,
//             }}
//           >
//             <Box component="span" sx={{ p: 0, bgcolor: "info.main" }}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   p: 1,
//                   m: 1,

//                   borderRadius: 1,
//                 }}
//               >
//                 <Typography variant="h5" component="legend" sx={{ color: "white" }}>
//                   Login Form
//                 </Typography>
//               </Box>
//               <TextField
//                 sx={{
//                   borderRadius: 1,
//                   boxShadow: 14,
//                   bgcolor: "white",
//                 }}
//                 id="outlined-basic"
//                 label="UserName"
//                 fullWidth
//                 margin="dense"
//                 name="username"
//                 // required
//                 variant="filled"
//                 // value={username}
//               value={this.state.username}

//                 onChange={this.onChange}

//               // defaultValue={this.state.formValues.username}

//               // onChange={this.handleChange}
//               />
//               {Object.keys(errors).map((key) => {
//                 return <div key={key}>{errors[key]}</div>

//               })}
//               <TextField
//                 sx={{
//                   bgcolor: "white",
//                   boxShadow: 14,
//                   borderRadius: 1,

//                   color: "text.primary",
//                 }}
//                 // required
//                 name="password"
//                 fullWidth
//                 id="password-input"
//                 label="Password"
//                 margin="dense"
//                 variant="filled"
//                 type="password"
//                 value={password}
//                 onChange={this.onChange}
//                 // value={this.state.password}
//                 // onChange={this.handleChange}

//                 autoComplete="current-password"
//               />
//             </Box>


//             {/* <span>{this.state.formErrors.password}</span> */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 p: 1,
//                 m: 1,

//                 borderRadius: 1,
//               }}
//             >

//               <Button
//                 variant="contained"
//                 margin="dense"
//                 type='submit'
//                 sx={{
//                   boxShadow: 20,
//                   justifyContent: "center",
//                   bgcolor: "success.main",
//                 }}
//               >
//                 Login
//               </Button>

//             </Box>
//             {/* </Box> */}

//           </Card>

//         </div>
//       </form >
//     );
//   }
// }



// export default Login; 