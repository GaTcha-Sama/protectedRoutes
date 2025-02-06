import { useState } from "react";

export type UserData = {
    email: string,
    password: string
}

export const Home = () => {
    const [userData, setUserData] = useState<UserData>({
        email: "",
        password: ""
    })

  return (
    <div className="">
        <label>
            Please enter your email
        <input type="text" 
                placeholder="your email" 
                value={userData.email} 
                onChange={(e) => setUserData({
                    email: e.target.value,
                    password: userData.password
                })}
        />
        </label>
        <label>
            Password
        <input type="password"
                value={userData.password}
                onChange={(e) => setUserData({
                    email: userData.email,
                    password: e.target.value
                })}
        />
        </label>
        <button type="submit">Sign In</button>
    </div>
  )
};
