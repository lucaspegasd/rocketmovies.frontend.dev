import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [data, setData] = useState({})

    async function signIn({ email, password }){

        try {
         const response = await api.post("/sessions", { email, password });

         const { user, token } = response.data;

         api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
         setData({ user, token });

         localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
         localStorage.setItem("@rocketmovies:token", token);

        } catch (error) {
          if(error.response){
            alert(error.response.data.message)
          }else{
            alert("não foi possivel cadastrar :(")
          }
        }
    }

    async function updateProfile({ user, avatarFile }){

        if(avatarFile){
            const fileUpLoadForm = new FormData();
            fileUpLoadForm.append("avatar", avatarFile);

            const response = await api.patch("/users/avatar", fileUpLoadForm);
            user.avatar = response.data.avatar;
        }
        try {
            await api.put("/users", user);
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));

            setData({ user, token: data.token })
            alert("profile updated")
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("not possible to update")
                console.log(error)
            }
        }
    }

    async function signOut(){

        const response = confirm("Are you sure that you want to Log Out?")
        if(response == true){
          localStorage.removeItem("@rocketmovies:user");
          localStorage.removeItem("@rocketmovies:token");

          setData({});
        } 
    }

    useEffect(() => {
      const token = localStorage.getItem("@rocketmovies:token");
      const user = localStorage.getItem("@rocketmovies:user");

      if(token && user){
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        setData({
            token,
            user: JSON.parse(user)
        })
      }
    }, [])

    return(
        <AuthContext.Provider value={{ signIn, signOut, updateProfile, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context;
}

export { AuthProvider, useAuth };