

const editProfile = () => {
    const [firstNameEdit, setFirstNameEdit] = useState("");
    const [lastNameEdit, setLastNameEdit] = useState("");
    const [userNameEdit, setUserNameEdit] = useState("");
    const [passwordEdit, setPasswordEdit] = useState("");
    
    // const {userId} = useParams();
    // const user = userList.find((user)=> user.id == userId);
    // const {id} = user

    const [userList, setUserList] = useState([]);

    const editUser = (id)=>{
        Axios.put("./http://localhost:3001/update", {
            firstName: firstNameEdit,
            lastName: lastNameEdit,
            userName: userNameEdit,
            password: passwordEdit,
            id: id
        }).then((response)=>{
            console.log(response);
        })
    }

    const getUsers =()=>{
        Axios.get("http://localhost:3001/users").then((response)=>{
          setUserList(response.data)
        })
      };

    return ( 
        <div>
            <div className='profile-page-container'>
          {username}
            <div className="basicInfo">
        <div className="input-login-group">
          
          <input
            type="text"
            id="firstName"
            required
            className="input-login"
            placeholder='ali asghar'
            onChange={(e)=>{
                setFirstNameEdit(e.target.value)
            }}
          />
          <label htmlFor="name" className="input-login-label">
            نام
          </label>
        </div>
        <div className="input-login-group">
          <input
            type="text"
            id="lastName"
            required
            className="input-login"
            placeholder='sedighian'
            onChange={(e)=>{
                setLastNameEdit(e.target.value)
            }}
          />
          <label htmlFor="name" className="input-login-label">
            نام خانوادگی
          </label>
        </div>
        <div className="input-login-group">
          <input
            type="text"
            id="userName"
            required
            className="input-login"
            placeholder='as.sedighian@gmail.com'
            onChange={(e)=>{
                setUserNameEdit(e.target.value)
            }}
          />
          <label htmlFor="name" className="input-login-label">
            نام کاربری
          </label>
        </div>
        <div className="input-login-group">
          <input
            type="text"
            id="password"
            required
            className="input-login"
            placeholder='******'
            onChange={(e)=>{
                setPasswordEdit(e.target.value)
            }}
          />
          <label htmlFor="name" className="input-login-label">
            رمز عبور
          </label>
        </div>
            </div>
        <button className="edit-user-button" onClick={()=>{editUser()}}>
            ویرایش اطلاعات
        </button>
        <button onClick={getUsers}>get users</button>
        
        {userList
        .map((val, key)=>{
          return(
            <div>
              <h3>username: {val.userName}</h3>
              <h3>id: {val.id}</h3>
            </div>
          )
        })}
        
        </div>
        </div>
     );
}
 
export default editProfile;